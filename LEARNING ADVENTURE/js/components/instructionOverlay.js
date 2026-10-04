/* ==========================================================================
   1-FINGER GESTURE INSTRUCTION OVERLAY COMPONENT
   ========================================================================== */

const GestureOverlay = {
  show({ type, title, subtitle, onStart }) {
    const overlay = document.getElementById('instructionOverlay');
    const demoCard = document.getElementById('demoAnimationBox');
    const demoTitle = document.getElementById('demoTitle');
    const demoSub = document.getElementById('demoSub');
    const startBtn = document.getElementById('demoStartBtn');

    if (!overlay) return;

    // Reset classes
    demoCard.className = 'demo-animation-box';
    
    // Configure Gesture Type
    let gestureClass = 'gesture-tap';
    let fingerIcon = '☝️';
    let defaultTitle = 'TAP WITH 1 FINGER';

    switch (type.toLowerCase()) {
      case 'drag':
        gestureClass = 'gesture-drag';
        fingerIcon = '👆';
        defaultTitle = 'DRAG WITH 1 FINGER';
        break;
      case 'swipe':
        gestureClass = 'gesture-swipe';
        fingerIcon = '👆';
        defaultTitle = 'SWIPE WITH 1 FINGER';
        break;
      case 'hold':
        gestureClass = 'gesture-hold';
        fingerIcon = '👆';
        defaultTitle = 'HOLD WITH 1 FINGER';
        break;
      case 'tap':
      default:
        gestureClass = 'gesture-tap';
        fingerIcon = '☝️';
        defaultTitle = 'TAP WITH 1 FINGER';
        break;
    }

    demoCard.classList.add(gestureClass);

    demoCard.innerHTML = `
      <div class="demo-target-circle">🌟</div>
      <div class="demo-hand-cursor">${fingerIcon}</div>
    `;

    demoTitle.textContent = title || defaultTitle;
    demoSub.textContent = subtitle || 'Watch how to play!';

    overlay.classList.add('active');

    // Play Voice Instruction for Gesture
    audioManager.speak(`${demoTitle.textContent}. ${demoSub.textContent}`);

    // Setup button click callback
    const handleStart = () => {
      audioManager.playClick();
      overlay.classList.remove('active');
      startBtn.removeEventListener('click', handleStart);
      if (typeof onStart === 'function') {
        onStart();
      }
    };

    startBtn.onclick = handleStart;
  }
};
