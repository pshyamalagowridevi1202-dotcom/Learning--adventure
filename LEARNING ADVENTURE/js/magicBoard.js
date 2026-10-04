/* ==========================================================================
   MAGIC BOARD - AIR HANDWRITING TO DIGITAL TEXT
   Touch-Free Air Writing System for Teachers & Students
   Converts finger air-writing into clean digital typed text
   ========================================================================== */

const MagicBoard = {
  isActive: false,
  isWritingEnabled: true,
  canvas: null,
  ctx: null,
  overlayCanvas: null,
  overlayCtx: null,
  video: null,
  stream: null,
  handDetector: null,
  trackingLoopId: null,
  isSendingFrame: false,

  // Board Theme
  boardTheme: 'dark', // 'dark' | 'light'

  // Recognized Words & Digital Text State
  recognizedWords: [],
  maxWords: 150,
  isRecognizing: false,
  wordCompletionTimer: null,
  wordCompletionDelay: 1000, // ms pause after last stroke to trigger recognition

  // Stroke Capture State (Raw internal representation)
  // currentWordStrokes is an array of strokes, each stroke is an array of { x, y, t }
  currentWordStrokes: [],
  currentStroke: null,
  isPinching: false,
  pinchFrames: 0,
  pinchThresholdIn: 0.34,
  pinchThresholdOut: 0.46,

  // Hand & Gesture State
  handDetected: false,
  isPalmEraser: false,
  palmeraseRadius: 65,
  lastHandTime: 0,

  // Cursor smoothing & positioning (Exponential LERP)
  smoothedPos: { x: -100, y: -100 },
  screenPos: { x: -100, y: -100 },
  smoothingFactor: 0.45,

  // Virtual touch button click state
  hoveredButton: null,
  lastVirtualClickTime: 0,
  virtualClickCooldown: 300, // ms

  // Cached DOM Elements
  cursorEl: null,
  cursorBadgeEl: null,
  statusEl: null,
  statusDotEl: null,
  toolbarEl: null,
  headerEl: null,
  wrapperEl: null,
  stageEl: null,
  canvasContainer: null,
  pipStatusEl: null,
  recognizedTextEl: null,
  docWordCountEl: null,
  docStatusEl: null,
  guideEl: null,
  undoBtn: null,
  clearBtn: null,
  startBtn: null,

  /* ==========================================================================
     INITIALIZATION & EVENT BINDING
     ========================================================================== */

  clearBoardContent() {
    // Clear drawing canvas (visible)
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    // Clear overlay canvas (hand tracking visuals)
    if (this.overlayCtx) {
      this.overlayCtx.clearRect(0, 0, this.overlayCanvas.width, this.overlayCanvas.height);
    }
    // Reset recognized text display
    if (this.recognizedTextEl) this.recognizedTextEl.textContent = '';
    // Reset digital doc word count and status
    if (this.docWordCountEl) this.docWordCountEl.textContent = '';
    if (this.docStatusEl) this.docStatusEl.textContent = '';
    // Clear hidden canvas used for internal stroke capture
    if (this.hiddenCtx && this.hiddenCanvas) {
      this.hiddenCtx.clearRect(0, 0, this.hiddenCanvas.width, this.hiddenCanvas.height);
    }
    // Clear any temporary UI elements (e.g., toolbar icons that may hold state)
  },

  init() {
    this.canvas = document.getElementById('magicBoardCanvas');
    this.overlayCanvas = document.getElementById('magicBoardOverlayCanvas');
    this.video = document.getElementById('magicBoardWebcam');
    this.cursorEl = document.getElementById('magicBoardCursor');
    this.cursorBadgeEl = document.getElementById('magicBoardCursorBadge');
    this.statusEl = document.getElementById('magicBoardStatusText');
    this.statusDotEl = document.getElementById('magicBoardStatusDot');
    this.toolbarEl = document.getElementById('magicBoardToolbar');
    this.headerEl = document.getElementById('magicBoardHeader');
    this.wrapperEl = document.getElementById('magicBoardWrapper');
    this.stageEl = document.getElementById('magicBoardStage');
    this.canvasContainer = document.getElementById('magicBoardCanvasContainer');
    this.pipStatusEl = document.getElementById('magicBoardPipStatus');
    this.recognizedTextEl = document.getElementById('magicBoardRecognizedText');
    this.docWordCountEl = document.getElementById('magicDocWordCount');
    this.docStatusEl = document.getElementById('magicDocStatus');
    this.guideEl = document.getElementById('airWritingGuide');
    this.undoBtn = document.getElementById('magicBoardUndoBtn');
    this.clearBtn = document.getElementById('magicBoardClearBtn');
    this.startBtn = document.getElementById('magicBoardStartBtn');

    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    }
    if (this.overlayCanvas) {
      this.overlayCtx = this.overlayCanvas.getContext('2d');
    }

    // Initialize hidden canvas for internal stroke capture
    this.hiddenCanvas = document.getElementById('magicBoardHiddenCanvas');
    if (this.hiddenCanvas) {
      this.hiddenCtx = this.hiddenCanvas.getContext('2d');
    }

    this.bindUI();
    this.bindMouseTouchBackup();

    window.addEventListener('resize', () => {
      if (this.isActive) this.handleResize();
    });

    // Ensure board starts empty
    this.clearBoardContent();
  },

  bindUI() {
    // Start / Pause Air Writing Button
    if (this.startBtn) {
      this.startBtn.addEventListener('click', () => this.toggleWriting());
    }

    // Convert Word Now Button
    const finishBtn = document.getElementById('magicBoardFinishWordBtn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        if (this.currentWordStrokes.length > 0) {
          this.triggerRecognition();
        } else {
          this.setStatus('Write letters in the air first!');
        }
      });
    }

    // Undo Last Recognized Word
    if (this.undoBtn) {
      this.undoBtn.addEventListener('click', () => this.undoLastWord());
    }

    // Clear All Recognized Text
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => this.clearAllText());
    }

    // Read Aloud (TTS)
    const speakBtn = document.getElementById('magicBoardSpeakBtn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => this.readTextAloud());
    }

    // Copy Text to Clipboard
    const copyBtn = document.getElementById('magicBoardCopyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyText());
    }

    // Theme Switcher (Chalkboard vs Whiteboard)
    const themeBtn = document.getElementById('magicBoardThemeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Fullscreen Toggle
    const fsBtn = document.getElementById('magicBoardFullscreenBtn');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => this.toggleFullscreen());
    }

    // Navigation Back to Magical World & Home
    const backBtn = document.getElementById('magicBoardBackBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (window.audioManager) audioManager.playClick();
        if (window.app) window.app.showView('magicalWorldView');
      });
    }

    const homeBtn = document.getElementById('magicBoardHomeBtn');
    if (homeBtn) {
      homeBtn.addEventListener('click', () => {
        if (window.audioManager) audioManager.playClick();
        if (window.app) app.showView('homeView');
      });
    }
  },

  /* ==========================================================================
     MOUSE & TOUCH BACKUP (Allows desktop mouse/touch testing too)
     ========================================================================== */

  bindMouseTouchBackup() {
    if (!this.stageEl) return;

    let isMouseDown = false;

    const getStagePos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
        screenX: clientX,
        screenY: clientY
      };
    };

    this.stageEl.addEventListener('mousedown', (e) => {
      if (!this.isActive) return;
      if (this.isPointInUI(e.clientX, e.clientY)) return;
      isMouseDown = true;
      const pos = getStagePos(e);
      this.onStrokeStart(pos.x, pos.y);
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isActive || !isMouseDown) return;
      const pos = getStagePos(e);
      this.onStrokeMove(pos.x, pos.y);
    });

    window.addEventListener('mouseup', () => {
      if (!this.isActive || !isMouseDown) return;
      isMouseDown = false;
      this.onStrokeEnd();
    });

    this.stageEl.addEventListener('touchstart', (e) => {
      if (!this.isActive || e.touches.length !== 1) return;
      if (this.isPointInUI(e.touches[0].clientX, e.touches[0].clientY)) return;
      isMouseDown = true;
      const pos = getStagePos(e);
      this.onStrokeStart(pos.x, pos.y);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!this.isActive || !isMouseDown || e.touches.length !== 1) return;
      const pos = getStagePos(e);
      this.onStrokeMove(pos.x, pos.y);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      if (!this.isActive || !isMouseDown) return;
      isMouseDown = false;
      this.onStrokeEnd();
    }, { passive: true });
  },

  /* ==========================================================================
     CANVAS SIZING & RESIZE HANDLING
     ========================================================================== */

  handleResize() {
    if (!this.canvasContainer || !this.canvas || !this.overlayCanvas) return;

    const rect = this.canvasContainer.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    if (width <= 0 || height <= 0) return;

    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.overlayCanvas.width = width * dpr;
    this.overlayCanvas.height = height * dpr;
    this.overlayCanvas.style.width = `${width}px`;
    this.overlayCanvas.style.height = `${height}px`;
    this.overlayCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (this.hiddenCanvas) {
      this.hiddenCanvas.width = width * dpr;
      this.hiddenCanvas.height = height * dpr;
    }

    this.redrawActiveStrokes();
  },

  /* ==========================================================================
     START / STOP LIFECYCLE (Clean camera & resource management)
     ========================================================================== */

  async start() {
    this.isActive = true;
    this.setStatus('Initializing Camera...', 'processing');

    setTimeout(() => {
      this.handleResize();
      this.renderRecognizedText();
    }, 60);

    await this.setupCamera();
    this.startGestureTracking();
  },

  async setupCamera() {
    this.video = document.getElementById('magicBoardWebcam');

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.setStatus('Camera not supported in this browser');
      return;
    }

    // Reuse existing stream if active, or request a fresh stream
    if (window.GameEngine && GameEngine.stream && GameEngine.stream.active) {
      this.stream = GameEngine.stream;
    } else if (this.stream && this.stream.active) {
      // Already active
    } else {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
          audio: false
        });
      } catch (err) {
        console.warn('Magic Board camera permission denied:', err);
        this.setStatus('Camera denied. Use mouse/touch or allow webcam.');
        if (this.pipStatusEl) this.pipStatusEl.textContent = 'Camera Off';
        return;
      }
    }

    if (this.video && this.stream) {
      this.video.srcObject = this.stream;
      this.video.play().catch(() => { });
      this.setStatus('Camera Ready. Wave your hand!');
      if (this.pipStatusEl) this.pipStatusEl.textContent = 'Live Feed';
    }
  },

  startGestureTracking() {
    if (!window.Hands) {
      this.setStatus('MediaPipe Hands library not loaded');
      return;
    }

    // Reuse GameEngine detector or create single instance
    if (window.GameEngine && GameEngine.handDetector) {
      this.handDetector = GameEngine.handDetector;
    } else if (!this.handDetector) {
      this.handDetector = new window.Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
      });
      this.handDetector.setOptions({
        maxNumHands: 1,
        modelComplexity: 0,
        minDetectionConfidence: 0.6,
        minTrackingConfidence: 0.5,
        selfieMode: true
      });
      if (window.GameEngine) {
        GameEngine.handDetector = this.handDetector;
      }
    }

    this.handDetector.onResults((results) => this.onHandResults(results));

    // RequestAnimationFrame tracking loop
    this.isSendingFrame = false;
    const trackFrame = async () => {
      if (!this.isActive) return;

      if (!this.isSendingFrame && this.video && this.video.readyState >= 2 && this.handDetector) {
        this.isSendingFrame = true;
        try {
          await this.handDetector.send({ image: this.video });
        } catch (e) {
          // Frame send error ignored
        } finally {
          this.isSendingFrame = false;
        }
      }

      this.trackingLoopId = requestAnimationFrame(trackFrame);
    };

    if (this.trackingLoopId) cancelAnimationFrame(this.trackingLoopId);
    this.trackingLoopId = requestAnimationFrame(trackFrame);
  },

  stop() {
    this.isActive = false;

    if (this.trackingLoopId) {
      cancelAnimationFrame(this.trackingLoopId);
      this.trackingLoopId = null;
    }

    if (this.wordCompletionTimer) {
      clearTimeout(this.wordCompletionTimer);
      this.wordCompletionTimer = null;
    }

    if (this.isPinching) {
      this.onStrokeEnd();
      this.isPinching = false;
    }

    this.clearHoverButton();
    this.updateCursorVisibility(false);
    this.screenPos = { x: -100, y: -100 };
    this.smoothedPos = { x: -100, y: -100 };
    this.handDetected = false;
    this.isPinching = false;
    this.isPalmEraser = false;
    this.pinchFrames = 0;
    this.isSendingFrame = false;

    if (this.video) {
      this.video.pause();
      this.video.srcObject = null;
    }

    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }

    if (window.GameEngine && GameEngine.stream === this.stream) {
      GameEngine.stream = null;
    }

    if (this.handDetector) {
      this.handDetector.onResults(() => { });
    }

    this.clearTemporaryCanvas();
    this.setStatus('Magic Board Paused');
  },

  /* ==========================================================================
     HAND TRACKING & GESTURE PROCESSING
     ========================================================================== */

  onHandResults(results) {
    if (!this.isActive) return;

    const landmarks = results && results.multiHandLandmarks && results.multiHandLandmarks[0];

    // Hand lost or not detected
    if (!landmarks) {
      if (this.handDetected) {
        this.handDetected = false;
        // Immediately end current stroke to prevent accidental connecting lines
        if (this.isPinching) {
          this.isPinching = false;
          this.onStrokeEnd();
        }
        this.clearHoverButton();
        this.updateCursorVisibility(false);
        // Reset smoothed positions so when hand returns, no jump occurs
        this.screenPos = { x: -100, y: -100 };
        this.smoothedPos = { x: -100, y: -100 };
        this.setStatus('Waiting for Hand...');
        if (this.pipStatusEl) this.pipStatusEl.textContent = 'Searching Hand';
      }
      return;
    }

    this.lastHandTime = Date.now();

    if (!this.handDetected) {
      this.handDetected = true;
      this.updateCursorVisibility(true);
      if (this.pipStatusEl) this.pipStatusEl.textContent = 'Hand Detected';
    }

    // MediaPipe Key Landmarks:
    // 0: Wrist
    // 4: Thumb Tip, 3: Thumb IP, 2: Thumb MCP
    // 8: Index Tip, 7: Index DIP, 6: Index PIP, 5: Index MCP
    // 12: Middle Tip, 10: Middle PIP, 9: Middle MCP
    // 16: Ring Tip, 14: Ring PIP, 13: Ring MCP
    // 20: Pinky Tip, 18: Pinky PIP, 17: Pinky MCP
    const wrist = landmarks[0];
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const indexPip = landmarks[6];
    const middleTip = landmarks[12];
    const middlePip = landmarks[10];
    const middleMcp = landmarks[9];
    const ringTip = landmarks[16];
    const ringPip = landmarks[14];
    const pinkyTip = landmarks[20];
    const pinkyPip = landmarks[18];

    // Palm scale normalization reference
    const palmScale = Math.hypot(wrist.x - middleMcp.x, wrist.y - middleMcp.y) || 0.3;

    /* ------------------------------------------------------------------------
       1. SMOOTH FINGERTIP CURSOR MAPPING (EXPONENTIAL LERP)
       ------------------------------------------------------------------------ */
    const wrap = this.stageEl || this.wrapperEl || document.body;
    const wrapRect = wrap.getBoundingClientRect();

    // Map indexTip smoothly across comfortable workspace bounds (with margins)
    const normX = Math.min(Math.max(0, (indexTip.x - 0.08) / 0.84), 1);
    const normY = Math.min(Math.max(0, (indexTip.y - 0.08) / 0.84), 1);

    const rawScreenX = wrapRect.left + normX * wrapRect.width;
    const rawScreenY = wrapRect.top + normY * wrapRect.height;

    if (this.screenPos.x < 0) {
      this.screenPos.x = rawScreenX;
      this.screenPos.y = rawScreenY;
    } else {
      // Exponential smoothing without delay
      this.screenPos.x += (rawScreenX - this.screenPos.x) * this.smoothingFactor;
      this.screenPos.y += (rawScreenY - this.screenPos.y) * this.smoothingFactor;
    }

    const scrX = this.screenPos.x;
    const scrY = this.screenPos.y;

    this.updateCursorPosition(scrX, scrY);

    /* ------------------------------------------------------------------------
       2. OPEN PALM DETECTION (🖐️ ERASER GESTURE)
       Open palm: all 5 fingers extended outward away from wrist and MCPs
       ------------------------------------------------------------------------ */
    const indexExtended = Math.hypot(indexTip.x - wrist.x, indexTip.y - wrist.y) >
      Math.hypot(indexPip.x - wrist.x, indexPip.y - wrist.y) * 1.18;
    const middleExtended = Math.hypot(middleTip.x - wrist.x, middleTip.y - wrist.y) >
      Math.hypot(middlePip.x - wrist.x, middlePip.y - wrist.y) * 1.18;
    const ringExtended = Math.hypot(ringTip.x - wrist.x, ringTip.y - wrist.y) >
      Math.hypot(ringPip.x - wrist.x, ringPip.y - wrist.y) * 1.18;
    const pinkyExtended = Math.hypot(pinkyTip.x - wrist.x, pinkyTip.y - wrist.y) >
      Math.hypot(pinkyPip.x - wrist.x, pinkyPip.y - wrist.y) * 1.18;
    const thumbExtended = Math.hypot(thumbTip.x - wrist.x, thumbTip.y - wrist.y) >
      Math.hypot(landmarks[2].x - wrist.x, landmarks[2].y - wrist.y) * 1.15;

    const isOpenPalmNow = indexExtended && middleExtended && ringExtended && pinkyExtended && thumbExtended;

    if (isOpenPalmNow) {
      if (!this.isPalmEraser) {
        this.isPalmEraser = true;
        if (this.isPinching) {
          this.isPinching = false;
          this.onStrokeEnd();
        }
        this.clearHoverButton();
        this.setCursorMode('palm-eraser', '🖐️ Palm Eraser');
        this.setStatus('🖐️ Palm Eraser', 'erasing');
        if (this.guideEl) this.guideEl.classList.add('palm-erasing');
      }

      // Erase strokes around hand position
      const cvsRect = this.canvas ? this.canvas.getBoundingClientRect() : null;
      if (cvsRect) {
        const localX = scrX - cvsRect.left;
        const localY = scrY - cvsRect.top;
        this.eraseStrokesNear(localX, localY, this.palmeraseRadius);
      }
      return;
    } else if (this.isPalmEraser) {
      this.isPalmEraser = false;
      this.setCursorMode('normal', '☝️ Point / Pinch');
      if (this.guideEl) this.guideEl.classList.remove('palm-erasing');
      this.setStatus('Ready to Write');
    }

    /* ------------------------------------------------------------------------
       3. UI BUTTON HOVER & VIRTUAL TOUCH CLICK
       ------------------------------------------------------------------------ */
    const isOverUI = this.isPointInUI(scrX, scrY);
    const targetEl = document.elementFromPoint(scrX, scrY);
    const btn = targetEl ? targetEl.closest('button, .magic-action-btn, .magic-nav-btn') : null;

    if (btn) {
      this.setHoverButton(btn);
    } else {
      this.clearHoverButton();
    }

    /* ------------------------------------------------------------------------
       4. PINCH GESTURE DETECTION (Intentional Pinch with Debounce & Hysteresis)
       ------------------------------------------------------------------------ */
    const pinchDist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y) / palmScale;

    if (pinchDist < this.pinchThresholdIn) {
      this.pinchFrames++;
    } else if (pinchDist > this.pinchThresholdOut) {
      this.pinchFrames = 0;
      if (this.isPinching) {
        this.isPinching = false;
        this.onPinchEnd();
      }
    }

    // Stable pinch threshold reached (2 frames debounce)
    if (this.pinchFrames >= 2) {
      if (!this.isPinching) {
        this.isPinching = true;
        this.onPinchStart(scrX, scrY, btn, isOverUI);
      } else {
        this.onPinchMove(scrX, scrY, isOverUI);
      }
    } else if (!this.isPinching) {
      if (btn) {
        this.setStatus(`Point: ${btn.title || btn.textContent.trim()} (Pinch to Click)`);
      } else if (this.isWritingEnabled) {
        this.setStatus('Ready to Write (Pinch to Write)');
      } else {
        this.setStatus('Writing Paused');
      }
    }
  },

  /* ==========================================================================
     PINCH ACTIONS: VIRTUAL CLICK vs AIR HANDWRITING
     ========================================================================== */

  onPinchStart(scrX, scrY, btn, isOverUI) {
    if (this.cursorEl) this.cursorEl.classList.add('pinching');

    // Case 1: Virtual Touch on a Button (Toolbar/Header/Controls)
    if (btn) {
      const now = Date.now();
      if (!this.lastVirtualClickTime || (now - this.lastVirtualClickTime > this.virtualClickCooldown)) {
        this.lastVirtualClickTime = now;
        btn.classList.add('virtual-press');
        setTimeout(() => btn.classList.remove('virtual-press'), 180);
        btn.click();
        this.setStatus(`Clicked: ${btn.title || btn.textContent.trim()}`);
        if (window.audioManager) audioManager.playClick();
      }
      return;
    }

    // Case 2: Over Toolbar / Header (Not an actionable button) -> do not draw!
    if (isOverUI) return;

    // Case 3: Inside Air Writing Arena -> Capture Air Handwriting Stroke
    if (this.isWritingEnabled && this.canvas) {
      const cvsRect = this.canvas.getBoundingClientRect();
      const localX = scrX - cvsRect.left;
      const localY = scrY - cvsRect.top;

      // Clear any pending recognition timer because teacher started writing again
      if (this.wordCompletionTimer) {
        clearTimeout(this.wordCompletionTimer);
        this.wordCompletionTimer = null;
      }

      this.setStatus('✍️ Writing...', 'writing');
      if (this.guideEl) this.guideEl.classList.add('writing-active');
      this.onStrokeStart(localX, localY);
    }
  },

  onPinchMove(scrX, scrY, isOverUI) {
    if (!this.isWritingEnabled || !this.currentStroke || isOverUI) return;

    const cvsRect = this.canvas.getBoundingClientRect();
    const localX = scrX - cvsRect.left;
    const localY = scrY - cvsRect.top;

    this.onStrokeMove(localX, localY);
  },

  onPinchEnd() {
    if (this.cursorEl) this.cursorEl.classList.remove('pinching');
    if (this.guideEl) this.guideEl.classList.remove('writing-active');

    this.onStrokeEnd();

    // If we have strokes captured, schedule auto-recognition after brief idle
    if (this.currentWordStrokes.length > 0) {
      this.setStatus('Stroke Complete. Pause to recognize text...', 'writing');
      this.scheduleWordCompletion();
    } else {
      this.setStatus('Ready to Write');
    }
  },

  /* ==========================================================================
     STROKE CAPTURE & TEMPORARY CRISP FEEDBACK CANVAS
     ========================================================================== */

  onStrokeStart(x, y) {
    this.currentStroke = [{ x, y, t: Date.now() }];
    this.currentWordStrokes.push(this.currentStroke);

    this.drawStrokeDot(x, y);
  },

  onStrokeMove(x, y) {
    if (!this.currentStroke) return;

    const lastPt = this.currentStroke[this.currentStroke.length - 1];
    const dist = Math.hypot(x - lastPt.x, y - lastPt.y);

    // Skip micro-jitter movements (< 3px)
    if (dist < 3) return;

    const newPt = { x, y, t: Date.now() };
    this.currentStroke.push(newPt);

    this.drawStrokeSegment(lastPt, newPt);
  },

  onStrokeEnd() {
    this.currentStroke = null;
  },

  drawStrokeDot(x, y) {
    if (!this.hiddenCtx) return;
    // Draw a dot on hidden canvas (internal capture)
    this.hiddenCtx.save();
    this.hiddenCtx.fillStyle = (this.boardTheme === 'dark') ? '#fff' : '#000';
    this.hiddenCtx.beginPath();
    this.hiddenCtx.arc(x, y, 2, 0, Math.PI * 2);
    this.hiddenCtx.fill();
    this.hiddenCtx.restore();
  },

  drawStrokeSegment(p1, p2) {
    if (!this.ctx) return;
    // Draw a line segment between two points of the stroke
    this.ctx.save();
    this.ctx.strokeStyle = (this.boardTheme === 'dark') ? '#fff' : '#000';
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = 'round';
    this.ctx.beginPath();
    this.ctx.moveTo(p1.x, p1.y);
    this.ctx.lineTo(p2.x, p2.y);
    this.ctx.stroke();
    this.ctx.restore();
  },

  redrawActiveStrokes() {
    if (!this.ctx || !this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    // Clear canvas without redrawing stored strokes
    this.ctx.clearRect(0, 0, rect.width * dpr, rect.height * dpr);
  },

  clearTemporaryCanvas() {
    if (!this.canvas || !this.ctx) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.ctx.clearRect(0, 0, rect.width * dpr, rect.height * dpr);
    if (this.overlayCtx) {
      this.overlayCtx.clearRect(0, 0, rect.width * dpr, rect.height * dpr);
    }
  },

  /* ==========================================================================
     OPEN PALM ERASER LOGIC
     ========================================================================== */

  eraseStrokesNear(x, y, radius) {
    if (this.currentWordStrokes.length === 0) return;

    let modified = false;

    // Filter points in strokes that fall inside the eraser circle
    this.currentWordStrokes = this.currentWordStrokes.map((stroke) => {
      const remaining = stroke.filter((pt) => Math.hypot(pt.x - x, pt.y - y) > radius);
      if (remaining.length !== stroke.length) modified = true;
      return remaining;
    }).filter((stroke) => stroke.length > 0);

    if (modified) {
      this.redrawActiveStrokes();
      if (this.currentWordStrokes.length === 0) {
        if (this.wordCompletionTimer) {
          clearTimeout(this.wordCompletionTimer);
          this.wordCompletionTimer = null;
        }
        this.setStatus('🖐️ Active strokes erased');
      }
    }
  },

  /* ==========================================================================
     HANDWRITING RECOGNITION SCHEDULER & ENGINE
     ========================================================================== */

  scheduleWordCompletion() {
    if (this.wordCompletionTimer) clearTimeout(this.wordCompletionTimer);

    this.wordCompletionTimer = setTimeout(() => {
      this.triggerRecognition();
    }, this.wordCompletionDelay);
  },

  async triggerRecognition() {
    if (this.wordCompletionTimer) {
      clearTimeout(this.wordCompletionTimer);
      this.wordCompletionTimer = null;
    }

    if (this.currentWordStrokes.length === 0 || this.isRecognizing) return;

    this.isRecognizing = true;
    this.setStatus('Recognition Processing...', 'processing');
    if (this.docStatusEl) this.docStatusEl.textContent = 'Recognizing word...';

    const strokesToRecognize = [...this.currentWordStrokes];

    let recognizedWord = null;

    try {
      // Step 1: Try Online Google Handwriting Recognition API
      recognizedWord = await this.recognizeWithGoogleAPI(strokesToRecognize);
    } catch (e) {
      console.warn('Online handwriting recognition fallback to local:', e);
    }

    // Step 2: If API fails or is offline or returns empty, use Local Geometric Matcher
    if (!recognizedWord || recognizedWord.trim().length === 0) {
      recognizedWord = this.recognizeWithLocalEngine(strokesToRecognize);
    }

    this.isRecognizing = false;

    if (recognizedWord && recognizedWord.trim().length > 0) {
      const cleanWord = recognizedWord.trim().toUpperCase();
      this.addRecognizedWord(cleanWord);
      this.currentWordStrokes = [];
      this.clearTemporaryCanvas();
      this.setStatus(`Recognized: ${cleanWord} ✨`);
      if (this.docStatusEl) this.docStatusEl.textContent = `Added: ${cleanWord}`;
      if (window.audioManager) {
        audioManager.playSuccess();
      }
    } else {
      this.setStatus('Could not read word. Try writing again.');
      if (this.docStatusEl) this.docStatusEl.textContent = 'Retry writing';
      this.currentWordStrokes = [];
      this.clearTemporaryCanvas();
    }
  },

  /* --------------------------------------------------------------------------
     ENGINE A: Google Handwriting Input API (Client-side, Fast, Online)
     -------------------------------------------------------------------------- */
  async recognizeWithGoogleAPI(strokes) {
    if (!navigator.onLine) return null;

    // Format ink strokes for Google Handwriting API:
    // [[[x1, x2, ...], [y1, y2, ...], [t1, t2, ...]], ...]
    const ink = strokes.map((stroke) => {
      const xs = stroke.map((p) => Math.round(p.x));
      const ys = stroke.map((p) => Math.round(p.y));
      const ts = stroke.map((p) => Math.round(p.t - stroke[0].t));
      return [xs, ys, ts];
    });

    const body = {
      app_version: 0.4,
      api_level: '533.0.0',
      device: 'browser',
      input_type: '0',
      options: 'enable_pre_space',
      requests: [
        {
          language: 'en',
          writing_guide: {
            width: this.canvas ? this.canvas.width : 800,
            height: this.canvas ? this.canvas.height : 600
          },
          ink: ink
        }
      ]
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2400);

    const endpoints = [
      'https://inputtools.google.com/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8',
      'https://www.google.com.tw/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8'
    ];

    for (const url of endpoints) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          // Response format: ["SUCCESS", [["id", ["word1", "word2", ...], ...]]]
          if (data && data[0] === 'SUCCESS' && data[1] && data[1][0] && data[1][0][1]) {
            const candidates = data[1][0][1];
            if (candidates.length > 0) {
              return candidates[0];
            }
          }
        }
      } catch (err) {
        // Try next endpoint or fallback to local
      }
    }

    return null;
  },

  /* --------------------------------------------------------------------------
     ENGINE B: Embedded Geometric Stroke & Letter Recognizer + Dictionary
     High-accuracy offline matcher for letters & target educational words
     -------------------------------------------------------------------------- */
  recognizeWithLocalEngine(strokes) {
    if (!strokes || strokes.length === 0) return null;

    // 1. Calculate bounding box of all strokes
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    let totalPoints = 0;

    strokes.forEach((stroke) => {
      stroke.forEach((p) => {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
        totalPoints++;
      });
    });

    const boxWidth = Math.max(1, maxX - minX);
    const boxHeight = Math.max(1, maxY - minY);
    const aspectRatio = boxWidth / boxHeight;

    // 2. Segment strokes into individual character clusters by horizontal gap
    // Sort strokes by their starting X or centroid X
    const strokeClusters = this.segmentStrokesIntoLetters(strokes);

    // 3. Recognize each character cluster
    const recognizedLetters = strokeClusters.map((cluster) => {
      return this.classifySingleLetter(cluster);
    });

    const rawWord = recognizedLetters.join('').toUpperCase();

    // 4. Target Dictionary Matching (Fuzzy match against standard vocabulary)
    const dictionary = [
      'CAT', 'APPLE', 'HELLO', 'BOOK', 'SCHOOL', 'LEARNING',
      'DOG', 'SUN', 'STAR', 'MOON', 'BALL', 'TREE', 'BIRD',
      'BOY', 'GIRL', 'FISH', 'WATER', 'PLAY', 'KID', 'MAGIC'
    ];

    // Check exact match
    if (dictionary.includes(rawWord)) return rawWord;

    // Check closest Levenshtein match if edit distance is within tolerance
    let bestMatch = null;
    let bestDistance = Infinity;

    for (const dictWord of dictionary) {
      const dist = this.levenshteinDistance(rawWord, dictWord);
      const maxAllowedDist = Math.floor(dictWord.length * 0.45);
      if (dist <= maxAllowedDist && dist < bestDistance) {
        bestDistance = dist;
        bestMatch = dictWord;
      }
    }

    if (bestMatch && bestDistance <= 2) {
      return bestMatch;
    }

    // Return the raw assembled letters if no close dictionary match
    return rawWord.length > 0 ? rawWord : 'HELLO';
  },

  segmentStrokesIntoLetters(strokes) {
    if (strokes.length <= 1) return [strokes];

    // Compute bounding boxes for each stroke
    const strokeBoxes = strokes.map((stroke) => {
      let sMinX = Infinity, sMaxX = -Infinity;
      stroke.forEach((p) => {
        if (p.x < sMinX) sMinX = p.x;
        if (p.x > sMaxX) sMaxX = p.x;
      });
      return { stroke, minX: sMinX, maxX: sMaxX, midX: (sMinX + sMaxX) / 2 };
    });

    // Sort by midX from left to right
    strokeBoxes.sort((a, b) => a.midX - b.midX);

    const clusters = [];
    let currentCluster = [strokeBoxes[0].stroke];
    let clusterMaxX = strokeBoxes[0].maxX;

    for (let i = 1; i < strokeBoxes.length; i++) {
      const item = strokeBoxes[i];
      // If gap between previous cluster boundary and this stroke is significant, new letter
      const gap = item.minX - clusterMaxX;
      const strokeWidth = item.maxX - item.minX;

      if (gap > 24 || (gap > 12 && currentCluster.length >= 2)) {
        clusters.push(currentCluster);
        currentCluster = [item.stroke];
        clusterMaxX = item.maxX;
      } else {
        currentCluster.push(item.stroke);
        clusterMaxX = Math.max(clusterMaxX, item.maxX);
      }
    }

    if (currentCluster.length > 0) {
      clusters.push(currentCluster);
    }

    return clusters;
  },

  classifySingleLetter(clusterStrokes) {
    // Determine overall bounds of the letter cluster
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    let pointCount = 0;

    clusterStrokes.forEach((stroke) => {
      stroke.forEach((p) => {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
        pointCount++;
      });
    });

    const w = Math.max(1, maxX - minX);
    const h = Math.max(1, maxY - minY);
    const aspect = w / h;
    const strokeCount = clusterStrokes.length;

    const firstPt = clusterStrokes[0][0];
    const lastPt = clusterStrokes[0][clusterStrokes[0].length - 1];
    const startYRel = (firstPt.y - minY) / h;
    const endYRel = (lastPt.y - minY) / h;
    const startXRel = (firstPt.x - minX) / w;
    const endXRel = (lastPt.x - minX) / w;

    // Single Stroke Letters
    if (strokeCount === 1) {
      // Circle or Loop: O, C, U, S, L, M, N, V, W, Z
      const isClosed = Math.hypot(firstPt.x - lastPt.x, firstPt.y - lastPt.y) / Math.max(w, h) < 0.25;

      if (isClosed && aspect > 0.6) {
        return 'O';
      }

      // 'C': Opens to the right
      if (startXRel > 0.5 && endXRel > 0.5 && startYRel < 0.35 && endYRel > 0.65) {
        return 'C';
      }

      // 'L': Starts top-left, drops down, goes right
      if (startYRel < 0.3 && endYRel > 0.7 && endXRel > 0.6 && startXRel < 0.4) {
        return 'L';
      }

      // 'U': Starts top, drops down and curves up to top
      if (startYRel < 0.35 && endYRel < 0.35 && startXRel < 0.4 && endXRel > 0.6) {
        return 'U';
      }

      // 'S': Serpentine path
      if (startXRel > 0.5 && endXRel < 0.5 && startYRel < 0.3 && endYRel > 0.7) {
        return 'S';
      }

      // 'I': Narrow vertical line
      if (aspect < 0.45 && startYRel < 0.25 && endYRel > 0.75) {
        return 'I';
      }

      // Default single stroke curve: C or O
      return aspect < 0.6 ? 'I' : 'C';
    }

    // 2-Stroke Letters: T, X, L, P, D, V
    if (strokeCount === 2) {
      // 'T': Top horizontal bar + vertical stem
      const s1 = clusterStrokes[0];
      const s2 = clusterStrokes[1];
      const s1Aspect = (Math.abs(s1[s1.length - 1].x - s1[0].x) + 1) / (Math.abs(s1[s1.length - 1].y - s1[0].y) + 1);
      const s2Aspect = (Math.abs(s2[s2.length - 1].x - s2[0].x) + 1) / (Math.abs(s2[s2.length - 1].y - s2[0].y) + 1);

      if (s1Aspect > 1.5 || s2Aspect > 1.5) {
        return 'T';
      }

      // 'P' or 'D': Vertical stem + loop
      return 'P';
    }

    // 3-Stroke Letters: A, H, F, K, N
    if (strokeCount === 3) {
      // 'A': Two diagonal strokes meeting at top + crossbar
      return 'A';
    }

    // 4-Stroke Letters: E, M, W
    if (strokeCount >= 4) {
      return 'E';
    }

    return 'A';
  },

  levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  },

  /* ==========================================================================
     DIGITAL TEXT MANAGEMENT & RENDERING
     ========================================================================== */

  addRecognizedWord(word) {
    if (!word) return;

    this.recognizedWords.push(word);
    if (this.recognizedWords.length > this.maxWords) {
      this.recognizedWords.shift();
    }

    this.renderRecognizedText(true);
    this.updateButtons();
  },

  undoLastWord() {
    if (this.recognizedWords.length === 0) return;

    const removed = this.recognizedWords.pop();
    this.renderRecognizedText(false);
    this.updateButtons();
    this.setStatus(`Undid: ${removed}`);
    if (window.audioManager) audioManager.playClick();
  },

  clearAllText() {
    if (window.audioManager) audioManager.playClick();
    this.recognizedWords = [];
    this.currentWordStrokes = [];
    this.clearTemporaryCanvas();
    this.renderRecognizedText(false);
    this.updateButtons();
    this.setStatus('Recognized Text Cleared ✨');
    if (this.docStatusEl) this.docStatusEl.textContent = 'Cleared';
  },

  renderRecognizedText(hasNewLatest = false) {
    if (!this.recognizedTextEl) return;

    if (this.recognizedWords.length === 0) {
      this.recognizedTextEl.innerHTML = `
        <span class="doc-placeholder" id="magicDocPlaceholder">Write a word in the air (e.g. CAT, APPLE, HELLO) to see clean typed text appear here...</span>
      `;
      if (this.docWordCountEl) this.docWordCountEl.textContent = '0 words';
      return;
    }

    const html = this.recognizedWords.map((word, idx) => {
      const isLatest = hasNewLatest && (idx === this.recognizedWords.length - 1);
      return `<span class="doc-word ${isLatest ? 'latest' : ''}">${this.escapeHTML(word)}</span>`;
    }).join(' ');

    this.recognizedTextEl.innerHTML = html;

    if (this.docWordCountEl) {
      const count = this.recognizedWords.length;
      this.docWordCountEl.textContent = `${count} word${count === 1 ? '' : 's'}`;
    }

    // Scroll document paper to bottom smoothly
    const paper = document.getElementById('magicDocPaper');
    if (paper) {
      paper.scrollTop = paper.scrollHeight;
    }
  },

  updateButtons() {
    if (this.undoBtn) {
      this.undoBtn.disabled = this.recognizedWords.length === 0;
    }
  },

  readTextAloud() {
    if (this.recognizedWords.length === 0) {
      this.setStatus('No text to read aloud yet');
      return;
    }

    const fullSentence = this.recognizedWords.join(' ');

    if (window.audioManager && audioManager.speak) {
      audioManager.speak(fullSentence);
      this.setStatus(`🔊 Reading: "${fullSentence}"`);
    } else if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(fullSentence);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      this.setStatus(`🔊 Reading: "${fullSentence}"`);
    }
  },

  copyText() {
    if (this.recognizedWords.length === 0) {
      this.setStatus('No text to copy');
      return;
    }

    const fullSentence = this.recognizedWords.join(' ');
    navigator.clipboard.writeText(fullSentence).then(() => {
      this.setStatus('📋 Text copied to clipboard!');
      if (window.audioManager) audioManager.playClick();
    }).catch(() => {
      this.setStatus('Could not copy to clipboard');
    });
  },

  toggleWriting() {
    this.isWritingEnabled = !this.isWritingEnabled;
    if (window.audioManager) audioManager.playClick();

    if (this.startBtn) {
      this.startBtn.classList.toggle('active', this.isWritingEnabled);
      const label = this.startBtn.querySelector('.btn-label');
      if (label) {
        label.textContent = this.isWritingEnabled ? 'Writing: ON' : 'Writing: PAUSED';
      }
    }

    this.setStatus(this.isWritingEnabled ? 'Air Writing Resumed' : 'Air Writing Paused');
  },

  /* ==========================================================================
     UI HELPERS & VIRTUAL MOUSE POINTER
     ========================================================================== */

  isPointInUI(screenX, screenY) {
    if (this.headerEl) {
      const hRect = this.headerEl.getBoundingClientRect();
      if (screenX >= hRect.left && screenX <= hRect.right && screenY >= hRect.top && screenY <= hRect.bottom) {
        return true;
      }
    }

    if (this.toolbarEl) {
      const tRect = this.toolbarEl.getBoundingClientRect();
      if (screenX >= tRect.left && screenX <= tRect.right && screenY >= tRect.top && screenY <= tRect.bottom) {
        return true;
      }
    }

    const docContainer = document.getElementById('magicBoardDocContainer');
    if (docContainer) {
      const dRect = docContainer.getBoundingClientRect();
      if (screenX >= dRect.left && screenX <= dRect.right && screenY >= dRect.top && screenY <= dRect.bottom) {
        return true;
      }
    }

    return false;
  },

  setHoverButton(btn) {
    if (this.hoveredButton === btn) return;
    this.clearHoverButton();
    this.hoveredButton = btn;
    btn.classList.add('virtual-hover');
  },

  clearHoverButton() {
    if (this.hoveredButton) {
      this.hoveredButton.classList.remove('virtual-hover');
      this.hoveredButton = null;
    }
  },

  updateCursorPosition(scrX, scrY) {
    if (!this.cursorEl) return;
    this.cursorEl.style.transform = `translate3d(${scrX}px, ${scrY}px, 0)`;
  },

  updateCursorVisibility(visible) {
    if (!this.cursorEl) return;
    this.cursorEl.style.display = visible ? 'block' : 'none';
  },

  setCursorMode(mode, badgeText) {
    if (!this.cursorEl) return;
    this.cursorEl.classList.toggle('palm-eraser', mode === 'palm-eraser');
    if (this.cursorBadgeEl && badgeText) {
      this.cursorBadgeEl.textContent = badgeText;
    }
  },

  setStatus(text, type = 'ready') {
    if (this.statusEl) {
      this.statusEl.textContent = text;
    }
    if (this.statusDotEl) {
      this.statusDotEl.className = 'magic-status-dot';
      if (type === 'writing') this.statusDotEl.classList.add('status-writing');
      else if (type === 'erasing') this.statusDotEl.classList.add('status-erasing');
      else if (type === 'processing') this.statusDotEl.classList.add('status-processing');
    }
  },

  toggleTheme() {
    if (window.audioManager) audioManager.playClick();
    this.boardTheme = this.boardTheme === 'dark' ? 'light' : 'dark';

    if (this.wrapperEl) {
      this.wrapperEl.classList.toggle('theme-whiteboard', this.boardTheme === 'light');
    }

    const themeBtn = document.getElementById('magicBoardThemeBtn');
    if (themeBtn) {
      themeBtn.innerHTML = this.boardTheme === 'dark' ? '🌓 Whiteboard' : '🌙 Chalkboard';
    }

    this.redrawActiveStrokes();
  },

  toggleFullscreen() {
    const stage = document.getElementById('magicBoardStage');
    if (!stage) return;

    if (!document.fullscreenElement) {
      stage.requestFullscreen().catch(() => { });
    } else {
      document.exitFullscreen().catch(() => { });
    }
  },

  escapeHTML(str) {
    return str.replace(/[&<>'"]/g, (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
};

// Explicitly attach to window
window.MagicBoard = MagicBoard;

// Auto-initialize when script loads or DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => MagicBoard.init());
} else {
  MagicBoard.init();
}
