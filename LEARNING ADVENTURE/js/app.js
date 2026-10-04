/* ==========================================================================
   MAIN APPLICATION ROUTER & STATE CONTROLLER
   ========================================================================== */

const app = {
  currentActClassId: null,
  currentActClassName: '',
  currentGameClassId: null,
  currentGameClassName: '',

  stars: 0,

  addStar() {
    this.stars++;
  },

  resetStars() {
    this.stars = 0;
  },

  init() {
    this.bindEvents();
    ConfettiEngine.init();
  },

  showView(viewId) {
    // Keep senior-class page backgrounds isolated to the 6th-10th activity list.
    document.body.classList.remove('senior-body-6-8', 'senior-body-9-10');
    if (viewId === 'classActivitiesView') {
      const activeClass = (this.currentActClassId || '').toLowerCase().trim();
      if (['class6', 'class7', 'class8', '6th', '7th', '8th'].includes(activeClass)) {
        document.body.classList.add('senior-body-6-8');
      } else if (['class9', 'class10', '9th', '10th'].includes(activeClass)) {
        document.body.classList.add('senior-body-9-10');
      }
    }

    // Stop game if running when leaving game play view
    if (viewId !== 'gamePlay') {
      GameEngine.stopGame();
    }

    // Stop Magic Board if leaving magicBoardView
    if (viewId !== 'magicBoardView' && window.MagicBoard && MagicBoard.isActive) {
      MagicBoard.stop();
    }

    const sections = document.querySelectorAll('.view-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Start Magic Board when entering magicBoardView
    if (viewId === 'magicBoardView' && window.MagicBoard) {
      MagicBoard.start();
    }

    if (viewId === 'magicalClothView' && window.MagicalCloth) {
      MagicalCloth.startCamera();
    }
  },

  openClassActivities(classId, className) {
    audioManager.playClick();
    this.currentActClassId = classId;
    this.currentActClassName = className;

    const titleEl = document.getElementById('classActTitle');
    if (titleEl) titleEl.textContent = `${className} Activities`;

    this.renderClassActivitiesGrid(classId);

    // Apply mature academic backgrounds only to the 6th-10th class activity pages.
    const classActivitiesView = document.getElementById('classActivitiesView');
    if (classActivitiesView) {
      classActivitiesView.classList.remove('senior-bg-6-8', 'senior-bg-9-10');
      const normalizedClassId = (classId || '').toLowerCase().trim();
      if (['class6', 'class7', 'class8', '6th', '7th', '8th'].includes(normalizedClassId)) {
        classActivitiesView.classList.add('senior-bg-6-8');
      } else if (['class9', 'class10', '9th', '10th'].includes(normalizedClassId)) {
        classActivitiesView.classList.add('senior-bg-9-10');
      }
    }

    this.showView('classActivitiesView');
  },

  renderClassActivitiesGrid(classId) {
    const grid = document.getElementById('classActivitiesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    const targetId = (classId || '').toLowerCase().trim();

    const filtered = ACTIVITIES_DATA.filter(a => {
      if (!a || !a.classLevel) return false;
      const actLevel = a.classLevel.toLowerCase().trim();
      return (
        actLevel === targetId ||
        (targetId === 'nursery' && actLevel === 'nursery') ||
        (targetId === 'lkg' && actLevel === 'lkg') ||
        (targetId === 'ukg' && actLevel === 'ukg') ||
        ((targetId === 'class1' || targetId === '1st') && (actLevel === 'class1' || actLevel === '1st')) ||
        ((targetId === 'class2' || targetId === '2nd') && (actLevel === 'class2' || actLevel === '2nd')) ||
        ((targetId === 'class3' || targetId === '3rd') && (actLevel === 'class3' || actLevel === '3rd')) ||
        ((targetId === 'class4' || targetId === '4th') && (actLevel === 'class4' || actLevel === '4th')) ||
        ((targetId === 'class5' || targetId === '5th') && (actLevel === 'class5' || actLevel === '5th')) ||
        ((targetId === 'class6' || targetId === '6th') && (actLevel === 'class6' || actLevel === '6th')) ||
        ((targetId === 'class7' || targetId === '7th') && (actLevel === 'class7' || actLevel === '7th')) ||
        ((targetId === 'class8' || targetId === '8th') && (actLevel === 'class8' || actLevel === '8th')) ||
        ((targetId === 'class9' || targetId === '9th') && (actLevel === 'class9' || actLevel === '9th')) ||
        ((targetId === 'class10' || targetId === '10th') && (actLevel === 'class10' || actLevel === '10th'))
      );
    });

    if (filtered.length > 0) {
      filtered.forEach(act => {
        const card = document.createElement('div');
        card.className = 'card activity-item-card';
        card.innerHTML = `
          <div class="card-icon">${act.icon}</div>
          <div class="card-title">${act.title}</div>
          <div class="card-desc">${act.desc}</div>
          <span class="card-badge badge-${act.classLevel}">${act.className}</span>
          <button class="card-start-btn">Start Activity ✨</button>
        `;

        card.addEventListener('click', () => {
          audioManager.playClick();
          ActivityEngine.start(act.id);
        });

        grid.appendChild(card);
      });
    } else {
      // Clean placeholder for classes whose custom syllabus modules are coming next
      const comingCard = document.createElement('div');
      comingCard.className = 'card coming-soon-card';
      comingCard.innerHTML = `
        <div class="card-icon">🚀</div>
        <div class="card-title">${this.currentActClassName} Adventure</div>
        <div class="card-desc">Interactive curriculum lessons & activities coming soon!</div>
        <span class="card-badge badge-coming">Syllabus In Progress</span>
      `;
      comingCard.addEventListener('click', () => {
        audioManager.playClick();
        audioManager.speak(`${this.currentActClassName} activities are coming soon!`);
      });
      grid.appendChild(comingCard);
    }
  },

  openClassGames(classId, className) {
    audioManager.playClick();
    this.currentGameClassId = classId;
    this.currentGameClassName = className;
    this.showView('gamesView');
  },

  openGamesZone() {
    audioManager.playClick();
    this.showView('gamesView');
  },

  renderClassGamesGrid(classId) {
    const grid = document.getElementById('classGamesGrid');
    if (!grid) return;
    grid.innerHTML = '';
  },

  bindEvents() {
    // Return to Home (Home Buttons & Logos)
    document.querySelectorAll('.btn-go-home, .logo-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        audioManager.playClick();
        this.showView('homeView');
      });
    });

    // Welcome Option Cards (Navigate to separate Activities & Games pages)
    const actBtn = document.getElementById('heroActivitiesBtn');
    if (actBtn) {
      actBtn.addEventListener('click', (e) => {
        e.preventDefault();
        audioManager.playClick();
        this.showView('activitiesView');
      });
    }

    const gameBtn = document.getElementById('heroGamesBtn');
    if (gameBtn) {
      gameBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openGamesZone();
      });
    }

    const magicalBtn = document.getElementById('heroMagicalWorldBtn');
    if (magicalBtn) {
      magicalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        audioManager.playClick();
        this.showView('magicalWorldView');
      });
    }

    // Magical World Option Cards
    const magicBoardCard = document.getElementById('magicBoardOptionCard');
    if (magicBoardCard) {
      magicBoardCard.addEventListener('click', () => {
        audioManager.playClick();
        this.showView('magicBoardView');
      });
    }

    // Magical Cloth click handler
    const magicalClothCard = document.getElementById('magicalClothOptionCard');
    if (magicalClothCard) {
      magicalClothCard.addEventListener('click', () => {
        audioManager.playClick();
        this.showView('magicalClothView');
      });
    }
    // Magical Cloth Back Button
const magicalClothBackBtn = document.getElementById('magicalClothBackBtn');

if (magicalClothBackBtn) {
  magicalClothBackBtn.addEventListener('click', () => {
    audioManager.playClick();
    this.showView('magicalWorldView');
  });
}

// Magical Cloth Home Button
const magicalClothHomeBtn = document.getElementById('magicalClothHomeBtn');

if (magicalClothHomeBtn) {
  magicalClothHomeBtn.addEventListener('click', () => {
    audioManager.playClick();
    this.showView('homeView');
  });
}


    const startZoneBtn = document.getElementById('startMagicSkyRunnerBtn');
    if (startZoneBtn) {
      startZoneBtn.addEventListener('click', () => {
        audioManager.playClick();
        GameEngine.start('magic_sky_runner');
      });
    }

    const startStarBtn = document.getElementById('startStarCatcherBtn');
    if (startStarBtn) {
      startStarBtn.addEventListener('click', () => {
        audioManager.playClick();
        GameEngine.start('star_catcher');
      });
    }

    const startMagicDragBtn = document.getElementById('startMagicDragBtn');
    if (startMagicDragBtn) {
      startMagicDragBtn.addEventListener('click', () => {
        audioManager.playClick();
        GameEngine.start('magic_drag');
      });
    }

    const startBlockBuilderBtn = document.getElementById('startBlockBuilderBtn');
    if (startBlockBuilderBtn) {
      startBlockBuilderBtn.addEventListener('click', () => {
        audioManager.playClick();
        GameEngine.start('block_builder');
      });
    }

    const startMagicTargetHuntBtn = document.getElementById('startMagicTargetHuntBtn');
    if (startMagicTargetHuntBtn) {
      startMagicTargetHuntBtn.addEventListener('click', () => {
        audioManager.playClick();
        GameEngine.start('magic_target_hunt');
      });
    }
    const startNeonDodgeBtn = document.getElementById('startNeonDodgeBtn');
    if (startNeonDodgeBtn) {
      startNeonDodgeBtn.addEventListener('click', () => {
        audioManager.playClick();
        GameEngine.start('neon_dodge');
      });
    }
    const howToPlayBtn = document.getElementById('viewGamesInfoBtn');
    if (howToPlayBtn) {
      howToPlayBtn.addEventListener('click', () => {
        audioManager.playClick();
        audioManager.speak('Allow Camera Access. Move your index finger left or right to move. Move your finger up to jump.');
        const status = document.getElementById('gameStatusBanner');
        if (status) {
          status.textContent = 'Move your index finger LEFT or RIGHT';
        }
      });
    }

    // Back to Class Selection
    document.getElementById('btnBackToActClasses')?.addEventListener('click', () => {
      audioManager.playClick();
      this.showView('activitiesView');
    });

    document.getElementById('btnBackToGameClasses')?.addEventListener('click', () => {
      audioManager.playClick();
      this.showView('gamesView');
    });

    // Arena Back Buttons
    document.getElementById('backToActivities')?.addEventListener('click', () => {
      audioManager.playClick();
      this.showView('classActivitiesView');
    });

    document.getElementById('backToGames')?.addEventListener('click', () => {
      audioManager.playClick();
      this.showView('gamesView');
    });

    // Universal Sound Toggle
    document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isEnabled = audioManager.toggleSound();
        document.querySelectorAll('.sound-toggle-btn').forEach(b => {
          b.textContent = isEnabled ? '🔊' : '🔇';
        });
      });
    });
  }
};

// Initialize App on DOM Load
window.app = app;
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});



