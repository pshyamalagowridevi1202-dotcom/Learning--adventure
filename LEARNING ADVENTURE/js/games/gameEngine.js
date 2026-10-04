/* ==========================================================================
   MAGIC SKY RUNNER + STAR CATCHER - Shared gesture-controlled game hub
   ========================================================================== */

const GameEngine = {
  currentGameId: null,
  canvas: null,
  ctx: null,
  animId: null,
  handTrackFrame: null,
  score: 0,
  lives: 3,
  isGameRunning: false,
  isPaused: false,
  gameOver: false,
  lastTimestamp: 0,
  lastObstacleSpawn: 0,
  lastStarSpawn: 0,
  backgroundOffset: 0,
  obstacleSpeed: 4.2,
  clouds: [],
  obstacles: [],
  stars: [],
  starCatchState: {
    stars: [],
    score: 0,
    collected: 0,
    combo: 1,
    lastCatchAt: 0,
    timeLeft: 60000,
    active: false,
    floaters: []
  },
  magicDragState: {
    active: false,
    timerMs: 60000,
    score: 0,
    matched: 0,
    objects: [],
    targets: [],
    selectedId: null,
    particles: [],
    lastSelectedAt: 0,
    instruction: '☝️ Move your index finger over an object.'
  },
  blockBuilderState: {
    active: false,
    score: 0,
    tower: [],
    current: null,
    wobble: 0,
    stability: 1,
    instruction: '☝️ Move your index finger to guide the block.'
  },
  magicTargetHuntState: {
    active: false,
    score: 0,
    combo: 1,
    bestCombo: 1,
    targetsHit: 0,
    targetGoal: 18,
    timerMs: 60000,
    currentTarget: null,
    particles: [],
    spawnCooldown: 0,
    difficulty: 1,
    message: '🎯 Hit the glowing target!'
  },
  player: {
    x: 110,
    y: 0,
    vy: 0,
    width: 42,
    height: 42,
    grounded: true,
    invulnerable: 0
  },
  handState: {
    detected: false,
    smoothedX: 0,
    lastX: 0,
    lastY: 0,
    lastJumpAt: 0,
    fingerX: 0,
    fingerY: 0,
    leftHand: null,
    rightHand: null
  },
  video: null,
  stream: null,
  handDetector: null,
  cameraRequested: false,
  cameraRequestInFlight: false,
  controlsBound: false,
  handTrackingLoopActive: false,

  setArenaTitle() {
    const titleEl = document.querySelector('#gamePlay .arena-title-wrap .section-title');
    if (!titleEl) return;

    if (this.currentGameId === 'star_catcher') {
      titleEl.textContent = '🎮 STAR CATCHER ✨';
      return;
    }

    if (this.currentGameId === 'magic_drag') {
      titleEl.textContent = '🎮 MAGIC DRAG 🪄';
      return;
    }

    if (this.currentGameId === 'block_builder') {
      titleEl.textContent = '🎮 BLOCK BUILDER 🧱';
      return;
    }

    if (this.currentGameId === 'magic_target_hunt') {
      titleEl.textContent = '🎮 MAGIC TARGET HUNT 🎯';
      return;
    }
    if (this.currentGameId === 'neon_dodge') {
  titleEl.textContent = '🎮 NEON DODGE ⚡';
  return;
}

    titleEl.textContent = '🎮 Magic Sky Runner';
  },

  start(gameId) {
    if (gameId !== 'magic_sky_runner' && gameId !== 'star_catcher' && gameId !== 'magic_drag' && gameId !== 'block_builder' && gameId !== 'magic_target_hunt'&& gameId !== 'neon_dodge') return;

    this.currentGameId = gameId;
    this.score = 0;
    this.lives = 3;
    this.isGameRunning = true;
    this.isPaused = false;
    this.gameOver = false;
    this.lastTimestamp = 0;
    this.lastObstacleSpawn = 0;
    this.lastStarSpawn = 0;
    this.backgroundOffset = 0;
    this.obstacles = [];
    this.stars = [];
    this.clouds = [];
    this.player = {
      x: 110,
      y: 0,
      vy: 0,
      width: 42,
      height: 42,
      grounded: true,
      invulnerable: 0
    };
    this.handState = {
      detected: false,
      smoothedX: 0,
      lastX: 0,
      lastY: 0,
      lastJumpAt: 0,
      fingerX: 0,
      fingerY: 0,
      leftHand: null,
      rightHand: null
    };

    if (gameId === 'star_catcher') {
      this.resetStarCatcherState();
      this.setStatusBanner('☝️ Move your index finger to catch the stars!');
    } else if (gameId === 'magic_drag') {
      this.resetMagicDragState();
      this.setStatusBanner('🪄 MAGIC DRAG');
    } else if (gameId === 'block_builder') {
      this.resetBlockBuilderState();
      this.setStatusBanner('🧱 Position the block with your index finger');
    } else if (gameId === 'magic_target_hunt') {
      this.resetMagicTargetHuntState();
      this.setStatusBanner('🎯 Move your index fingertip to hit the glowing target!');
    }else if (gameId === 'neon_dodge') {
  this.resetNeonDodgeState();
  this.setStatusBanner('⚡ Move your index finger and dodge the obstacles!');
    }else {
      this.setStatusBanner('Allow Camera Access');
    }

    this.setArenaTitle();
    app.showView('gamePlay');
    this.initCanvas();
  },

  resetStarCatcherState() {
    this.starCatchState = {
      stars: [],
      score: 0,
      collected: 0,
      combo: 1,
      lastCatchAt: 0,
      timeLeft: 60000,
      active: true,
      floaters: []
    };
    this.score = 0;
    this.lives = 0;
    this.gameOver = false;
    this.lastTimestamp = 0;
  },

  resetMagicDragState() {
    this.magicDragState = {
      active: true,
      timerMs: 60000,
      score: 0,
      matched: 0,
      objects: [],
      targets: [],
      selectedId: null,
      particles: [],
      lastSelectedAt: 0,
      instruction: '☝️ Move your index finger over an object.'
    };
    this.score = 0;
    this.lives = 0;
    this.gameOver = false;
    this.lastTimestamp = 0;
  },

  resetBlockBuilderState() {
    this.blockBuilderState = {
      active: true,
      score: 0,
      tower: [],
      current: null,
      wobble: 0,
      stability: 1,
      instruction: '☝️ Move your index finger to guide the block.'
    };
    this.score = 0;
    this.lives = 0;
    this.gameOver = false;
    this.lastTimestamp = 0;
    this.spawnBlockBuilderBlock();
  },

  resetMagicTargetHuntState() {
    this.magicTargetHuntState = {
      active: true,
      score: 0,
      combo: 1,
      bestCombo: 1,
      targetsHit: 0,
      targetGoal: 18,
      timerMs: 60000,
      currentTarget: null,
      particles: [],
      spawnCooldown: 0,
      difficulty: 1,
      message: '🎯 Hit the glowing target!'
    };
    this.score = 0;
    this.lives = 0;
    this.gameOver = false;
    this.lastTimestamp = 0;
    this.createMagicTargetHuntTarget();
  },
  resetNeonDodgeState() {
  this.neonDodgeState = {
    active: true,
    score: 0,
    lives: 3,
    timerMs: 60000,
    obstacles: [],
    stars: [],
    spawnCooldown: 0,
    starSpawnCooldown: 0,
    difficulty: 1,
    bestScore: Number(localStorage.getItem('neonDodgeBestScore') || 0),
    player: {
      x: 0,
      y: 0,
      radius: 22
    },
    message: '⚡ Dodge the obstacles and collect stars!'
  };

  this.score = 0;
  this.lives = 3;
  this.gameOver = false;
  this.lastTimestamp = 0;
},
initNeonDodge() {
    const canvas = this.canvas;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;

    if (!this.neonDodgeState) {
      this.resetNeonDodgeState();
    }

    const state = this.neonDodgeState;

    state.active = true;
    state.score = 0;
    state.lives = 3;
    state.timerMs = 60000;
    state.obstacles = [];
    state.stars = [];
    state.spawnCooldown = 700;
    state.starSpawnCooldown = 900;
    state.difficulty = 1;

    state.player.x = width / 2;
    state.player.y = height * 0.75;
    state.player.radius = Math.max(
      18,
      Math.min(width, height) * 0.025
    );

    this.lastTimestamp = 0;
this.gameOver = false;
this.animId = requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    this.requestCameraAccess();
  },

  initCanvas() {
    this.canvas = document.getElementById('gameCanvas');
    this.video = document.getElementById('gameWebcam');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = container.clientHeight;

    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) scoreEl.textContent = this.currentGameId === 'star_catcher' ? 'Score: 0' : `Score: ${this.score}`;

    const livesEl = document.getElementById('gameLives');
    if (livesEl) {
      livesEl.textContent = this.currentGameId === 'star_catcher' ? 'Stars: 0' : `Lives: ${this.lives}`;
    }

    if (this.animId) cancelAnimationFrame(this.animId);
    this.stopHandTracking();

    if (!this.controlsBound) this.bindGameControls();
    this.resetScene();
    this.showOverlay('Allow Camera Access');

    if (this.currentGameId === 'star_catcher') {
      this.initStarCatcher();
    } else if (this.currentGameId === 'magic_drag') {
      this.initMagicDrag();
    } else if (this.currentGameId === 'block_builder') {
      this.initBlockBuilder();
    } else if (this.currentGameId === 'magic_target_hunt') {
      this.initMagicTargetHunt();
      } else if (this.currentGameId === 'neon_dodge') {
  this.initNeonDodge();
    } else {
      this.initMagicSkyRunner();
    }
  },

  bindGameControls() {
    const startBtn = document.getElementById('gameStartBtn');
    const pauseBtn = document.getElementById('gamePauseBtn');

    if (startBtn) {
      startBtn.onclick = () => {
        audioManager.playClick();
        if (this.gameOver) {
          this.start(this.currentGameId || 'magic_sky_runner');
          return;
        }
        if (this.isPaused) {
          this.isPaused = false;
          this.hideOverlay();
          this.setStatusBanner(this.currentGameId === 'star_catcher'
            ? '☝️ Move your index finger to catch the stars!'
            : (this.handState.detected ? 'HAND DETECTED' : 'Move your index finger LEFT or RIGHT'));
          return;
        }
        this.requestCameraAccess();
      };
    }

    if (pauseBtn) {
      pauseBtn.onclick = () => {
        if (!this.isGameRunning) return;
        audioManager.playClick();
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
          this.showOverlay(this.currentGameId === 'star_catcher' ? 'Game Paused' : 'Game Paused');
          this.setStatusBanner('Paused');
        } else {
          this.hideOverlay();
          this.setStatusBanner(this.currentGameId === 'star_catcher'
            ? '☝️ Move your index finger to catch the stars!'
            : (this.handState.detected ? 'HAND DETECTED' : 'Move your index finger LEFT or RIGHT'));
        }
      };
    }

    this.controlsBound = true;
  },

  resetScene() {
    this.obstacles = [];
    this.stars = [];
    this.clouds = [];

    for (let i = 0; i < 8; i++) {
      this.clouds.push({
        x: Math.random() * (this.canvas ? this.canvas.width : 900),
        y: 40 + Math.random() * 160,
        w: 70 + Math.random() * 80,
        h: 25 + Math.random() * 18,
        speed: 0.5 + Math.random() * 0.7
      });
    }
  },

  updateScore(pts) {
    this.score += pts;
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) scoreEl.textContent = `Score: ${this.score}`;
  },

  updateLives() {
    const livesEl = document.getElementById('gameLives');
    if (livesEl) {
      if (this.currentGameId === 'star_catcher') {
        livesEl.textContent = `Stars: ${this.starCatchState.collected}`;
      } else {
        livesEl.textContent = `Lives: ${this.lives}`;
      }
    }
  },

  setStatusBanner(text) {
    const banner = document.getElementById('gameStatusBanner');
    if (banner) banner.textContent = text;
  },

  showOverlay(text) {
    const overlay = document.getElementById('gameMessageOverlay');
    if (!overlay) return;
    overlay.innerHTML = '';
    overlay.textContent = text;
    overlay.classList.remove('hidden');
  },

  hideOverlay() {
    const overlay = document.getElementById('gameMessageOverlay');
    if (overlay) overlay.classList.add('hidden');
  },

  showStarCatchEndOverlay() {
    const overlay = document.getElementById('gameMessageOverlay');
    if (!overlay) return;

    overlay.innerHTML = `
      <div class="star-catcher-end-card">
        <div class="star-catcher-end-title">✨ AMAZING!</div>
        <div class="star-catcher-end-line">Stars Collected: ${this.starCatchState.collected}</div>
        <div class="star-catcher-end-line">Final Score: ${this.starCatchState.score}</div>
        <div class="star-catcher-end-actions">
          <button class="game-control-btn" id="starCatcherPlayAgainBtn">Play Again</button>
          <button class="game-control-btn secondary" id="starCatcherBackBtn">Back to Games</button>
        </div>
      </div>
    `;
    overlay.classList.remove('hidden');

    const playAgainBtn = document.getElementById('starCatcherPlayAgainBtn');
    if (playAgainBtn) {
      playAgainBtn.onclick = () => this.start('star_catcher');
    }

    const backBtn = document.getElementById('starCatcherBackBtn');
    if (backBtn) {
      backBtn.onclick = () => app.showView('gamesView');
    }
  },

  stopHandTracking() {
    this.handTrackingLoopActive = false;

    if (this.handTrackFrame) {
      cancelAnimationFrame(this.handTrackFrame);
      this.handTrackFrame = null;
    }
  },

  cleanupCamera() {
    this.stopHandTracking();

    if (this.video && !this.stream) {
      this.video.srcObject = null;
    }

    this.handState.detected = false;
    this.handState.fingerX = 0;
    this.handState.fingerY = 0;

    const panel = document.getElementById('gameCameraPanel');
    if (panel) panel.classList.remove('detected');

    const status = document.getElementById('cameraStatus');
    if (status) status.textContent = 'Waiting for camera…';
  },

  stopGame() {
    this.isGameRunning = false;
    this.isPaused = false;
    this.gameOver = false;
    if (this.animId) cancelAnimationFrame(this.animId);
    this.stopHandTracking();
    this.cleanupCamera();
  },

  async requestCameraAccess() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.showOverlay('This browser does not support camera access for gesture play.');
      this.setStatusBanner('Camera unavailable');
      return;
    }

    this.video = document.getElementById('gameWebcam');

    if (this.stream && !this.stream.active) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }

    if (this.stream && this.video) {
      this.video.srcObject = this.stream;
      this.video.play().catch(() => {});
      this.cameraRequested = true;
      this.hideOverlay();
      this.setStatusBanner(this.currentGameId === 'star_catcher'
        ? '☝️ Move your index finger to catch the stars!'
        : 'Move your index finger LEFT or RIGHT');
      this.startHandTracking();
      return;
    }

    if (this.cameraRequestInFlight) return;

    this.cameraRequestInFlight = true;
    this.cameraRequested = true;
    this.setStatusBanner(this.currentGameId === 'star_catcher' ? '☝️ Move your index finger to catch the stars!' : 'Allow Camera Access');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false
      });

      if (this.stream && this.stream !== stream) {
        this.stream.getTracks().forEach(track => track.stop());
      }

      this.stream = stream;
      if (this.video) {
        this.video.srcObject = stream;
        this.video.play().catch(() => {});
      }

      this.hideOverlay();
      this.setStatusBanner(this.currentGameId === 'star_catcher'
        ? '☝️ Move your index finger to catch the stars!'
        : 'Move your index finger LEFT or RIGHT');
      this.startHandTracking();
    } catch (error) {
      console.warn('Gesture game camera request failed:', error);
      this.cameraRequestInFlight = false;

      if (this.currentGameId === 'magic_drag') {
        this.showOverlay('Camera access is needed to play with your finger.');
        this.setStatusBanner('Camera permission needed');

        const panel = document.getElementById('gameCameraPanel');
        if (panel) {
          const status = document.getElementById('cameraStatus');
          if (status) status.textContent = 'Permission denied';

          let actions = panel.querySelector('.camera-permission-actions');
          if (!actions) {
            actions = document.createElement('div');
            actions.className = 'camera-permission-actions';
            panel.appendChild(actions);
          }

          actions.innerHTML = `
            <button class="game-control-btn" id="magicDragTryAgainBtn">Try Again</button>
            <button class="game-control-btn secondary" id="magicDragPermissionBackBtn">Back to Games</button>
          `;

          const tryAgainBtn = document.getElementById('magicDragTryAgainBtn');
          if (tryAgainBtn) tryAgainBtn.onclick = () => this.requestCameraAccess();

          const backBtn = document.getElementById('magicDragPermissionBackBtn');
          if (backBtn) backBtn.onclick = () => app.showView('gamesView');
        }
        return;
      }

      this.showOverlay('Camera access is required for gesture gameplay. Please allow camera access and try again.');
      this.setStatusBanner('Camera permission needed');

      const status = document.getElementById('cameraStatus');
      if (status) status.textContent = 'Permission denied';

      const panel = document.getElementById('gameCameraPanel');
      if (panel && !document.getElementById('cameraBackBtn')) {
        const btn = document.createElement('button');
        btn.id = 'cameraBackBtn';
        btn.className = 'game-control-btn secondary';
        btn.textContent = 'Back';
        btn.style.marginTop = '10px';
        btn.onclick = () => app.showView('gamesView');
        panel.appendChild(btn);
      }
    } finally {
      this.cameraRequestInFlight = false;
    }
  },

  startHandTracking() {
    this.video = this.video || document.getElementById('gameWebcam');

    if (!this.video || !this.stream || !this.isGameRunning) return;

    if (!window.Hands) {
      this.setStatusBanner('Gesture tracking unavailable');
      this.showOverlay('Camera access is ready, but gesture tracking is unavailable in this browser.');
      return;
    }

    if (!this.handDetector) {
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
    }

    this.handDetector.onResults((results) => this.processHandResults(results));

    if (this.video.srcObject !== this.stream) {
      this.video.srcObject = this.stream;
    }

    if (this.handTrackingLoopActive) return;
    this.handTrackingLoopActive = true;

    let lastProcessTime = 0;

    const poll = async () => {
      if (!this.isGameRunning || this.isPaused || !this.video || !this.handDetector || !this.handTrackingLoopActive) return;

      try {
        const now = performance.now();

        if (this.video.readyState >= 2 && now - lastProcessTime >= 40) {
          lastProcessTime = now;
          await this.handDetector.send({ image: this.video });
        }
      } catch (error) {
        console.warn('Hand tracking skipped a frame:', error);
      }

      this.handTrackFrame = requestAnimationFrame(poll);
    };

    if (this.handTrackFrame) cancelAnimationFrame(this.handTrackFrame);
    this.handTrackFrame = requestAnimationFrame(poll);
  },

  processHandResults(results) {
    const panel = document.getElementById('gameCameraPanel');
    const status = document.getElementById('cameraStatus');
    const landmarks = results && results.multiHandLandmarks ? results.multiHandLandmarks : [];

    if (!landmarks.length) {
      this.handState.detected = false;
      this.handState.fingerX = 0;
      this.handState.fingerY = 0;
      this.handState.leftHand = null;
      this.handState.rightHand = null;
      if (panel) panel.classList.remove('detected');
      if (status) status.textContent = 'Waiting for hand…';
      return;
    }

    const videoWidth = this.video && this.video.videoWidth ? this.video.videoWidth : this.canvas.width;
    const videoHeight = this.video && this.video.videoHeight ? this.video.videoHeight : this.canvas.height;

    const handEntries = landmarks.map((hand) => {
      const wrist = hand[0];
      const tip = hand[8];
      const x = (tip.x * videoWidth) * (this.canvas.width / videoWidth);
      const y = (tip.y * videoHeight) * (this.canvas.height / videoHeight);
      const wristX = (wrist.x * videoWidth) * (this.canvas.width / videoWidth);
      const wristY = (wrist.y * videoHeight) * (this.canvas.height / videoHeight);
      const isLeft = wristX < this.canvas.width / 2;

      return {
        x,
        y,
        wristX,
        wristY,
        isLeft,
        tip,
        hand
      };
    });

    const leftHand = handEntries.filter((entry) => entry.isLeft).sort((a, b) => a.wristX - b.wristX)[0] || null;
    const rightHand = handEntries.filter((entry) => !entry.isLeft).sort((a, b) => b.wristX - a.wristX)[0] || null;

    this.handState.leftHand = leftHand ? { x: leftHand.x, y: leftHand.y } : null;
    this.handState.rightHand = rightHand ? { x: rightHand.x, y: rightHand.y } : null;

    const mainHand = handEntries[0] || null;
    if (!mainHand) {
      this.handState.detected = false;
      this.handState.fingerX = 0;
      this.handState.fingerY = 0;
      return;
    }

    const tip = mainHand.tip;
    const base = mainHand.hand[5];
    const tipX = mainHand.x;
    const tipY = mainHand.y;
    const now = performance.now();

    const hasPreviousPoint = Number.isFinite(this.handState.lastX) && Number.isFinite(this.handState.lastY);
    if (!hasPreviousPoint) {
      this.handState.lastX = tipX;
      this.handState.lastY = tipY;
      this.handState.smoothedX = tipX;
    }

    const smoothedX = this.handState.smoothedX + (tipX - this.handState.smoothedX) * 0.28;
    const deltaX = smoothedX - this.handState.smoothedX;
    const deltaY = tipY - this.handState.lastY;

    this.handState.smoothedX = smoothedX;
    this.handState.lastX = tipX;
    this.handState.lastY = tipY;
    this.handState.fingerX = smoothedX;
    this.handState.fingerY = tipY;

    if (panel) panel.classList.add('detected');
    if (status) status.textContent = 'HAND DETECTED';
    this.handState.detected = true;

    if (this.currentGameId === 'star_catcher') {
      this.setStatusBanner('☝️ Move your index finger to catch the stars!');
      return;
    }

    const moveThreshold = 18;
    const jumpThreshold = 26;

    if (Math.abs(deltaX) > moveThreshold) {
      const direction = deltaX > 0 ? 'right' : 'left';
      this.player.x += deltaX * 1.15;
      this.player.x = Math.max(50, Math.min(this.canvas.width - 50, this.player.x));
      this.setStatusBanner(direction === 'right' ? 'MOVE RIGHT' : 'MOVE LEFT');
    } else if (Math.abs(deltaY) < 10) {
      this.setStatusBanner('HAND DETECTED');
    }

    if (deltaY < -jumpThreshold && now - this.handState.lastJumpAt > 500) {
      this.handleJump();
      this.handState.lastJumpAt = now;
      this.setStatusBanner('JUMP!');
    }

    if (base.y - tip.y > 0.14) {
      this.player.x = Math.max(50, Math.min(this.canvas.width - 50, this.handState.smoothedX));
    }
  },

  handleJump() {
    if (!this.player.grounded || this.gameOver || this.isPaused) return;
    this.player.grounded = false;
    this.player.vy = -12.5;
    audioManager.playPop();
  },

  initBlockBuilder() {
    this.blockBuilderState.active = true;
    this.blockBuilderState.score = 0;
    this.blockBuilderState.tower = [];
    this.blockBuilderState.wobble = 0;
    this.blockBuilderState.stability = 1;
    this.score = 0;
    this.updateBlockBuilderHud();

    this.lastTimestamp = 0;
    this.animId = requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    this.requestCameraAccess();
  },

  updateBlockBuilderHud() {
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) scoreEl.textContent = `Score: ${this.blockBuilderState.score}`;

    const livesEl = document.getElementById('gameLives');
    if (livesEl) livesEl.textContent = `Tower: ${this.blockBuilderState.tower.length}`;
  },

  spawnBlockBuilderBlock() {
    if (!this.canvas) return;

    const width = 70 + Math.random() * 46;
    const height = 28 + Math.random() * 14;
    const special = Math.random() < 0.18;
    const colors = ['#f472b6', '#60a5fa', '#a78bfa', '#34d399', '#fbbf24', '#fb7185'];

    this.blockBuilderState.current = {
      id: `block-${Date.now()}-${Math.random()}`,
      x: 50 + Math.random() * Math.max(80, this.canvas.width - 140),
      y: 78,
      width,
      height,
      special,
      color: colors[Math.floor(Math.random() * colors.length)],
      direction: Math.random() < 0.5 ? -1 : 1,
      velocity: 1.4 + Math.random() * 1.2,
      holdMs: 0,
      dropped: false,
      glow: 0
    };
  },

  dropBlockBuilderBlock() {
    const block = this.blockBuilderState.current;
    if (!block || block.dropped) return;

    block.dropped = true;
    const topBlock = this.blockBuilderState.tower[this.blockBuilderState.tower.length - 1];
    const baseY = this.canvas.height - 100;
    const nextX = Math.min(Math.max(30, block.x), this.canvas.width - block.width - 30);
    const placedBlock = {
      x: nextX,
      y: topBlock ? topBlock.y - block.height : baseY - block.height,
      width: block.width,
      height: block.height,
      color: block.color,
      special: block.special
    };

    const overlap = topBlock
      ? Math.max(0, Math.min(nextX + block.width, topBlock.x + topBlock.width) - Math.max(nextX, topBlock.x))
      : block.width;
    const overlapRatio = topBlock ? overlap / Math.min(block.width, topBlock.width) : 1;
    const distanceFromCenter = topBlock
      ? Math.abs((nextX + block.width / 2) - (topBlock.x + topBlock.width / 2))
      : 0;

    let points = 12;
    let stabilityDelta = 0.06;

    if (topBlock && overlapRatio > 0.7 && distanceFromCenter < topBlock.width * 0.32) {
      points = 18 + Math.round(block.width / 8);
      if (block.special) points += 25;
      stabilityDelta = 0.18;
    } else {
      points = Math.max(4, Math.round(8 - distanceFromCenter / 24));
      this.blockBuilderState.wobble = Math.min(1.2, this.blockBuilderState.wobble + 0.5);
      stabilityDelta = -0.18;
      if (block.special) points += 10;
    }

    if (block.special) {
      points += 25;
    }

    this.blockBuilderState.score += points;
    this.blockBuilderState.stability = Math.max(0, Math.min(1.6, this.blockBuilderState.stability + stabilityDelta));
    this.blockBuilderState.tower.push(placedBlock);
    this.updateBlockBuilderHud();

    if (this.blockBuilderState.wobble > 0.8 && this.blockBuilderState.stability < 0.5) {
      this.finishBlockBuilder();
      return;
    }

    if (this.blockBuilderState.tower.length > 8) {
      this.blockBuilderState.stability = Math.min(1.6, this.blockBuilderState.stability + 0.08);
    }

    this.blockBuilderState.wobble *= 0.75;
    this.setStatusBanner(block.special ? '✨ Magical bonus block!' : (this.blockBuilderState.stability > 0.9 ? 'Nice balance! Keep stacking!' : 'A little wobble — stay steady!'));
    this.spawnBlockBuilderBlock();
  },

  finishBlockBuilder() {
    this.isGameRunning = false;
    this.gameOver = true;
    this.blockBuilderState.active = false;
    this.setStatusBanner('🧱 Tower Fell!');

    const overlay = document.getElementById('gameMessageOverlay');
    if (overlay) {
      overlay.innerHTML = `
        <div class="star-catcher-end-card">
          <div class="star-catcher-end-title">🧱 TOWER FELL!</div>
          <div class="star-catcher-end-line">Final Score: ${this.blockBuilderState.score}</div>
          <div class="star-catcher-end-line">Tower Height: ${this.blockBuilderState.tower.length}</div>
          <div class="star-catcher-end-actions">
            <button class="game-control-btn" id="blockBuilderPlayAgainBtn">Play Again</button>
            <button class="game-control-btn secondary" id="blockBuilderBackBtn">Back to Games</button>
          </div>
        </div>
      `;
      overlay.classList.remove('hidden');

      const playAgainBtn = document.getElementById('blockBuilderPlayAgainBtn');
      if (playAgainBtn) playAgainBtn.onclick = () => this.start('block_builder');

      const backBtn = document.getElementById('blockBuilderBackBtn');
      if (backBtn) backBtn.onclick = () => app.showView('gamesView');
    }

    const startBtn = document.getElementById('gameStartBtn');
    if (startBtn) startBtn.textContent = 'Play Again';
  },

  updateBlockBuilder(delta) {
    if (!this.blockBuilderState.active) return;

    const current = this.blockBuilderState.current;
    if (!current) return;

    const pointerX = this.handState.fingerX;
    const pointerY = this.handState.fingerY;

    current.x += current.direction * current.velocity * delta;
    if (current.x <= 30 || current.x + current.width >= this.canvas.width - 30) {
      current.direction *= -1;
      current.x = Math.max(30, Math.min(this.canvas.width - current.width - 30, current.x));
    }

    if (this.handState.detected && pointerX && pointerY) {
      const targetX = Math.min(Math.max(pointerX - current.width / 2, 30), this.canvas.width - current.width - 30);
      current.x += (targetX - current.x) * 0.24;

      const insideVerticalRange = Math.abs(pointerY - (current.y + current.height / 2)) < 44;
      const insideHorizontalRange = Math.abs(pointerX - (current.x + current.width / 2)) < current.width * 0.7;

      if (insideHorizontalRange && insideVerticalRange) {
        current.holdMs += delta * 16.666;
      } else {
        current.holdMs = Math.max(0, current.holdMs - delta * 16.666);
      }

      if (current.holdMs > 180) {
        this.dropBlockBuilderBlock();
      }
    }

    if (this.blockBuilderState.wobble > 0) {
      this.blockBuilderState.wobble = Math.max(0, this.blockBuilderState.wobble - 0.015 * delta);
    }

    if (this.blockBuilderState.tower.length > 0) {
      const newest = this.blockBuilderState.tower[this.blockBuilderState.tower.length - 1];
      if (Math.abs(newest.x - (this.canvas.width / 2 - newest.width / 2)) > this.canvas.width * 0.3) {
        this.blockBuilderState.stability = Math.max(0, this.blockBuilderState.stability - 0.008 * delta);
      }
    }

    if (this.blockBuilderState.stability <= 0.08) {
      this.finishBlockBuilder();
      return;
    }

    if (this.blockBuilderState.tower.length < 4 && !this.handState.detected) {
      this.setStatusBanner('☝️ Move your index finger to guide the block.');
    } else if (this.blockBuilderState.wobble > 0.45) {
      this.setStatusBanner('⚠️ Tower is wobbling!');
    } else {
      this.setStatusBanner(this.blockBuilderState.current && this.blockBuilderState.current.special ? '✨ Magical block ready!' : '🧱 Position and drop carefully');
    }
  },

  initMagicTargetHunt() {
    this.magicTargetHuntState.active = true;
    this.magicTargetHuntState.score = 0;
    this.magicTargetHuntState.combo = 1;
    this.magicTargetHuntState.bestCombo = 1;
    this.magicTargetHuntState.targetsHit = 0;
    this.magicTargetHuntState.targetGoal = 18;
    this.magicTargetHuntState.timerMs = 60000;
    this.magicTargetHuntState.particles = [];
    this.magicTargetHuntState.spawnCooldown = 0;
    this.magicTargetHuntState.difficulty = 1;
    this.score = 0;
    this.updateMagicTargetHuntHud();
    this.lastTimestamp = 0;
    this.animId = requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    this.requestCameraAccess();
  },

  updateMagicTargetHuntHud() {
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) scoreEl.textContent = `Score: ${this.magicTargetHuntState.score}`;

    const livesEl = document.getElementById('gameLives');
    if (livesEl) livesEl.textContent = `Combo: ${this.magicTargetHuntState.combo} • ${this.magicTargetHuntState.targetsHit}/${this.magicTargetHuntState.targetGoal}`;
  },

  createMagicTargetHuntTarget() {
    if (!this.canvas) return;

    const difficulty = Math.min(7, 1 + Math.floor(this.magicTargetHuntState.targetsHit / 3));
    const radiusMin = Math.max(26, 50 - difficulty * 2.5);
    const radiusMax = Math.max(30, 66 - difficulty * 3.2);
    const radius = radiusMin + Math.random() * (radiusMax - radiusMin);
    const padding = radius + 26;
    const x = padding + Math.random() * Math.max(80, this.canvas.width - padding * 2);
    const y = 120 + Math.random() * Math.max(60, this.canvas.height - 200);
    const golden = Math.random() < (0.18 + difficulty * 0.02);

    this.magicTargetHuntState.currentTarget = {
      x: Math.min(Math.max(x, padding), this.canvas.width - padding),
      y: Math.min(Math.max(y, 120), this.canvas.height - 110),
      radius,
      golden,
      pulse: 0,
      ring: 0,
      label: golden ? '★' : '✦'
    };
  },

  hitMagicTargetHuntTarget(target) {
    if (!target || !this.magicTargetHuntState.active) return;

    const bonus = target.golden ? 25 : 10;
    const comboBonus = Math.max(0, (this.magicTargetHuntState.combo - 1) * 4);
    this.magicTargetHuntState.score += bonus + comboBonus;
    this.magicTargetHuntState.combo += 1;
    this.magicTargetHuntState.bestCombo = Math.max(this.magicTargetHuntState.bestCombo, this.magicTargetHuntState.combo);
    this.magicTargetHuntState.targetsHit += 1;
    this.magicTargetHuntState.difficulty = 1 + Math.floor(this.magicTargetHuntState.targetsHit / 3);
    this.magicTargetHuntState.spawnCooldown = 220;
    this.magicTargetHuntState.currentTarget = null;
    this.setStatusBanner(target.golden ? '🌟 GOLDEN TARGET! +25' : '✨ Great hit! +10');
    audioManager.playStarChime();

    for (let i = 0; i < 16; i++) {
      this.magicTargetHuntState.particles.push({
        x: target.x,
        y: target.y,
        dx: (Math.random() - 0.5) * 4.8,
        dy: (Math.random() - 0.7) * 4.6,
        life: 1,
        size: 2 + Math.random() * 4,
        color: target.golden ? '#fbbf24' : ['#7dd3fc', '#c084fc', '#f9a8d4', '#34d399'][Math.floor(Math.random() * 4)],
        type: 'burst'
      });
    }

    this.magicTargetHuntState.particles.push({
      x: target.x,
      y: target.y - 12,
      text: target.golden ? '+25' : '+10',
      life: 1,
      color: target.golden ? '#fbbf24' : '#7dd3fc',
      type: 'score'
    });

    this.updateMagicTargetHuntHud();

    if (this.magicTargetHuntState.targetsHit >= this.magicTargetHuntState.targetGoal) {
      this.showMagicTargetHuntWin();
    }
  },

  updateMagicTargetHunt(delta) {
    if (!this.magicTargetHuntState.active) return;

    this.magicTargetHuntState.timerMs = Math.max(0, this.magicTargetHuntState.timerMs - delta * 16.666);

    if (this.magicTargetHuntState.currentTarget) {
      this.magicTargetHuntState.currentTarget.pulse += 0.045 * delta;
      this.magicTargetHuntState.currentTarget.ring += 0.04 * delta;
    }

    if (!this.magicTargetHuntState.currentTarget) {
      this.magicTargetHuntState.spawnCooldown = Math.max(0, this.magicTargetHuntState.spawnCooldown - delta * 16.666);
      if (this.magicTargetHuntState.spawnCooldown <= 0) {
        this.createMagicTargetHuntTarget();
      }
    }

    if (this.handState.detected && this.handState.fingerX && this.handState.fingerY && this.magicTargetHuntState.currentTarget) {
      const target = this.magicTargetHuntState.currentTarget;
      const distance = Math.hypot(this.handState.fingerX - target.x, this.handState.fingerY - target.y);
      if (distance <= target.radius + 10) {
        this.hitMagicTargetHuntTarget(target);
      }
    }

    this.magicTargetHuntState.particles = this.magicTargetHuntState.particles.filter((particle) => {
      particle.life -= 0.03 * delta;
      particle.x += (particle.dx || 0) * delta;
      particle.y += (particle.dy || 0) * delta;
      return particle.life > 0;
    });

    if (this.magicTargetHuntState.timerMs <= 0) {
      this.showMagicTargetHuntLose();
      return;
    }

    const remainingSeconds = Math.ceil(this.magicTargetHuntState.timerMs / 1000);
    const message = remainingSeconds <= 10 ? `⏱️ ${remainingSeconds}s left` : '🎯 Hit the glowing target!';
    this.magicTargetHuntState.message = message;
    this.setStatusBanner(message);
    this.updateMagicTargetHuntHud();
  },updateNeonDodge(delta) {
    const state = this.neonDodgeState;
    if (!state || !state.active) return;

    const dt = Math.min(delta * 16.666, 40);

    state.timerMs = Math.max(0, state.timerMs - dt);

    // Smooth index-finger control
    if (
      this.handState.detected &&
      Number.isFinite(this.handState.fingerX) &&
      Number.isFinite(this.handState.fingerY)
    ) {
      const targetX = this.handState.fingerX;
      const targetY = this.handState.fingerY;

      state.player.x += (targetX - state.player.x) * Math.min(1, 0.18 * delta);
      state.player.y += (targetY - state.player.y) * Math.min(1, 0.18 * delta);
    }

    // Keep player inside canvas
    const r = state.player.radius;

    state.player.x = Math.max(
      r,
      Math.min(this.canvas.width - r, state.player.x)
    );

    state.player.y = Math.max(
      r,
      Math.min(this.canvas.height - r, state.player.y)
    );

    // Gradually increase difficulty
    const elapsed = 60000 - state.timerMs;
    state.difficulty = Math.min(3.2, 1 + elapsed / 30000);

    // Spawn obstacles
    state.spawnCooldown -= dt;

    if (state.spawnCooldown <= 0) {
      const size = 24 + Math.random() * 20;

      state.obstacles.push({
        x: size + Math.random() * Math.max(1, this.canvas.width - size * 2),
        y: -size,
        size,
        speed: 2.4 + Math.random() * 1.8 * state.difficulty,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05
      });

      state.spawnCooldown =
        Math.max(280, 850 - state.difficulty * 150) +
        Math.random() * 350;
    }

    // Spawn stars
    state.starSpawnCooldown -= dt;

    if (state.starSpawnCooldown <= 0) {
      const radius = 12;

      state.stars.push({
        x: radius + Math.random() * Math.max(1, this.canvas.width - radius * 2),
        y: 80 + Math.random() * Math.max(1, this.canvas.height - 160),
        radius,
        pulse: Math.random() * Math.PI * 2
      });

      state.starSpawnCooldown = 1100 + Math.random() * 900;
    }

    // Move obstacles
    state.obstacles.forEach((obstacle) => {
      obstacle.y += obstacle.speed * dt / 16.666;
      obstacle.rotation += obstacle.rotationSpeed * delta;
    });

    // Remove off-screen obstacles
    state.obstacles = state.obstacles.filter(
      (obstacle) => obstacle.y < this.canvas.height + obstacle.size + 50
    );

    // Animate stars
    state.stars.forEach((star) => {
      star.pulse += 0.08 * delta;
    });

    // Remove old stars
    state.stars = state.stars.filter(
      (star) => star.y < this.canvas.height + 50
    );

    // Player vs obstacles
    for (let i = state.obstacles.length - 1; i >= 0; i--) {
      const obstacle = state.obstacles[i];

      const distance = Math.hypot(
        state.player.x - obstacle.x,
        state.player.y - obstacle.y
      );

      if (distance < state.player.radius + obstacle.size * 0.72) {
        state.obstacles.splice(i, 1);

        state.lives = Math.max(0, state.lives - 1);

        if (typeof audioManager !== 'undefined') {
          audioManager.playClick();
        }

        if (state.lives <= 0) {
          this.finishNeonDodge(false);
          return;
        }
      }
    }

    // Player collects stars
    for (let i = state.stars.length - 1; i >= 0; i--) {
      const star = state.stars[i];

      const distance = Math.hypot(
        state.player.x - star.x,
        state.player.y - star.y
      );

      if (distance < state.player.radius + star.radius + 4) {
        state.stars.splice(i, 1);
        state.score += 10;
      }
    }

    // HUD
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) {
      scoreEl.textContent = `Score: ${state.score}`;
    }

    const livesEl = document.getElementById('gameLives');
    if (livesEl) {
      livesEl.textContent = `Lives: ${state.lives}`;
    }

    const remainingSeconds = Math.ceil(state.timerMs / 1000);

    this.setStatusBanner(
      remainingSeconds <= 10
        ? `⏱️ ${remainingSeconds}s left!`
        : '⚡ Dodge obstacles • Collect stars!'
    );

    // Time completed
    if (state.timerMs <= 0) {
      this.finishNeonDodge(true);
    }
  },

  finishNeonDodge(survived) {
    const state = this.neonDodgeState;
    if (!state || !state.active) return;

    state.active = false;
    this.isGameRunning = false;
    this.gameOver = true;

    const previousBest = Number(
      localStorage.getItem('neonDodgeBestScore') || 0
    );

    if (state.score > previousBest) {
      state.bestScore = state.score;
      localStorage.setItem('neonDodgeBestScore', String(state.score));
    } else {
      state.bestScore = previousBest;
    }

    const overlay = document.getElementById('gameMessageOverlay');

    if (overlay) {
      overlay.innerHTML = `
        <div class="star-catcher-end-card">
          <div class="star-catcher-end-title">
            ${survived ? '🎉 AMAZING!' : '💫 KEEP TRYING!'}
          </div>

          <div class="star-catcher-end-line">
            ${survived
              ? '⚡ You survived the Neon Challenge!'
              : '💪 You can dodge even more next time!'}
          </div>

          <div class="star-catcher-end-line">
            Final Score: ${state.score}
          </div>

          <div class="star-catcher-end-line">
            Best Score: ${state.bestScore}
          </div>

          <div class="star-catcher-end-line">
            Lives Remaining: ${state.lives}
          </div>

          <div class="star-catcher-end-actions">
            <button class="game-control-btn" id="neonDodgeRetryBtn">
              🔄 TRY AGAIN
            </button>

            <button class="game-control-btn secondary" id="neonDodgeBackBtn">
              ⬅️ BACK TO GAMES
            </button>
          </div>
        </div>
      `;

      overlay.classList.remove('hidden');

      const retryBtn = document.getElementById('neonDodgeRetryBtn');
      if (retryBtn) {
        retryBtn.onclick = () => this.start('neon_dodge');
      }

      const backBtn = document.getElementById('neonDodgeBackBtn');
      if (backBtn) {
        backBtn.onclick = () => app.showView('gamesView');
      }
    }

    this.setStatusBanner(
      survived ? '🎉 CHALLENGE COMPLETE!' : '💫 TRY AGAIN!'
    );

    if (
      survived &&
      typeof audioManager !== 'undefined'
    ) {
      audioManager.playSuccessFanfare();
    }
  },

  showMagicTargetHuntWin() {
    this.isGameRunning = false;
    this.gameOver = true;
    this.magicTargetHuntState.active = false;
    this.magicTargetHuntState.currentTarget = null;
    const overlay = document.getElementById('gameMessageOverlay');
    if (overlay) {
      overlay.innerHTML = `
        <div class="star-catcher-end-card">
          <div class="star-catcher-end-title">🎉 TARGET MASTER!</div>
          <div class="star-catcher-end-line">✨ AMAZING!</div>
          <div class="star-catcher-end-line">Final Score: ${this.magicTargetHuntState.score}</div>
          <div class="star-catcher-end-line">Best Combo: ${this.magicTargetHuntState.bestCombo}</div>
          <div class="star-catcher-end-line">Targets Hit: ${this.magicTargetHuntState.targetsHit}</div>
          <div class="star-catcher-end-actions">
            <button class="game-control-btn" id="magicTargetHuntPlayAgainBtn">▶️ PLAY AGAIN</button>
            <button class="game-control-btn secondary" id="magicTargetHuntBackBtn">⬅️ BACK TO GAMES</button>
          </div>
        </div>
      `;
      overlay.classList.remove('hidden');

      const playAgainBtn = document.getElementById('magicTargetHuntPlayAgainBtn');
      if (playAgainBtn) playAgainBtn.onclick = () => this.start('magic_target_hunt');

      const backBtn = document.getElementById('magicTargetHuntBackBtn');
      if (backBtn) backBtn.onclick = () => app.showView('gamesView');
    }
    this.setStatusBanner('🎉 TARGET MASTER!');
    audioManager.playSuccessFanfare();
  },

  showMagicTargetHuntLose() {
    this.isGameRunning = false;
    this.gameOver = true;
    this.magicTargetHuntState.active = false;
    this.magicTargetHuntState.currentTarget = null;
    const overlay = document.getElementById('gameMessageOverlay');
    if (overlay) {
      overlay.innerHTML = `
        <div class="star-catcher-end-card">
          <div class="star-catcher-end-title">⏰ TIME'S UP!</div>
          <div class="star-catcher-end-line">✨ Great try! Let's try again!</div>
          <div class="star-catcher-end-line">Final Score: ${this.magicTargetHuntState.score}</div>
          <div class="star-catcher-end-line">Targets Hit: ${this.magicTargetHuntState.targetsHit}</div>
          <div class="star-catcher-end-line">Best Combo: ${this.magicTargetHuntState.bestCombo}</div>
          <div class="star-catcher-end-actions">
            <button class="game-control-btn" id="magicTargetHuntRetryBtn">🔄 TRY AGAIN</button>
            <button class="game-control-btn secondary" id="magicTargetHuntLoseBackBtn">⬅️ BACK TO GAMES</button>
          </div>
        </div>
      `;
      overlay.classList.remove('hidden');

      const retryBtn = document.getElementById('magicTargetHuntRetryBtn');
      if (retryBtn) retryBtn.onclick = () => this.start('magic_target_hunt');

      const backBtn = document.getElementById('magicTargetHuntLoseBackBtn');
      if (backBtn) backBtn.onclick = () => app.showView('gamesView');
    }
    this.setStatusBanner("⏰ TIME'S UP!");
  },

  drawMagicTargetHunt() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const sky = this.ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#0f172a');
    sky.addColorStop(0.45, '#312e81');
    sky.addColorStop(1, '#1d4ed8');
    this.ctx.fillStyle = sky;
    this.ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 42; i++) {
      const x = ((i * 97 + this.backgroundOffset * 0.18) % (w + 40));
      const y = 20 + ((i * 61) % (h - 120));
      this.ctx.fillStyle = `rgba(255,255,255,${0.18 + (i % 5) * 0.08})`;
      this.ctx.fillRect(x, y, 2, 2);
    }

    if (this.magicTargetHuntState.currentTarget) {
      const target = this.magicTargetHuntState.currentTarget;
      const pulseSize = target.radius + Math.sin(target.pulse) * 8;

      this.ctx.beginPath();
      this.ctx.arc(target.x, target.y, pulseSize + 18, 0, Math.PI * 2);
      this.ctx.strokeStyle = target.golden ? 'rgba(251,191,36,0.7)' : 'rgba(125,211,252,0.7)';
      this.ctx.lineWidth = 3;
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
      this.ctx.fillStyle = target.golden ? 'rgba(251,191,36,0.18)' : 'rgba(96,165,250,0.18)';
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.fillStyle = target.golden ? '#fbbf24' : '#7dd3fc';
      this.ctx.shadowBlur = 22;
      this.ctx.shadowColor = target.golden ? '#fef08a' : '#93c5fd';
      this.ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      this.ctx.fillStyle = '#ecfeff';
      this.ctx.font = 'bold 22px Fredoka, sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(target.label, target.x, target.y + 8);
    }

    this.magicTargetHuntState.particles.forEach((particle) => {
      if (particle.type === 'score') {
        this.ctx.fillStyle = `${particle.color}${Math.round(particle.life * 255).toString(16).padStart(2, '0')}`;
        this.ctx.font = 'bold 18px Fredoka, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(particle.text, particle.x, particle.y);
      } else {
        this.ctx.fillStyle = particle.color || '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size || 3, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });

    if (this.handState.detected && this.handState.fingerX && this.handState.fingerY) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fef3c7';
      this.ctx.arc(this.handState.fingerX, this.handState.fingerY, 8, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.strokeStyle = '#fbbf24';
      this.ctx.lineWidth = 2;
      this.ctx.arc(this.handState.fingerX, this.handState.fingerY, 14, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  },
  drawNeonDodge() {
    const state = this.neonDodgeState;
    if (!state || !this.ctx || !this.canvas) return;

    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Background
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, '#080b2b');
    gradient.addColorStop(1, '#171044');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    // Background stars
    ctx.fillStyle = 'rgba(255,255,255,0.55)';

    for (let i = 0; i < 45; i++) {
      const x = (i * 83) % w;
      const y = (i * 47) % h;

      ctx.fillRect(x, y, 2, 2);
    }

    // Neon grid
    ctx.strokeStyle = 'rgba(120,100,255,0.12)';
    ctx.lineWidth = 1;

    for (let x = 0; x < w; x += 70) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    for (let y = 0; y < h; y += 70) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Obstacles
    state.obstacles.forEach((obstacle) => {
      ctx.save();

      ctx.translate(obstacle.x, obstacle.y);
      ctx.rotate(obstacle.rotation);

      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ff3b6b';
      ctx.fillStyle = '#ff3b6b';

      ctx.fillRect(
        -obstacle.size / 2,
        -obstacle.size / 2,
        obstacle.size,
        obstacle.size
      );

      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;

      ctx.strokeRect(
        -obstacle.size / 2,
        -obstacle.size / 2,
        obstacle.size,
        obstacle.size
      );

      ctx.restore();
    });

    // Collectible stars
    state.stars.forEach((star) => {
      const pulse = 1 + Math.sin(star.pulse) * 0.12;

      ctx.save();
      ctx.translate(star.x, star.y);
      ctx.scale(pulse, pulse);

      ctx.shadowBlur = 14;
      ctx.shadowColor = '#ffe66d';
      ctx.fillStyle = '#ffe66d';

      ctx.beginPath();

      for (let i = 0; i < 10; i++) {
        const angle = -Math.PI / 2 + i * Math.PI / 5;
        const radius =
          i % 2 === 0 ? star.radius : star.radius * 0.42;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.fill();

      ctx.restore();
    });

    // Player
    const player = state.player;

    ctx.save();

    ctx.shadowBlur = 18;
    ctx.shadowColor = '#62e6ff';
    ctx.fillStyle = '#62e6ff';

    ctx.beginPath();
    ctx.arc(
      player.x,
      player.y,
      player.radius,
      0,
      Math.PI * 2
    );
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(
      player.x,
      player.y,
      player.radius,
      0,
      Math.PI * 2
    );
    ctx.stroke();

    ctx.fillStyle = '#ffffff';

    ctx.beginPath();
    ctx.arc(
      player.x,
      player.y,
      player.radius * 0.32,
      0,
      Math.PI * 2
    );
    ctx.fill();

    ctx.restore();

    // Finger position indicator
    if (
      this.handState &&
      this.handState.detected &&
      Number.isFinite(this.handState.fingerX) &&
      Number.isFinite(this.handState.fingerY)
    ) {
      ctx.beginPath();

      ctx.strokeStyle = 'rgba(255,255,255,0.75)';
      ctx.lineWidth = 2;

      ctx.arc(
        this.handState.fingerX,
        this.handState.fingerY,
        12,
        0,
        Math.PI * 2
      );

      ctx.stroke();
    }

    // HUD
    ctx.textAlign = 'left';
    ctx.font = 'bold 20px Fredoka, sans-serif';
    ctx.fillStyle = '#ffffff';

    ctx.fillText(`⭐ Score: ${state.score}`, 20, 34);
    ctx.fillText(`❤️ Lives: ${state.lives}`, 20, 62);

    ctx.textAlign = 'right';

    const seconds = Math.ceil(state.timerMs / 1000);

    ctx.fillText(`⏱️ ${seconds}s`, w - 20, 34);

    ctx.font = 'bold 16px Fredoka, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.75)';

    ctx.fillText(
      'Move your index finger • Dodge • Collect',
      w - 20,
      h - 18
    );

    ctx.textAlign = 'left';
  },

  initMagicSkyRunner() {
    const groundY = this.canvas.height - 38;
    this.player.y = groundY - this.player.height;
    this.player.grounded = true;
    this.player.vy = 0;
    this.lastTimestamp = 0;
    this.animId = requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    this.requestCameraAccess();
  },

  initStarCatcher() {
    this.starCatchState.active = true;
    this.starCatchState.floaters = [];
    this.starCatchState.score = 0;
    this.starCatchState.collected = 0;
    this.starCatchState.combo = 1;
    this.starCatchState.timeLeft = 60000;
    this.starCatchState.stars = [];
    this.score = 0;
    this.updateStarCatcherHud();

    for (let i = 0; i < 5; i++) {
      this.spawnStar();
    }

    this.lastTimestamp = 0;
    this.animId = requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    this.requestCameraAccess();
  },

  initMagicDrag() {
    this.magicDragState.active = true;
    this.magicDragState.timerMs = 60000;
    this.magicDragState.score = 0;
    this.magicDragState.matched = 0;
    this.magicDragState.objects = [];
    this.magicDragState.targets = [];
    this.magicDragState.selectedId = null;
    this.magicDragState.particles = [];
    this.magicDragState.lastSelectedAt = 0;
    this.magicDragState.instruction = '☝️ Move your index finger over an object.';
    this.score = 0;
    this.updateMagicDragHud();
    this.buildMagicDragRound();

    this.lastTimestamp = 0;
    this.animId = requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    this.requestCameraAccess();
  },

  buildMagicDragRound() {
    const types = ['star', 'moon', 'cloud', 'gem'];
    const palette = {
      star: { fill: '#facc15', target: '#fbbf24', label: '⭐' },
      moon: { fill: '#c4b5fd', target: '#a78bfa', label: '🌙' },
      cloud: { fill: '#e0f2fe', target: '#7dd3fc', label: '☁️' },
      gem: { fill: '#67e8f9', target: '#22d3ee', label: '💎' }
    };

    this.magicDragState.targets = types.map((type, index) => {
      const padding = 42;
      const x = padding + (index % 2) * ((this.canvas.width - padding * 2) / 2.2);
      const y = 100 + Math.floor(index / 2) * 120;
      return {
        id: `target-${type}`,
        type,
        x,
        y,
        radius: 34,
        color: palette[type].target,
        label: palette[type].label
      };
    });

    this.magicDragState.objects = types.map((type, index) => {
      const x = 190 + (index * 130) % (this.canvas.width - 300);
      const y = 250 + (index % 2) * 120 + Math.random() * 40;
      return {
        id: `obj-${type}-${index}`,
        type,
        x,
        y,
        baseX: x,
        baseY: y,
        radius: 24,
        color: palette[type].fill,
        label: palette[type].label,
        hoverMs: 0,
        selected: false,
        locked: false,
        returning: false
      };
    });
  },

  updateMagicDragHud() {
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) scoreEl.textContent = `Score: ${this.magicDragState.score}`;

    const livesEl = document.getElementById('gameLives');
    if (livesEl) livesEl.textContent = `Matched: ${this.magicDragState.matched}`;
  },

  selectMagicDragObject(object) {
    if (!object || this.magicDragState.selectedId || object.locked) return;
    const now = performance.now();
    if (now - this.magicDragState.lastSelectedAt < 160) return;

    this.magicDragState.selectedId = object.id;
    this.magicDragState.lastSelectedAt = now;
    object.selected = true;
    object.locked = true;
    this.magicDragState.instruction = '☝️ Drag it to the matching magical zone!';
    this.setStatusBanner('☝️ Drag it to the matching magical zone!');
  },

  releaseMagicDragObject(object, matched = false) {
    if (!object) return;
    object.selected = false;
    object.locked = false;
    object.returning = false;

    if (matched) {
      this.magicDragState.selectedId = null;
      return;
    }

    object.x = object.baseX;
    object.y = object.baseY;
    this.magicDragState.selectedId = null;
    this.magicDragState.instruction = '☝️ Move your index finger over an object.';
  },

  updateMagicDrag(delta) {
    if (!this.magicDragState.active) return;

    this.magicDragState.timerMs = Math.max(0, this.magicDragState.timerMs - delta * 16.666);
    const pointerX = this.handState.fingerX;
    const pointerY = this.handState.fingerY;

    const selected = this.magicDragState.objects.find(obj => obj.id === this.magicDragState.selectedId);

    if (selected) {
      const target = this.magicDragState.targets.find(t => t.type === selected.type);
      const followX = pointerX || selected.x;
      const followY = pointerY || selected.y;

      selected.x += (followX - selected.x) * 0.38;
      selected.y += (followY - selected.y) * 0.38;

      if (target && Math.hypot(selected.x - target.x, selected.y - target.y) < target.radius + selected.radius + 6) {
        const isSpecial = Math.random() < 0.2;
        const earned = isSpecial ? 20 : 10;
        this.magicDragState.score += earned;
        this.magicDragState.matched += 1;
        this.magicDragState.particles.push({
          x: target.x,
          y: target.y,
          text: `+${earned}${isSpecial ? ' ✨' : ' ⭐'}`,
          life: 1,
          color: isSpecial ? '#fbbf24' : '#c4b5fd'
        });
        this.updateMagicDragHud();
        this.setStatusBanner(isSpecial ? '✨ Special match! +20 ✨' : 'Great match! +10 ✨');
        audioManager.playStarChime();
        this.releaseMagicDragObject(selected, true);
        this.magicDragState.objects = this.magicDragState.objects.filter(obj => obj.id !== selected.id);
        this.buildMagicDragRound();
        this.magicDragState.instruction = '☝️ Move your index finger over an object.';
      }
    } else if (this.handState.detected && pointerX && pointerY) {
      this.magicDragState.objects.forEach((obj) => {
        const dist = Math.hypot(obj.x - pointerX, obj.y - pointerY);
        if (dist < obj.radius + 20) {
          obj.hoverMs += delta * 16.666;
        } else {
          obj.hoverMs = 0;
        }

        if (obj.hoverMs > 120) {
          this.selectMagicDragObject(obj);
        }
      });
    }

    this.magicDragState.objects.forEach((obj) => {
      if (obj.id === this.magicDragState.selectedId) return;
      if (obj.returning) {
        obj.x += (obj.baseX - obj.x) * 0.18;
        obj.y += (obj.baseY - obj.y) * 0.18;
      }
    });

    this.magicDragState.particles = this.magicDragState.particles.filter((particle) => {
      particle.life -= 0.03 * delta;
      particle.y -= 0.7 * delta;
      return particle.life > 0;
    });

    if (this.magicDragState.timerMs <= 0) {
      this.finishMagicDrag();
      return;
    }

    if (this.magicDragState.timerMs < 10000) {
      this.setStatusBanner(`⏱️ ${Math.ceil(this.magicDragState.timerMs / 1000)}s left`);
    } else if (!this.handState.detected) {
      this.setStatusBanner('☝️ Move your index finger over an object.');
    }
  },

  finishMagicDrag() {
    this.isGameRunning = false;
    this.gameOver = true;
    this.magicDragState.active = false;
    this.setStatusBanner('✨ AMAZING!');
    const overlay = document.getElementById('gameMessageOverlay');
    if (overlay) {
      overlay.innerHTML = `
        <div class="star-catcher-end-card">
          <div class="star-catcher-end-title">✨ AMAZING!</div>
          <div class="star-catcher-end-line">Objects Matched: ${this.magicDragState.matched}</div>
          <div class="star-catcher-end-line">Final Score: ${this.magicDragState.score}</div>
          <div class="star-catcher-end-actions">
            <button class="game-control-btn" id="magicDragPlayAgainBtn">Play Again</button>
            <button class="game-control-btn secondary" id="magicDragBackBtn">Back to Games</button>
          </div>
        </div>
      `;
      overlay.classList.remove('hidden');

      const playAgainBtn = document.getElementById('magicDragPlayAgainBtn');
      if (playAgainBtn) playAgainBtn.onclick = () => this.start('magic_drag');

      const backBtn = document.getElementById('magicDragBackBtn');
      if (backBtn) backBtn.onclick = () => app.showView('gamesView');
    }
    const startBtn = document.getElementById('gameStartBtn');
    if (startBtn) startBtn.textContent = 'Play Again';
  },

  drawMagicDrag() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const sky = this.ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#1e1b4b');
    sky.addColorStop(0.45, '#312e81');
    sky.addColorStop(1, '#0f172a');
    this.ctx.fillStyle = sky;
    this.ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 36; i++) {
      const x = (i * 97 + this.backgroundOffset * 0.4) % (w + 40);
      const y = 20 + ((i * 51) % (h - 100));
      this.ctx.fillStyle = `rgba(255,255,255,${0.4 + (i % 5) * 0.08})`;
      this.ctx.fillRect(x, y, 2, 2);
    }

    this.magicDragState.targets.forEach((target) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = 'rgba(255,255,255,0.12)';
      this.ctx.arc(target.x, target.y, target.radius + 14, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.fillStyle = target.color;
      this.ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = '#fff';
      this.ctx.font = 'bold 26px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(target.label, target.x, target.y + 10);
    });

    this.magicDragState.objects.forEach((obj) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = obj.color;
      this.ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(obj.label, obj.x, obj.y + 8);
    });

    this.magicDragState.particles.forEach((particle) => {
      this.ctx.fillStyle = `${particle.color}${Math.round(particle.life * 255).toString(16).padStart(2, '0')}`;
      this.ctx.font = 'bold 22px Fredoka, sans-serif';
      this.ctx.fillText(particle.text, particle.x, particle.y);
    });

    if (this.handState.detected && this.handState.fingerX && this.handState.fingerY) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fef3c7';
      this.ctx.arc(this.handState.fingerX, this.handState.fingerY, 8, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.strokeStyle = '#fbbf24';
      this.ctx.lineWidth = 2;
      this.ctx.arc(this.handState.fingerX, this.handState.fingerY, 14, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  },

  updateStarCatcherHud() {
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) scoreEl.textContent = `Score: ${this.starCatchState.score}`;

    const livesEl = document.getElementById('gameLives');
    if (livesEl) livesEl.textContent = `Stars: ${this.starCatchState.collected}`;
  },

  gameLoop(timestamp) {
    if (!this.isGameRunning || this.gameOver) return;

    if (!this.lastTimestamp) this.lastTimestamp = timestamp;
    const delta = (timestamp - this.lastTimestamp) / 16.666;
    this.lastTimestamp = timestamp;

    if (!this.isPaused) {
      if (this.currentGameId === 'star_catcher') {
        this.updateStarCatcher(delta);
      } else if (this.currentGameId === 'magic_drag') {
        this.updateMagicDrag(delta);
      } else if (this.currentGameId === 'block_builder') {
        this.updateBlockBuilder(delta);
      } else if (this.currentGameId === 'magic_target_hunt') {
        this.updateMagicTargetHunt(delta);
      }
     else if (this.currentGameId === 'neon_dodge') {
        this.updateNeonDodge(delta);
      }else{
        this.updateGame(delta);
      }
    }

    if (this.currentGameId === 'star_catcher') {
      this.drawStarCatcher();
    } else if (this.currentGameId === 'magic_drag') {
      this.drawMagicDrag();
    } else if (this.currentGameId === 'block_builder') {
      this.drawBlockBuilder();
    } else if (this.currentGameId === 'magic_target_hunt') {
      this.drawMagicTargetHunt();
    } else if (this.currentGameId === 'neon_dodge') {
      this.drawNeonDodge();
    }else{
      this.drawGame();
    }

    this.animId = requestAnimationFrame((next) => this.gameLoop(next));
  },

  updateGame(delta) {
    const groundY = this.canvas.height - 38;
    this.backgroundOffset = (this.backgroundOffset + this.obstacleSpeed * delta) % (this.canvas.width + 100);

    this.clouds.forEach(cloud => {
      cloud.x -= cloud.speed * delta;
      if (cloud.x + cloud.w < 0) {
        cloud.x = this.canvas.width + 20;
        cloud.y = 40 + Math.random() * 160;
      }
    });

    if (performance.now() - this.lastObstacleSpawn > 1200) {
      this.lastObstacleSpawn = performance.now();
      this.createObstacle();
    }

    if (performance.now() - this.lastStarSpawn > 900) {
      this.lastStarSpawn = performance.now();
      this.createStar();
    }

    this.player.vy += 0.42 * delta;
    this.player.y += this.player.vy * delta;

    if (this.player.y >= groundY - this.player.height) {
      this.player.y = groundY - this.player.height;
      this.player.vy = 0;
      this.player.grounded = true;
    }

    this.obstacles.forEach((obs) => {
      obs.x -= this.obstacleSpeed * delta;
      if (!obs.passed && obs.x + obs.width < this.player.x) {
        obs.passed = true;
        this.updateScore(10);
      }
    });

    this.stars.forEach((star) => {
      star.x -= this.obstacleSpeed * 1.1 * delta;
      star.spin += 0.12;
      const dx = Math.abs(star.x - this.player.x);
      const dy = Math.abs(star.y - (this.player.y + this.player.height / 2));
      if (dx < 24 && dy < 24) {
        star.collected = true;
        this.updateScore(25);
        audioManager.playStarChime();
      }
    });

    this.obstacles = this.obstacles.filter(obs => obs.x + obs.width > -10);
    this.stars = this.stars.filter(star => !star.collected && star.x + star.radius > -10);

    const playerBox = {
      x: this.player.x - this.player.width / 2,
      y: this.player.y,
      width: this.player.width,
      height: this.player.height
    };

    this.obstacles.forEach((obs) => {
      const obsBox = { x: obs.x, y: obs.y, width: obs.width, height: obs.height };
      const overlap = !(playerBox.x > obsBox.x + obsBox.width || playerBox.x + playerBox.width < obsBox.x || playerBox.y > obsBox.y + obsBox.height || playerBox.y + playerBox.height < obsBox.y);

      if (overlap && this.player.invulnerable <= 0) {
        this.player.invulnerable = 80;
        this.lives -= 1;
        this.updateLives();
        audioManager.playPop();

        if (this.lives <= 0) {
          this.gameOver = true;
          this.showOverlay('Game Over!');
          this.setStatusBanner('Game Over');
          const startBtn = document.getElementById('gameStartBtn');
          if (startBtn) startBtn.textContent = 'Restart Game';
        }
      }
    });

    if (this.player.invulnerable > 0) this.player.invulnerable -= 1.2 * delta;
    this.player.x = Math.max(32, Math.min(this.canvas.width - 32, this.player.x));
  },

  spawnStar() {
    if (!this.canvas || this.currentGameId !== 'star_catcher') return;

    const maxX = this.canvas.width - 80;
    const minX = 70;
    const maxY = this.canvas.height - 130;
    const minY = 60;
    const baseRadius = 12 + Math.random() * 10;
    const gold = Math.random() < 0.18;

    const star = {
      x: minX + Math.random() * (maxX - minX),
      y: minY + Math.random() * (maxY - minY),
      radius: baseRadius,
      baseRadius,
      gold,
      vx: (Math.random() * 1.8 - 0.9),
      vy: (Math.random() * 1.8 - 0.9),
      phase: Math.random() * Math.PI * 2,
      collected: false,
      sparkle: 0
    };

    this.starCatchState.stars.push(star);
  },

  collectStar(star) {
    if (!star || star.collected) return;

    star.collected = true;

    const now = performance.now();
    const deltaSinceLast = now - this.starCatchState.lastCatchAt;
    this.starCatchState.combo = deltaSinceLast < 1600 ? this.starCatchState.combo + 1 : 1;
    const points = star.gold ? 20 : 10;
    const multiplier = 1 + (this.starCatchState.combo - 1) * 0.25;
    const earned = Math.round(points * multiplier);

    this.starCatchState.score += earned;
    this.starCatchState.collected += 1;
    this.starCatchState.lastCatchAt = now;
    this.starCatchState.floaters.push({
      x: star.x,
      y: star.y,
      text: `+${earned}${star.gold ? ' ⭐' : ' ✨'}`,
      life: 1,
      color: star.gold ? '#fbbf24' : '#c4b5fd'
    });

    this.score = this.starCatchState.score;
    this.updateStarCatcherHud();
    this.setStatusBanner(star.gold ? 'GOLDEN STAR! +20 ⭐' : 'Nice catch!');
    audioManager.playStarChime();

    this.starCatchState.stars = this.starCatchState.stars.filter(item => item !== star);

    if (this.starCatchState.stars.length < 4) {
      this.spawnStar();
    }
  },

  updateStarCatcher(delta) {
    if (!this.starCatchState.active) return;

    this.starCatchState.timeLeft = Math.max(0, this.starCatchState.timeLeft - delta * 16.666);

    const now = performance.now();
    const fingerX = this.handState.fingerX;
    const fingerY = this.handState.fingerY;

    this.starCatchState.stars.forEach((star) => {
      star.x += star.vx * delta * (1 + this.starCatchState.score / 250);
      star.y += star.vy * delta * (1 + this.starCatchState.score / 250);
      star.phase += 0.09 * delta;

      if (star.x < star.radius + 20 || star.x > this.canvas.width - star.radius - 20) {
        star.vx *= -1;
        star.x = Math.max(star.radius + 20, Math.min(this.canvas.width - star.radius - 20, star.x));
      }

      if (star.y < star.radius + 20 || star.y > this.canvas.height - 120) {
        star.vy *= -1;
        star.y = Math.max(star.radius + 20, Math.min(this.canvas.height - 120, star.y));
      }

      const radiusScale = Math.max(0.72, 1 - this.starCatchState.score / 900);
      star.radius = Math.max(6, star.baseRadius * radiusScale);

      if (this.handState.detected && fingerX && fingerY) {
        const distance = Math.hypot(star.x - fingerX, star.y - fingerY);
        if (distance < star.radius + 18) {
          this.collectStar(star);
        }
      }
    });

    this.starCatchState.floaters = this.starCatchState.floaters.filter((floater) => {
      floater.life -= 0.03 * delta;
      floater.y -= 0.8 * delta;
      return floater.life > 0;
    });

    if (this.starCatchState.timeLeft <= 0) {
      this.finishStarCatcher();
      return;
    }

    if (this.starCatchState.timeLeft < 10000) {
      this.setStatusBanner(`⏱️ ${Math.ceil(this.starCatchState.timeLeft / 1000)}s left`);
    } else if (!this.handState.detected) {
      this.setStatusBanner('☝️ Move your index finger to catch the stars!');
    }

    this.score = this.starCatchState.score;
  },

  finishStarCatcher() {
    this.isGameRunning = false;
    this.gameOver = true;
    this.starCatchState.active = false;
    this.setStatusBanner('✨ AMAZING!');
    this.showStarCatchEndOverlay();
    const startBtn = document.getElementById('gameStartBtn');
    if (startBtn) startBtn.textContent = 'Play Again';
  },

  createObstacle() {
    const type = Math.random() < 0.7 ? 'rock' : 'barrier';
    const groundY = this.canvas.height - 38;
    this.obstacles.push({
      x: this.canvas.width + 20,
      y: groundY - (type === 'rock' ? 34 : 52),
      width: type === 'rock' ? 34 : 54,
      height: type === 'rock' ? 34 : 52,
      type,
      passed: false
    });
  },

  createStar() {
    this.stars.push({
      x: this.canvas.width + 20,
      y: 80 + Math.random() * (this.canvas.height - 180),
      radius: 9 + Math.random() * 7,
      collected: false,
      spin: Math.random() * Math.PI * 2
    });
  },

  drawStarCatcher() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const sky = this.ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#0f172a');
    sky.addColorStop(0.42, '#1d4ed8');
    sky.addColorStop(1, '#312e81');
    this.ctx.fillStyle = sky;
    this.ctx.fillRect(0, 0, w, h);

    this.clouds.forEach((cloud) => {
      this.ctx.fillStyle = 'rgba(255,255,255,0.18)';
      this.ctx.beginPath();
      this.ctx.ellipse(cloud.x, cloud.y, cloud.w * 0.42, cloud.h * 0.65, 0, 0, Math.PI * 2);
      this.ctx.ellipse(cloud.x + cloud.w * 0.24, cloud.y - 8, cloud.w * 0.28, cloud.h * 0.48, 0, 0, Math.PI * 2);
      this.ctx.ellipse(cloud.x + cloud.w * 0.52, cloud.y, cloud.w * 0.36, cloud.h * 0.58, 0, 0, Math.PI * 2);
      this.ctx.fill();
    });

    for (let i = 0; i < 40; i++) {
      const x = (i * 109 + this.backgroundOffset * 0.35) % (w + 50);
      const y = 20 + ((i * 47) % (h - 120));
      const alpha = 0.55 + ((i % 5) * 0.08);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      this.ctx.fillRect(x, y, 2, 2);
    }

    this.starCatchState.stars.forEach((star) => {
      this.drawStar(star.x, star.y, star.radius, star.gold ? '#facc15' : '#e9d5ff');
    });

    this.starCatchState.floaters.forEach((floater) => {
      this.ctx.fillStyle = `${floater.color}${Math.round(floater.life * 255).toString(16).padStart(2, '0')}`;
      this.ctx.font = 'bold 24px Fredoka, sans-serif';
      this.ctx.fillText(floater.text, floater.x, floater.y);
    });

    if (this.handState.detected && this.handState.fingerX && this.handState.fingerY) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fef3c7';
      this.ctx.arc(this.handState.fingerX, this.handState.fingerY, 8, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.strokeStyle = '#fbbf24';
      this.ctx.lineWidth = 2;
      this.ctx.arc(this.handState.fingerX, this.handState.fingerY, 14, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  },

  drawStar(x, y, radius, color) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(this.starCatchState.stars.find(star => star.x === x && star.y === y && star.radius === radius) ? (this.starCatchState.stars.find(star => star.x === x && star.y === y && star.radius === radius).phase || 0) : 0);
    this.ctx.fillStyle = color;
    this.ctx.beginPath();

    for (let i = 0; i < 5; i++) {
      const outer = radius;
      const inner = radius * 0.48;
      const angle = (Math.PI / 180) * (i * 72 - 90);
      const x1 = Math.cos(angle) * outer;
      const y1 = Math.sin(angle) * outer;
      const x2 = Math.cos(angle + Math.PI / 5) * inner;
      const y2 = Math.sin(angle + Math.PI / 5) * inner;
      if (i === 0) this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
    }

    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  },

  drawBlockBuilder() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const sky = this.ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#1e1b4b');
    sky.addColorStop(0.45, '#312e81');
    sky.addColorStop(1, '#0f172a');
    this.ctx.fillStyle = sky;
    this.ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 52; i++) {
      const x = ((i * 97 + this.backgroundOffset * 0.18) % (w + 60));
      const y = 20 + ((i * 53) % (h - 100));
      this.ctx.fillStyle = `rgba(255,255,255,${0.3 + (i % 6) * 0.08})`;
      this.ctx.fillRect(x, y, 2, 2);
    }

    this.ctx.fillStyle = 'rgba(255,255,255,0.15)';
    this.ctx.fillRect(0, h - 60, w, 60);

    this.blockBuilderState.tower.forEach((block, index) => {
      const wobbleOffset = this.blockBuilderState.wobble > 0 && index === this.blockBuilderState.tower.length - 1 ? Math.sin((performance.now() / 110) + index) * 6 * this.blockBuilderState.wobble : 0;
      this.ctx.save();
      this.ctx.translate(block.x + wobbleOffset, block.y);
      this.ctx.fillStyle = block.special ? '#facc15' : block.color;
      this.ctx.shadowColor = block.special ? '#fde68a' : block.color;
      this.ctx.shadowBlur = 18;
      this.ctx.fillRect(0, 0, block.width, block.height);
      this.ctx.shadowBlur = 0;
      this.ctx.strokeStyle = 'rgba(255,255,255,0.85)';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(0, 0, block.width, block.height);
      this.ctx.restore();
    });

    const current = this.blockBuilderState.current;
    if (current) {
      const glow = current.special ? '#fde68a' : '#ffffff';
      this.ctx.save();
      this.ctx.translate(current.x, current.y);
      this.ctx.fillStyle = current.special ? '#facc15' : current.color;
      this.ctx.shadowColor = glow;
      this.ctx.shadowBlur = 24;
      this.ctx.fillRect(0, 0, current.width, current.height);
      this.ctx.shadowBlur = 0;
      this.ctx.strokeStyle = 'rgba(255,255,255,0.9)';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(0, 0, current.width, current.height);
      this.ctx.restore();
    }

    if (this.handState.detected && this.handState.fingerX && this.handState.fingerY) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fef3c7';
      this.ctx.arc(this.handState.fingerX, this.handState.fingerY, 8, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.strokeStyle = '#fbbf24';
      this.ctx.lineWidth = 2;
      this.ctx.arc(this.handState.fingerX, this.handState.fingerY, 14, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  },

  drawGame() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const sky = this.ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#64d5ff');
    sky.addColorStop(0.48, '#bdeeff');
    sky.addColorStop(1, '#edfaff');
    this.ctx.fillStyle = sky;
    this.ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 32; i++) {
      const x = ((i * 121 + this.backgroundOffset * 0.25) % (w + 40));
      const y = 18 + ((i * 73) % 180);
      this.ctx.fillStyle = 'rgba(255,255,255,0.9)';
      this.ctx.fillRect(x, y, 3, 3);
    }

    this.clouds.forEach((cloud) => {
      this.ctx.fillStyle = 'rgba(255,255,255,0.82)';
      this.ctx.beginPath();
      this.ctx.ellipse(cloud.x, cloud.y, cloud.w * 0.38, cloud.h * 0.6, 0, 0, Math.PI * 2);
      this.ctx.ellipse(cloud.x + cloud.w * 0.25, cloud.y - 10, cloud.w * 0.32, cloud.h * 0.5, 0, 0, Math.PI * 2);
      this.ctx.ellipse(cloud.x + cloud.w * 0.52, cloud.y, cloud.w * 0.34, cloud.h * 0.56, 0, 0, Math.PI * 2);
      this.ctx.fill();
    });

    const groundY = this.canvas.height - 38;
    this.ctx.fillStyle = '#7dd3fc';
    this.ctx.fillRect(0, groundY, w, h - groundY);
    this.ctx.fillStyle = '#4ade80';
    this.ctx.fillRect(0, groundY + 26, w, 12);

    this.stars.forEach((star) => {
      const x = star.x;
      const y = star.y;
      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(star.spin);
      this.ctx.fillStyle = '#facc15';
      this.ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outer = star.radius;
        const inner = star.radius / 2.2;
        const angle = (Math.PI / 180) * (i * 72 - 90);
        const x1 = Math.cos(angle) * outer;
        const y1 = Math.sin(angle) * outer;
        const x2 = Math.cos(angle + Math.PI / 5) * inner;
        const y2 = Math.sin(angle + Math.PI / 5) * inner;
        if (i === 0) this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
      }
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();
    });

    this.obstacles.forEach((obs) => {
      this.ctx.fillStyle = obs.type === 'rock' ? '#8b5cf6' : '#f59e0b';
      this.ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      this.ctx.fillStyle = 'rgba(255,255,255,0.25)';
      this.ctx.fillRect(obs.x + 6, obs.y + 6, obs.width - 12, 8);
    });

    this.drawPlayer();

    if (this.handState.detected && !this.isPaused) {
      this.ctx.strokeStyle = '#22c55e';
      this.ctx.lineWidth = 3;
      this.ctx.strokeRect(this.player.x - 28, this.player.y - 12, 56, 56);
    }
  },

  drawPlayer() {
    const bodyX = this.player.x;
    const bodyY = this.player.y + this.player.height / 2;

    this.ctx.fillStyle = '#f9a8d4';
    this.ctx.beginPath();
    this.ctx.arc(bodyX, bodyY, 18, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = '#fff';
    this.ctx.beginPath();
    this.ctx.arc(bodyX - 7, bodyY - 4, 3.5, 0, Math.PI * 2);
    this.ctx.arc(bodyX + 7, bodyY - 4, 3.5, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = '#111827';
    this.ctx.beginPath();
    this.ctx.arc(bodyX - 7, bodyY - 4, 1.8, 0, Math.PI * 2);
    this.ctx.arc(bodyX + 7, bodyY - 4, 1.8, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.strokeStyle = '#5b21b6';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(bodyX, bodyY + 4, 10, 0.2, Math.PI - 0.2);
    this.ctx.stroke();
  }
};
