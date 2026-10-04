/* ==========================================================================
   ACTIVITY PLAY ENGINE
   ========================================================================== */

const ActivityEngine = {
  currentActivity: null,
  currentStepIndex: 0,

  start(activityId) {
    const act = ACTIVITIES_DATA.find(a => a.id === activityId);
    if (!act) return;

    this.currentActivity = act;
    this.currentStepIndex = 0;

    // Apply the same senior theme to the complete activity-play screen
    // for classes 6-10 only. Nursery-5 keep their original design.
    const activityPlay = document.getElementById('activityPlay');
    if (activityPlay) {
      activityPlay.classList.remove('senior-play-6-8', 'senior-play-9-10');
      const level = (act.classLevel || '').toLowerCase().trim();
      if (['class6', 'class7', 'class8', '6th', '7th', '8th'].includes(level)) {
        activityPlay.classList.add('senior-play-6-8');
      } else if (['class9', 'class10', '9th', '10th'].includes(level)) {
        activityPlay.classList.add('senior-play-9-10');
      }
    }

    // Immediately show Activity Play View & render current step
    app.showView('activityPlay');
    this.renderCurrentStep();
  },

  renderCurrentStep() {
    const act = this.currentActivity;
    if (!act) return;

    const step = act.steps[this.currentStepIndex];
    if (!step) {
      this.completeActivity();
      return;
    }

    const titleEl = document.getElementById('arenaTitle');
    const bannerTextEl = document.getElementById('instructionText');
    const stageEl = document.getElementById('activityStage');

    const currentLevelNum = step.level || (this.currentStepIndex + 1);
    const totalLevels = act.steps.length;
    const levelTitleStr = step.title ? ` - ${step.title}` : '';

    if (titleEl) {
      titleEl.innerHTML = `<span style="background:var(--accent-yellow); color:#0f172a; padding:4px 14px; border-radius:20px; font-size:1.1rem; margin-right:10px;">⭐ Level ${currentLevelNum}/${totalLevels}</span> ${act.title}${levelTitleStr}`;
    }
    if (bannerTextEl) bannerTextEl.textContent = step.prompt;

    // Speak Prompt
    audioManager.speak(step.prompt);

    // Setup Replay Audio Button
    const replayBtn = document.getElementById('replayAudioBtn');
    if (replayBtn) {
      replayBtn.onclick = () => audioManager.speak(step.prompt);
    }

    stageEl.innerHTML = '';

    // Nursery Custom Visual Game Router vs 3D Discovery vs Drag Match vs Standard Tap
    if (act.id === 'nur_color_hunt') {
      this.renderColorHuntGame(stageEl, step);
    } else if (act.id === 'nur_shape_fun') {
      this.renderShapeFunGame(stageEl, step);
    } else if (act.id === 'nur_match_pair') {
      this.renderMatchPairGame(stageEl, step);
    } else if (act.id === 'nur_find_friend') {
      this.renderFindFriendGame(stageEl, step);
    } else if (act.id === 'nur_little_explorer') {
      this.renderLittleExplorerGame(stageEl, step);
    } else if (act.id === 'class5_mystery_mission') {
      this.renderMysteryMissionStage(stageEl, step, act);
    } else if (act.id === 'class5_science_lab_quest') {
      this.renderScienceLabQuestStage(stageEl, step, act);
    } else if (act.id === 'class5_math_explorer') {
      this.renderMathExplorerStage(stageEl, step, act);
    } else if (act.id === 'class5_story_detective') {
      this.renderStoryDetectiveStage(stageEl, step, act);
    } else if (act.id === 'class5_eco_rescue_mission') {
      this.renderEcoRescueStage(stageEl, step, act);
    } else if (act.id === 'class5_inventor_challenge') {
      this.renderInventorChallengeStage(stageEl, step, act);
    } else if (act.id === 'class6_living_world_explorer') {
      this.renderLivingWorldExplorerStage(stageEl, step, act);
    } else if (act.id === 'class6_materials_lab') {
      this.renderMaterialsLabStage(stageEl, step, act);
    } else if (act.id === 'class6_math_adventure_map') {
      this.renderMathAdventureMapStage(stageEl, step, act);
    } else if (act.id === 'class6_map_time_travel_quest') {
      this.renderMapTimeTravelStage(stageEl, step, act);
    } else if (act.id === 'class6_story_investigator') {
      this.renderStoryInvestigatorStage(stageEl, step, act);
    } else if (act.id === 'class6_smart_thinker_challenge') {
      this.renderSmartThinkerStage(stageEl, step, act);
    } else if (act.id === 'class7_cell_explorer') {
      this.renderCellExplorerStage(stageEl, step, act);
    } else if (act.id === 'class7_reaction_lab') {
      this.renderReactionLabStage(stageEl, step, act);
    } else if (act.id === 'class7_data_detective') {
      this.renderDataDetectiveStage(stageEl, step, act);
    } else if (act.id === 'class7_earth_system_explorer') {
      this.renderEarthSystemExplorerStage(stageEl, step, act);
    } else if (act.id === 'class7_time_vault') {
      this.renderTimeVaultStage(stageEl, step, act);
    } else if (act.id === 'class7_decision_lab') {
      this.renderDecisionLabStage(stageEl, step, act);
    } else if (act.id.startsWith('class8_')) {
      this.renderClass8Stage(stageEl, step, act);
    } else if (act.id === 'class9_life_systems_investigation') {
      this.renderLifeSystemsInvestigationStage(stageEl, step, act);
    } else if (act.id === 'class9_chemistry_mystery_lab') {
      this.renderChemistryMysteryLabStage(stageEl, step, act);
    } else if (act.id === 'class9_physics_simulation_lab') {
      this.renderPhysicsSimulationLabStage(stageEl, step, act);
    } else if (act.id === 'class9_math_strategist') {
      this.renderMathStrategistStage(stageEl, step, act);
    } else if (act.id === 'class9_social_science_evidence_investigation') {
      this.renderSocialScienceEvidenceStage(stageEl, step, act);
    } else if (act.id === 'class9_real_world_case_file') {
      this.renderRealWorldCaseFileStage(stageEl, step, act);
    } else if (act.id.startsWith('class10_')) {
      this.renderClass10Stage(stageEl, step, act);
    } else if (act.id === '3rd_3d_lab' || act.id === '4th_3d_science') {
      this.render3DStage(stageEl, step, act);
    } else if (act.type === 'drag_match') {
      this.renderDragMatchStage(stageEl, step);
    } else {
      this.renderTapStage(stageEl, step, act);
    }
  },

  renderLivingWorldExplorerStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#ecfeff; border:2px solid #67e8f9; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#ecfeff,#dbeafe); border:4px solid #06b6d4;';
      introCard.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">🌿</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Living World Mission</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(introCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      actions.appendChild(startBtn);
      actions.appendChild(helpBtn);
      shell.appendChild(actions);
    } else if (step.type === 'identify') {
      const card = document.createElement('div');
      card.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
      card.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
      shell.appendChild(card);

      const choicesWrap = document.createElement('div');
      choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';
      let hintIndex = 0;
      step.choices.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 16px; border-radius:20px; min-height:120px; text-align:left;';
        btn.innerHTML = `<div style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${option.label}</div><div style="font-size:0.9rem; color:#475569;">${option.detail}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            btn.style.transform = 'scale(1.04)';
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        choicesWrap.appendChild(btn);
      });
      shell.appendChild(choicesWrap);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'match') {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';
      let hintIndex = 0;
      step.choices.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.textContent = option.label;
        btn.style.cssText = 'padding:18px 16px; border-radius:18px; min-height:110px; font-size:1rem; font-weight:800;';
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        wrap.appendChild(btn);
      });
      shell.appendChild(wrap);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f8fafc; border:2px dashed #64748b; color:#334155; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 2;
        this.renderCurrentStep();
      };
      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:24px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e; text-align:center;';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">🏆</div>
        <div style="font-size:1.8rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Mission Complete</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart Mission';
      restartBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderMaterialsLabStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:950px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#ecfeff; border:2px solid #67e8f9; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Lab progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#ecfeff,#dbeafe); border:4px solid #38bdf8;';
      introCard.innerHTML = `
        <div style="font-size:2.3rem; margin-bottom:8px;">🧪</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Materials Lab</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(introCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      actions.appendChild(startBtn);
      actions.appendChild(helpBtn);
      shell.appendChild(actions);
    } else if (step.type === 'sort') {
      const note = document.createElement('div');
      note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f8fafc; border:2px dashed #94a3b8; color:#334155; font-weight:700;';
      note.textContent = 'Drop each material into the correct property box.';
      shell.appendChild(note);

      const bucketWrap = document.createElement('div');
      bucketWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:16px;';
      const groups = {};
      step.buckets.forEach(bucket => {
        const zone = document.createElement('div');
        zone.style.cssText = 'padding:16px; border-radius:20px; background:#ffffff; border:3px solid #cbd5e1; min-height:180px;';
        const title = document.createElement('div');
        title.style.cssText = 'font-size:1.1rem; font-weight:900; color:#0f172a; margin-bottom:10px;';
        title.textContent = bucket.label;
        zone.appendChild(title);
        const lists = document.createElement('div');
        lists.style.cssText = 'display:flex; flex-direction:column; gap:10px;';
        zone.appendChild(lists);
        groups[bucket.label] = lists;
        bucketWrap.appendChild(zone);
      });

      const palette = document.createElement('div');
      palette.style.cssText = 'display:flex; flex-wrap:wrap; gap:10px; justify-content:center;';
      const items = ['Salt 🧂', 'Sugar 🍬', 'Glass 🪟', 'Plastic sheet 🧴', 'Iron nail 🔩', 'Stone 🪨'];
      items.forEach(item => {
        const chip = document.createElement('div');
        chip.draggable = true;
        chip.textContent = item;
        chip.style.cssText = 'padding:12px 16px; border-radius:18px; background:#ecfeff; border:2px solid #67e8f9; font-weight:800; cursor:grab;';
        chip.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', item);
        });
        chip.addEventListener('click', () => {
          const target = item.includes('Salt') || item.includes('Sugar') ? 'Soluble' : item.includes('Glass') || item.includes('Plastic') ? 'Transparent' : 'Hard';
          const list = groups[target];
          if (list) {
            const duplicate = document.createElement('div');
            duplicate.style.cssText = 'padding:8px 12px; border-radius:12px; background:#f8fafc; border:1px solid #cbd5e1; font-weight:700;';
            duplicate.textContent = item;
            list.appendChild(duplicate);
            chip.style.opacity = '0.5';
            if (list.children.length >= 2) {
              setTimeout(() => {
                this.currentStepIndex += 1;
                this.renderCurrentStep();
              }, 700);
            }
          }
        });
        palette.appendChild(chip);
      });

      step.buckets.forEach(bucket => {
        const zone = bucketWrap.querySelectorAll('div')[Object.keys(groups).indexOf(bucket.label) + 1] || bucketWrap.lastElementChild;
        const target = zone;
        target.addEventListener('dragover', (e) => { e.preventDefault(); });
        target.addEventListener('drop', (e) => {
          e.preventDefault();
          const item = e.dataTransfer.getData('text/plain');
          const slot = document.createElement('div');
          slot.style.cssText = 'padding:8px 12px; border-radius:12px; background:#f8fafc; border:1px solid #cbd5e1; font-weight:700;';
          slot.textContent = item;
          const linkedList = groups[bucket.label];
          linkedList.appendChild(slot);
          if (linkedList.children.length >= 2) {
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 700);
          }
        });
      });

      shell.appendChild(bucketWrap);
      shell.appendChild(palette);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      let hintIndex = 0;
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        note.textContent = clue;
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'observe') {
      const grid = document.createElement('div');
      grid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:14px;';
      let hintIndex = 0;
      step.choices.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 16px; border-radius:20px; min-height:120px; text-align:left;';
        btn.innerHTML = `<div style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${option.label}</div><div style="font-size:0.9rem; color:#475569;">${option.detail}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        grid.appendChild(btn);
      });
      shell.appendChild(grid);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#e0f2fe; border:2px dashed #38bdf8; color:#0f172a; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 2;
        this.renderCurrentStep();
      };
      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:24px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e; text-align:center;';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">✅</div>
        <div style="font-size:1.8rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Lab Success</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart Lab';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderMathAdventureMapStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fef3c7; border:2px solid #fbbf24; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Math mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#fef3c7,#dbeafe); border:4px solid #f59e0b;';
      introCard.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">🗺️</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Math Adventure Map</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(introCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      actions.appendChild(startBtn);
      actions.appendChild(helpBtn);
      shell.appendChild(actions);
    } else if (step.type === 'measure' || step.type === 'pattern') {
      const grid = document.createElement('div');
      grid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';
      let hintIndex = 0;
      step.choices.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 16px; border-radius:20px; min-height:110px; text-align:left;';
        btn.innerHTML = `<div style="font-size:1.2rem; font-weight:900; color:#0f172a;">${option.label}</div><div style="font-size:0.9rem; color:#475569; margin-top:6px;">${option.detail}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        grid.appendChild(btn);
      });
      shell.appendChild(grid);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:24px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e; text-align:center;';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">🏆</div>
        <div style="font-size:1.8rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Mission Complete</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart Mission';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderMapTimeTravelStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#dcfce7; border:2px solid #22c55e; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Map & timeline progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #16a34a;';
      introCard.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">🌍</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Map & Time Travel Quest</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(introCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      actions.appendChild(startBtn);
      actions.appendChild(helpBtn);
      shell.appendChild(actions);
    } else if (step.type === 'map' || step.type === 'timeline') {
      const grid = document.createElement('div');
      grid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';
      let hintIndex = 0;
      step.choices.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 16px; border-radius:20px; min-height:110px; text-align:left;';
        btn.innerHTML = `<div style="font-size:1.1rem; font-weight:900; color:#0f172a;">${option.label}</div><div style="font-size:0.9rem; color:#475569; margin-top:6px;">${option.detail}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        grid.appendChild(btn);
      });
      shell.appendChild(grid);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#ecfeff; border:2px dashed #06b6d4; color:#0f172a; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:24px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#e0f2fe); border:4px solid #22c55e; text-align:center;';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">🌟</div>
        <div style="font-size:1.8rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Quest Complete</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart Quest';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderStoryInvestigatorStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#f3e8ff; border:2px solid #a78bfa; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Story investigation progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#f3e8ff,#dbeafe); border:4px solid #a78bfa;';
      introCard.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">📚</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Story Investigator</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(introCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#faf5ff; border:2px dashed #a78bfa; color:#4c1d95; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      actions.appendChild(startBtn);
      actions.appendChild(helpBtn);
      shell.appendChild(actions);
    } else if (step.type === 'sequence' || step.type === 'vocab') {
      const grid = document.createElement('div');
      grid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';
      let hintIndex = 0;
      step.choices.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 16px; border-radius:20px; min-height:110px; text-align:left;';
        btn.innerHTML = `<div style="font-size:1.1rem; font-weight:900; color:#0f172a;">${option.label}</div><div style="font-size:0.9rem; color:#475569; margin-top:6px;">${option.detail}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        grid.appendChild(btn);
      });
      shell.appendChild(grid);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f5f3ff; border:2px dashed #8b5cf6; color:#4c1d95; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:24px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e; text-align:center;';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">📘</div>
        <div style="font-size:1.8rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Story Solved</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart Story';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderSmartThinkerStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#e0f2fe; border:2px solid #38bdf8; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Smart thinker progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#e0f2fe,#fef3c7); border:4px solid #38bdf8;';
      introCard.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">🧠</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Smart Thinker Challenge</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(introCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#f0f9ff; border:2px dashed #38bdf8; color:#0f172a; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      actions.appendChild(startBtn);
      actions.appendChild(helpBtn);
      shell.appendChild(actions);
    } else if (step.type === 'decision' || step.type === 'strategy') {
      const grid = document.createElement('div');
      grid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:14px;';
      let hintIndex = 0;
      step.choices.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 16px; border-radius:20px; min-height:120px; text-align:left;';
        btn.innerHTML = `<div style="font-size:1.1rem; font-weight:900; color:#0f172a;">${option.label}</div><div style="font-size:0.9rem; color:#475569; margin-top:6px;">${option.detail}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        grid.appendChild(btn);
      });
      shell.appendChild(grid);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:24px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e; text-align:center;';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">🏆</div>
        <div style="font-size:1.8rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Smart Solution Complete</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart Challenge';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderMysteryMissionStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:20px 22px; border-radius:24px; background:linear-gradient(135deg,#fef3c7,#e0f2fe); border:4px solid #fbbf24; box-shadow:0 10px 25px rgba(0,0,0,0.08);';
      introCard.innerHTML = `
        <div style="font-size:2.1rem; margin-bottom:10px;">🧩</div>
        <div style="font-size:1.5rem; font-weight:800; margin-bottom:8px; color:#0f172a;">Mission Briefing</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.6;">${step.intro}</div>
      `;
      shell.appendChild(introCard);

      const controls = document.createElement('div');
      controls.style.cssText = 'display:flex; flex-wrap:wrap; gap:12px; justify-content:center;';

      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.style.cssText = 'padding:12px 20px; font-size:1rem;';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };

      const hintBtn = document.createElement('button');
      hintBtn.className = 'nav-btn';
      hintBtn.style.cssText = 'padding:12px 20px; font-size:1rem; background:#f8fafc; color:#0f172a;';
      hintBtn.textContent = '💡 Need a Hint';
      hintBtn.onclick = () => {
        audioManager.speak(step.hint);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; color:#9a4d00; border:2px dashed #f59e0b; font-weight:700;';
        note.textContent = step.hint;
        shell.appendChild(note);
      };

      controls.appendChild(startBtn);
      controls.appendChild(hintBtn);
      shell.appendChild(controls);
    } else if (step.type === 'challenge') {
      const clueGrid = document.createElement('div');
      clueGrid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:16px;';

      const clueCards = [
        { emoji: '🌙', label: 'Moonlit clue', text: 'The gate opens under the moon.' },
        { emoji: '🗺️', label: 'Map clue', text: 'The path begins at the hill marker.' },
        { emoji: '🏮', label: 'Lantern clue', text: 'The light is carried by scouts.' }
      ];

      clueCards.forEach(card => {
        const item = document.createElement('div');
        item.style.cssText = 'padding:18px 14px; border-radius:20px; background:#ffffff; border:4px solid #cbd5e1; text-align:center; box-shadow:0 8px 20px rgba(0,0,0,0.06);';
        item.innerHTML = `
          <div style="font-size:2.7rem; margin-bottom:8px;">${card.emoji}</div>
          <div style="font-size:1rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${card.label}</div>
          <div style="font-size:0.95rem; color:#475569;">${card.text}</div>
        `;
        clueGrid.appendChild(item);
      });

      shell.appendChild(clueGrid);

      const optionsWrap = document.createElement('div');
      optionsWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;';

      step.choices.forEach(option => {
        const optBtn = document.createElement('button');
        optBtn.className = 'interactive-item';
        optBtn.style.cssText = 'padding:18px 16px; border-radius:20px; min-height:120px; font-size:1.02rem; background:#fff;';
        optBtn.innerHTML = `<div style="font-size:1.2rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${option.label}</div><div style="font-size:0.9rem; color:#475569;">${option.detail}</div>`;
        optBtn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            optBtn.style.borderColor = '#22c55e';
            optBtn.style.transform = 'scale(1.04)';
            audioManager.speak('Excellent! The clues fit together.');
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            optBtn.style.borderColor = '#ef4444';
            optBtn.style.animation = 'shake 0.4s';
            setTimeout(() => { optBtn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        optionsWrap.appendChild(optBtn);
      });

      const hintBox = document.createElement('div');
      hintBox.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f8fafc; border:2px dashed #cbd5e1; color:#334155; font-weight:700;';
      hintBox.textContent = 'Hint: the right choice connects moonlight, map, and lantern clues.';

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; flex-wrap:wrap; gap:10px; justify-content:center;';
      const hintBtn = document.createElement('button');
      hintBtn.className = 'nav-btn';
      hintBtn.textContent = '💡 Hint';
      hintBtn.onclick = () => {
        hintBox.textContent = step.hint;
        audioManager.speak(step.hint);
      };
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Try Again';
      restartBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      actions.appendChild(hintBtn);
      actions.appendChild(restartBtn);

      shell.appendChild(optionsWrap);
      shell.appendChild(hintBox);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e; box-shadow:0 10px 25px rgba(0,0,0,0.08); text-align:center;';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">🏆</div>
        <div style="font-size:1.7rem; font-weight:900; margin-bottom:10px; color:#0f172a;">Mission Complete!</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; flex-wrap:wrap; gap:12px; margin-top:8px;';
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart Mission';
      restartBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      actions.appendChild(restartBtn);
      shell.appendChild(actions);
    }

    container.appendChild(shell);
  },

  renderScienceLabQuestStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#ecfeff,#dbeafe); border:4px solid #38bdf8;';
      introCard.innerHTML = `
        <div style="font-size:2.3rem; margin-bottom:8px;">🌱</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Science Lab Briefing</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.6;">${step.intro}</div>
      `;
      shell.appendChild(introCard);

      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.style.cssText = 'align-self:center; padding:12px 22px; font-size:1rem;';
      startBtn.textContent = '🧪 Start Experiment';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      shell.appendChild(startBtn);
    } else if (step.type === 'experiment') {
      const labBoard = document.createElement('div');
      labBoard.style.cssText = 'display:grid; gap:18px; grid-template-columns:repeat(auto-fit,minmax(220px,1fr));';

      const plantBox = document.createElement('div');
      plantBox.style.cssText = 'padding:18px; border-radius:24px; background:linear-gradient(180deg,#dcfce7,#f0fdf4); border:4px solid #16a34a; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:180px;';
      plantBox.innerHTML = `
        <div style="font-size:4.3rem;">🌱</div>
        <div style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-top:10px;">Sprout Test Station</div>
      `;
      labBoard.appendChild(plantBox);

      const variablePanel = document.createElement('div');
      variablePanel.style.cssText = 'display:grid; gap:14px;';

      const selected = { sunlight: null, water: null, temperature: null };
      const note = document.createElement('div');
      note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f8fafc; border:2px dashed #94a3b8; color:#334155; font-weight:700;';
      note.textContent = 'Pick each variable to test the sprout conditions.';

      step.variables.forEach(variable => {
        const group = document.createElement('div');
        group.style.cssText = 'padding:14px; border-radius:18px; background:#ffffff; border:3px solid #e2e8f0;';

        const header = document.createElement('div');
        header.style.cssText = 'font-weight:800; color:#0f172a; margin-bottom:10px;';
        header.textContent = variable.label;
        group.appendChild(header);

        const optionsRow = document.createElement('div');
        optionsRow.style.cssText = 'display:flex; flex-wrap:wrap; gap:8px;';

        variable.options.forEach(option => {
          const btn = document.createElement('button');
          btn.className = 'nav-btn';
          btn.style.cssText = 'padding:8px 12px; font-size:0.9rem; background:#f8fafc; color:#0f172a;';
          btn.textContent = option.label;
          btn.onclick = () => {
            selected[variable.label.toLowerCase()] = option.label;
            document.querySelectorAll('.lab-option').forEach(el => el.style.background = '#f8fafc');
            btn.style.background = '#dbeafe';
            btn.style.borderColor = option.isCorrect ? '#22c55e' : '#fbbf24';
            if (option.isCorrect) {
              audioManager.playClick();
              note.textContent = `${variable.label} looks promising. Keep testing the rest.`;
            } else {
              audioManager.playPop();
              note.textContent = `${variable.label} needs a different setting. Try another choice.`;
            }

            const allGood = variable.options.filter(v => v.isCorrect).length > 0 && selected.sunlight && selected.water && selected.temperature;
            if (selected.sunlight && selected.water && selected.temperature) {
              const goodCount = [selected.sunlight, selected.water, selected.temperature].filter(val => {
                return val === 'Bright daylight' || val === 'Balanced watering' || val === 'Warm and gentle';
              }).length;
              if (goodCount === 3) {
                note.textContent = 'All three conditions are ideal. The sprout is ready to bloom!';
                setTimeout(() => {
                  this.currentStepIndex += 1;
                  this.renderCurrentStep();
                }, 1100);
              }
            }
          };
          btn.classList.add('lab-option');
          optionsRow.appendChild(btn);
        });

        group.appendChild(optionsRow);
        variablePanel.appendChild(group);
      });

      shell.appendChild(labBoard);
      shell.appendChild(note);
      shell.appendChild(variablePanel);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const hintBtn = document.createElement('button');
      hintBtn.className = 'nav-btn';
      hintBtn.textContent = '💡 Hint';
      hintBtn.onclick = () => {
        audioManager.speak(step.hint);
        note.textContent = step.hint;
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(hintBtn);
      actions.appendChild(retryBtn);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:22px; text-align:center; border-radius:22px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e;';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">✅</div>
        <div style="font-size:1.7rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Experiment Success</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.style.cssText = 'margin-top:12px; align-self:center;';
      restartBtn.textContent = '🔄 Restart Lab';
      restartBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderMathExplorerStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    if (step.type === 'start') {
      const introCard = document.createElement('div');
      introCard.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#fef3c7,#dbeafe); border:4px solid #f59e0b;';
      introCard.innerHTML = `
        <div style="font-size:2.2rem; margin-bottom:8px;">🗺️</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Route Planning</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.6;">${step.intro}</div>
      `;
      shell.appendChild(introCard);

      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.style.cssText = 'align-self:center; padding:12px 20px;';
      startBtn.textContent = '🧭 Start Route Plan';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      shell.appendChild(startBtn);
    } else if (step.type === 'challenge') {
      const routeCards = document.createElement('div');
      routeCards.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';

      const options = [
        { label: 'River Route', detail: '2.8 km • 40 min • ₹90', isCorrect: false },
        { label: 'Forest Trail', detail: '2.1 km • 32 min • ₹70', isCorrect: true },
        { label: 'Hill Shortcut', detail: '1.7 km • 25 min • ₹110', isCorrect: false }
      ];

      options.forEach(option => {
        const card = document.createElement('button');
        card.className = 'interactive-item';
        card.style.cssText = 'padding:18px 14px; border-radius:22px;';
        card.innerHTML = `<div style="font-size:1.3rem; font-weight:800; margin-bottom:6px; color:#0f172a;">${option.label}</div><div style="font-size:0.95rem; color:#475569;">${option.detail}</div>`;
        card.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            card.style.borderColor = '#22c55e';
            card.style.transform = 'scale(1.04)';
            audioManager.speak('Smart route! You chose the best plan.');
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            card.style.borderColor = '#ef4444';
            card.style.animation = 'shake 0.4s';
            setTimeout(() => { card.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        routeCards.appendChild(card);
      });

      const hintBox = document.createElement('div');
      hintBox.style.cssText = 'padding:12px 14px; border-radius:14px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;';
      hintBox.textContent = 'Hint: compare the total distance, time, and cost before choosing.';

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const hintBtn = document.createElement('button');
      hintBtn.className = 'nav-btn';
      hintBtn.textContent = '💡 Hint';
      hintBtn.onclick = () => {
        hintBox.textContent = step.hint;
        audioManager.speak(step.hint);
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(hintBtn);
      actions.appendChild(retryBtn);

      shell.appendChild(routeCards);
      shell.appendChild(hintBox);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const card = document.createElement('div');
      card.style.cssText = 'padding:22px; text-align:center; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#e0f2fe); border:4px solid #22c55e;';
      card.innerHTML = `
        <div style="font-size:4rem; margin-bottom:8px;">✅</div>
        <div style="font-size:1.7rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Route Approved</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(card);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.style.cssText = 'margin-top:12px; align-self:center;';
      restartBtn.textContent = '🔄 Restart Route';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderStoryDetectiveStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    if (step.type === 'start') {
      const card = document.createElement('div');
      card.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#f3e8ff,#dbeafe); border:4px solid #a78bfa;';
      card.innerHTML = `
        <div style="font-size:2.3rem; margin-bottom:8px;">📚</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Case File</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.6;">${step.intro}</div>
      `;
      shell.appendChild(card);

      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.style.cssText = 'align-self:center; padding:12px 20px;';
      startBtn.textContent = '🕵️ Start Investigation';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      shell.appendChild(startBtn);
    } else if (step.type === 'challenge') {
      const evidence = document.createElement('div');
      evidence.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';
      const clueSet = [
        { label: 'Bell rings', detail: 'The class heard the bell.', emoji: '🔔' },
        { label: 'Muddy shoes', detail: 'A trail was left near the shelf.', emoji: '👟' },
        { label: 'Shelf check', detail: 'The final evidence was near the book cart.', emoji: '📚' }
      ];

      clueSet.forEach(item => {
        const clue = document.createElement('div');
        clue.style.cssText = 'padding:18px 12px; border-radius:18px; background:#ffffff; border:3px solid #cbd5e1; text-align:center;';
        clue.innerHTML = `<div style="font-size:2.5rem; margin-bottom:8px;">${item.emoji}</div><div style="font-size:1.02rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${item.label}</div><div style="font-size:0.9rem; color:#475569;">${item.detail}</div>`;
        evidence.appendChild(clue);
      });

      const optionsWrap = document.createElement('div');
      optionsWrap.style.cssText = 'display:grid; gap:12px;';
      const choices = [
        { label: 'Bell rings → muddy shoes → shelf check', isCorrect: true },
        { label: 'Shelf check → muddy shoes → bell rings', isCorrect: false },
        { label: 'Bell rings → lunch break → game court', isCorrect: false }
      ];

      choices.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:16px 18px; border-radius:18px; text-align:left;';
        btn.innerHTML = `<div style="font-size:1.05rem; font-weight:800; color:#0f172a;">${option.label}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            btn.style.transform = 'scale(1.02)';
            audioManager.speak('Excellent detective work!');
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        optionsWrap.appendChild(btn);
      });

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const hintBtn = document.createElement('button');
      hintBtn.className = 'nav-btn';
      hintBtn.textContent = '💡 Hint';
      hintBtn.onclick = () => {
        audioManager.speak(step.hint);
      };
      const resetBtn = document.createElement('button');
      resetBtn.className = 'nav-btn';
      resetBtn.textContent = '🔄 Try Again';
      resetBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(hintBtn);
      actions.appendChild(resetBtn);

      shell.appendChild(evidence);
      shell.appendChild(optionsWrap);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const card = document.createElement('div');
      card.style.cssText = 'padding:22px; text-align:center; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#e0f2fe); border:4px solid #22c55e;';
      card.innerHTML = `
        <div style="font-size:4rem; margin-bottom:8px;">🎉</div>
        <div style="font-size:1.7rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Case Solved</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(card);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.style.cssText = 'align-self:center; margin-top:12px;';
      restartBtn.textContent = '🔄 Restart Case';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderEcoRescueStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    if (step.type === 'start') {
      const card = document.createElement('div');
      card.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #16a34a;';
      card.innerHTML = `
        <div style="font-size:2.3rem; margin-bottom:8px;">🌿</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Eco Rescue Mission</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.6;">${step.intro}</div>
      `;
      shell.appendChild(card);
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.style.cssText = 'align-self:center; padding:12px 20px;';
      startBtn.textContent = '🌍 Start Rescue';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      shell.appendChild(startBtn);
    } else if (step.type === 'challenge') {
      const options = [
        { label: 'Use rainwater wisely and plant more trees', isCorrect: true },
        { label: 'Throw more plastic into the valley', isCorrect: false },
        { label: 'Leave taps on all day', isCorrect: false }
      ];

      const optionsWrap = document.createElement('div');
      optionsWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px;';
      options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 16px; border-radius:20px;';
        btn.innerHTML = `<div style="font-size:1.1rem; font-weight:800; color:#0f172a;">${option.label}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            btn.style.transform = 'scale(1.04)';
            audioManager.speak('Great choice! The habitat is safer now.');
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        optionsWrap.appendChild(btn);
      });

      const hintBox = document.createElement('div');
      hintBox.style.cssText = 'padding:12px 14px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;';
      hintBox.textContent = 'Hint: the strongest rescue plan reduces waste and saves clean resources.';

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const hintBtn = document.createElement('button');
      hintBtn.className = 'nav-btn';
      hintBtn.textContent = '💡 Hint';
      hintBtn.onclick = () => {
        audioManager.speak(step.hint);
        hintBox.textContent = step.hint;
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(hintBtn);
      actions.appendChild(retryBtn);

      shell.appendChild(optionsWrap);
      shell.appendChild(hintBox);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const card = document.createElement('div');
      card.style.cssText = 'padding:22px; text-align:center; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e;';
      card.innerHTML = `
        <div style="font-size:4rem; margin-bottom:8px;">🌟</div>
        <div style="font-size:1.7rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Habitat Saved</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(card);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.style.cssText = 'align-self:center; margin-top:12px;';
      restartBtn.textContent = '🔄 Restart Mission';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderInventorChallengeStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    if (step.type === 'start') {
      const card = document.createElement('div');
      card.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#fef9c3,#e0f2fe); border:4px solid #fbbf24;';
      card.innerHTML = `
        <div style="font-size:2.3rem; margin-bottom:8px;">💡</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Inventor Brief</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.6;">${step.intro}</div>
      `;
      shell.appendChild(card);
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.style.cssText = 'align-self:center; padding:12px 20px;';
      startBtn.textContent = '🛠️ Start Build';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };
      shell.appendChild(startBtn);
    } else if (step.type === 'challenge') {
      const options = [
        { label: 'Sensor + tank valve + solar panel', isCorrect: true },
        { label: 'Fan + chalk + stone block', isCorrect: false },
        { label: 'Large bucket + one switch only', isCorrect: false }
      ];

      const optionsWrap = document.createElement('div');
      optionsWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px;';
      options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 16px; border-radius:20px;';
        btn.innerHTML = `<div style="font-size:1.1rem; font-weight:800; color:#0f172a;">${option.label}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            btn.style.transform = 'scale(1.04)';
            audioManager.speak('Excellent design! It balances function and efficiency.');
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 900);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            audioManager.speak(step.hint);
          }
        };
        optionsWrap.appendChild(btn);
      });

      const hintBox = document.createElement('div');
      hintBox.style.cssText = 'padding:12px 14px; border-radius:14px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;';
      hintBox.textContent = 'Hint: think about a system that senses dryness and releases water efficiently.';

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const hintBtn = document.createElement('button');
      hintBtn.className = 'nav-btn';
      hintBtn.textContent = '💡 Hint';
      hintBtn.onclick = () => {
        audioManager.speak(step.hint);
        hintBox.textContent = step.hint;
      };
      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        this.currentStepIndex = 1;
        this.renderCurrentStep();
      };
      actions.appendChild(hintBtn);
      actions.appendChild(retryBtn);

      shell.appendChild(optionsWrap);
      shell.appendChild(hintBox);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const card = document.createElement('div');
      card.style.cssText = 'padding:22px; text-align:center; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e;';
      card.innerHTML = `
        <div style="font-size:4rem; margin-bottom:8px;">🏆</div>
        <div style="font-size:1.7rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Prototype Works</div>
        <div style="font-size:1.05rem; line-height:1.7; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(card);
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.style.cssText = 'align-self:center; margin-top:12px;';
      restartBtn.textContent = '🔄 Restart Build';
      restartBtn.onclick = () => {
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      shell.appendChild(restartBtn);
    }

    container.appendChild(shell);
  },

  renderColorHuntGame(container, step) {
    container.innerHTML = '';

    const skyStage = document.createElement('div');
    skyStage.style.position = 'relative';
    skyStage.style.width = '100%';
    skyStage.style.maxWidth = '850px';
    skyStage.style.height = '320px';
    skyStage.style.margin = '0 auto';
    skyStage.style.borderRadius = '28px';
    skyStage.style.background = 'linear-gradient(180deg, #bae6fd 0%, #e0f2fe 70%, #f0fdf4 100%)';
    skyStage.style.border = '5px solid #ffffff';
    skyStage.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    skyStage.style.overflow = 'hidden';
    skyStage.style.display = 'flex';
    skyStage.style.alignItems = 'center';
    skyStage.style.justifyContent = 'space-around';

    step.options.forEach((item, index) => {
      const balloon = document.createElement('div');
      balloon.style.width = '160px';
      balloon.style.height = '185px';
      balloon.style.borderRadius = '24px';
      balloon.style.background = '#ffffff';
      balloon.style.border = '5px solid #38bdf8';
      balloon.style.boxShadow = '0 12px 25px rgba(0,0,0,0.1)';
      balloon.style.cursor = 'pointer';
      balloon.style.display = 'flex';
      balloon.style.flexDirection = 'column';
      balloon.style.alignItems = 'center';
      balloon.style.justifyContent = 'center';
      balloon.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';

      balloon.innerHTML = `
        <div style="font-size: 5rem; pointer-events:none; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));">${item.emoji}</div>
        <div style="font-size: 1.3rem; font-weight: 800; color: #1e293b; margin-top: 6px; pointer-events:none;">${item.label}</div>
      `;

      balloon.addEventListener('click', () => {
        if (item.isCorrect) {
          audioManager.playSuccessFanfare();
          ConfettiEngine.fire();
          app.addStar();
          balloon.style.transform = 'scale(1.25) rotate(10deg)';
          balloon.style.borderColor = '#22c55e';

          setTimeout(() => {
            this.currentStepIndex++;
            this.renderCurrentStep();
          }, 1000);
        } else {
          audioManager.playPop();
          balloon.style.animation = 'shake 0.4s';
          setTimeout(() => { balloon.style.animation = ''; }, 400);
          audioManager.speak('Try again!');
        }
      });

      skyStage.appendChild(balloon);
    });

    container.appendChild(skyStage);
  },

  renderShapeFunGame(container, step) {
    container.innerHTML = '';

    const playground = document.createElement('div');
    playground.style.position = 'relative';
    playground.style.width = '100%';
    playground.style.maxWidth = '850px';
    playground.style.height = '320px';
    playground.style.margin = '0 auto';
    playground.style.borderRadius = '28px';
    playground.style.background = 'linear-gradient(180deg, #fef08a 0%, #fef9c3 60%, #ecfccb 100%)';
    playground.style.border = '5px solid #ffffff';
    playground.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
    playground.style.display = 'flex';
    playground.style.alignItems = 'center';
    playground.style.justifyContent = 'space-around';

    step.options.forEach((item) => {
      const shapeCard = document.createElement('div');
      shapeCard.style.width = '160px';
      shapeCard.style.height = '185px';
      shapeCard.style.borderRadius = '24px';
      shapeCard.style.background = '#ffffff';
      shapeCard.style.border = '5px solid #fde047';
      shapeCard.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      shapeCard.style.cursor = 'pointer';
      shapeCard.style.display = 'flex';
      shapeCard.style.flexDirection = 'column';
      shapeCard.style.alignItems = 'center';
      shapeCard.style.justifyContent = 'center';
      shapeCard.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';

      shapeCard.innerHTML = `
        <div style="font-size: 5rem; pointer-events:none;">${item.emoji}</div>
        <div style="font-size: 1.3rem; font-weight: 800; color: #1e293b; margin-top: 6px; pointer-events:none;">${item.label}</div>
      `;

      shapeCard.addEventListener('click', () => {
        if (item.isCorrect) {
          audioManager.playSuccessFanfare();
          ConfettiEngine.fire();
          app.addStar();
          shapeCard.style.transform = 'scale(1.25) rotate(360deg)';
          shapeCard.style.borderColor = '#22c55e';

          setTimeout(() => {
            this.currentStepIndex++;
            this.renderCurrentStep();
          }, 1000);
        } else {
          audioManager.playPop();
          shapeCard.style.animation = 'shake 0.4s';
          setTimeout(() => { shapeCard.style.animation = ''; }, 400);
          audioManager.speak('Try again!');
        }
      });

      playground.appendChild(shapeCard);
    });

    container.appendChild(playground);
  },

  renderMatchPairGame(container, step) {
    container.innerHTML = '';

    const board = document.createElement('div');
    board.style.width = '100%';
    board.style.maxWidth = '850px';
    board.style.height = '320px';
    board.style.margin = '0 auto';
    board.style.borderRadius = '28px';
    board.style.background = 'linear-gradient(180deg, #fbcfe8 0%, #fce7f3 100%)';
    board.style.border = '5px solid #ffffff';
    board.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
    board.style.display = 'flex';
    board.style.alignItems = 'center';
    board.style.justifyContent = 'space-around';

    step.options.forEach((item) => {
      const card = document.createElement('div');
      card.style.width = '160px';
      card.style.height = '185px';
      card.style.borderRadius = '24px';
      card.style.background = '#ffffff';
      card.style.border = '5px solid #f472b6';
      card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      card.style.cursor = 'pointer';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.style.justifyContent = 'center';
      card.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';

      card.innerHTML = `
        <div style="font-size: 5rem; pointer-events:none;">${item.emoji}</div>
        <div style="font-size: 1.3rem; font-weight: 800; color: #1e293b; margin-top: 6px; pointer-events:none;">${item.label}</div>
      `;

      card.addEventListener('click', () => {
        if (item.isCorrect) {
          audioManager.playSuccessFanfare();
          ConfettiEngine.fire();
          app.addStar();
          card.style.transform = 'scale(1.25)';
          card.style.borderColor = '#22c55e';

          setTimeout(() => {
            this.currentStepIndex++;
            this.renderCurrentStep();
          }, 1000);
        } else {
          audioManager.playPop();
          card.style.animation = 'shake 0.4s';
          setTimeout(() => { card.style.animation = ''; }, 400);
          audioManager.speak('Try again!');
        }
      });

      board.appendChild(card);
    });

    container.appendChild(board);
  },

  renderFindFriendGame(container, step) {
    container.innerHTML = '';

    const forestScene = document.createElement('div');
    forestScene.style.position = 'relative';
    forestScene.style.width = '100%';
    forestScene.style.maxWidth = '850px';
    forestScene.style.height = '320px';
    forestScene.style.margin = '0 auto';
    forestScene.style.borderRadius = '28px';
    forestScene.style.background = 'linear-gradient(180deg, #bbf7d0 0%, #dcfce7 60%, #86efac 100%)';
    forestScene.style.border = '5px solid #ffffff';
    forestScene.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
    forestScene.style.display = 'flex';
    forestScene.style.alignItems = 'center';
    forestScene.style.justifyContent = 'space-around';

    step.options.forEach((item) => {
      const friendCard = document.createElement('div');
      friendCard.style.width = '160px';
      friendCard.style.height = '185px';
      friendCard.style.borderRadius = '24px';
      friendCard.style.background = '#ffffff';
      friendCard.style.border = '5px solid #4ade80';
      friendCard.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      friendCard.style.cursor = 'pointer';
      friendCard.style.display = 'flex';
      friendCard.style.flexDirection = 'column';
      friendCard.style.alignItems = 'center';
      friendCard.style.justifyContent = 'center';
      friendCard.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';

      friendCard.innerHTML = `
        <div style="font-size: 5rem; pointer-events:none;">${item.emoji}</div>
        <div style="font-size: 1.3rem; font-weight: 800; color: #1e293b; margin-top: 6px; pointer-events:none;">${item.label}</div>
      `;

      friendCard.addEventListener('click', () => {
        if (item.isCorrect) {
          audioManager.playSuccessFanfare();
          ConfettiEngine.fire();
          app.addStar();
          friendCard.style.transform = 'scale(1.25) translateY(-10px)';
          friendCard.style.borderColor = '#22c55e';

          setTimeout(() => {
            this.currentStepIndex++;
            this.renderCurrentStep();
          }, 1000);
        } else {
          audioManager.playPop();
          friendCard.style.animation = 'shake 0.4s';
          setTimeout(() => { friendCard.style.animation = ''; }, 400);
          audioManager.speak('Try again!');
        }
      });

      forestScene.appendChild(friendCard);
    });

    container.appendChild(forestScene);
  },

  renderLittleExplorerGame(container, step) {
    container.innerHTML = '';

    const skyMap = document.createElement('div');
    skyMap.style.position = 'relative';
    skyMap.style.width = '100%';
    skyMap.style.maxWidth = '850px';
    skyMap.style.height = '320px';
    skyMap.style.margin = '0 auto';
    skyMap.style.borderRadius = '28px';
    skyMap.style.background = 'linear-gradient(180deg, #c084fc 0%, #e9d5ff 60%, #f5d0fe 100%)';
    skyMap.style.border = '5px solid #ffffff';
    skyMap.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
    skyMap.style.display = 'flex';
    skyMap.style.alignItems = 'center';
    skyMap.style.justifyContent = 'space-around';

    step.options.forEach((item) => {
      const itemCard = document.createElement('div');
      itemCard.style.width = '160px';
      itemCard.style.height = '185px';
      itemCard.style.borderRadius = '24px';
      itemCard.style.background = '#ffffff';
      itemCard.style.border = '5px solid #c084fc';
      itemCard.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      itemCard.style.cursor = 'pointer';
      itemCard.style.display = 'flex';
      itemCard.style.flexDirection = 'column';
      itemCard.style.alignItems = 'center';
      itemCard.style.justifyContent = 'center';
      itemCard.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';

      itemCard.innerHTML = `
        <div style="font-size: 5rem; pointer-events:none;">${item.emoji}</div>
        <div style="font-size: 1.3rem; font-weight: 800; color: #1e293b; margin-top: 6px; pointer-events:none;">${item.label}</div>
      `;

      itemCard.addEventListener('click', () => {
        if (item.isCorrect) {
          audioManager.playSuccessFanfare();
          ConfettiEngine.fire();
          app.addStar();
          itemCard.style.transform = 'scale(1.25) rotate(-10deg)';
          itemCard.style.borderColor = '#22c55e';

          setTimeout(() => {
            this.currentStepIndex++;
            this.renderCurrentStep();
          }, 1000);
        } else {
          audioManager.playPop();
          itemCard.style.animation = 'shake 0.4s';
          setTimeout(() => { itemCard.style.animation = ''; }, 400);
          audioManager.speak('Try again!');
        }
      });

      skyMap.appendChild(itemCard);
    });

    container.appendChild(skyMap);
  },

  renderCellExplorerStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#ecfeff; border:2px solid #67e8f9; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#ecfeff,#dbeafe); border:4px solid #06b6d4;';
      intro.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">🧬</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Cell Explorer Mission</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Goal: ${step.objective}</div>
      `;
      shell.appendChild(intro);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = step.hints[hintIndex % step.hints.length];
        hintIndex += 1;
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;';
        note.textContent = clue;
        shell.appendChild(note);
        audioManager.speak(clue);
      };
      actions.appendChild(startBtn);
      actions.appendChild(helpBtn);
      shell.appendChild(actions);
      container.appendChild(shell);
      return;
    }

    const panel = document.createElement('div');
    panel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    panel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
    shell.appendChild(panel);

    const cellView = document.createElement('div');
    cellView.style.cssText = 'position:relative; width:100%; max-width:680px; height:240px; margin:12px auto; border-radius:28px; background:radial-gradient(circle at 50% 30%, #e0f2fe 0%, #bae6fd 25%, #f0fdf4 100%); border:5px solid #6ee7b7; box-shadow:0 20px 35px rgba(15,23,42,0.10);';
    const nucleus = document.createElement('div');
    nucleus.style.cssText = 'position:absolute; left:50%; top:42%; width:88px; height:88px; transform:translate(-50%, -50%); border-radius:50%; background:radial-gradient(circle,#fef3c7,#f59e0b); border:5px solid #b45309; display:flex; align-items:center; justify-content:center; font-weight:900; color:#7c2d12;';
    nucleus.textContent = 'Nucleus';
    cellView.appendChild(nucleus);
    const chloroplast = document.createElement('div');
    chloroplast.style.cssText = 'position:absolute; left:22%; top:18%; width:72px; height:72px; border-radius:50%; background:radial-gradient(circle,#bbf7d0,#22c55e); border:4px solid #166534; display:flex; align-items:center; justify-content:center; font-weight:900; color:#14532d;';
    chloroplast.textContent = 'Chl';
    const mitochondria = document.createElement('div');
    mitochondria.style.cssText = 'position:absolute; right:18%; top:28%; width:84px; height:64px; border-radius:18px; background:linear-gradient(135deg,#fca5a5,#ef4444); border:4px solid #991b1b; display:flex; align-items:center; justify-content:center; font-weight:900; color:#7f1d1d;';
    mitochondria.textContent = 'Mito';
    const vacuole = document.createElement('div');
    vacuole.style.cssText = 'position:absolute; right:28%; bottom:18%; width:96px; height:96px; border-radius:50%; background:radial-gradient(circle,#dbeafe,#60a5fa); border:4px solid #1d4ed8; display:flex; align-items:center; justify-content:center; font-weight:900; color:#1e3a8a;';
    vacuole.textContent = 'Vacuole';
    cellView.appendChild(chloroplast); cellView.appendChild(mitochondria); cellView.appendChild(vacuole);
    shell.appendChild(cellView);

    const choicesWrap = document.createElement('div');
    choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'interactive-item';
      btn.style.cssText = 'padding:18px 16px; border-radius:20px; min-height:120px; text-align:left;';
      btn.innerHTML = `<div style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${option.label}</div><div style="font-size:0.9rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => {
        if (option.isCorrect) {
          audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar();
          btn.style.borderColor = '#22c55e'; btn.style.transform = 'scale(1.04)';
          setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900);
        } else {
          audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s';
          setTimeout(() => { btn.style.animation = ''; }, 400);
        }
      };
      choicesWrap.appendChild(btn);
    });
    shell.appendChild(choicesWrap);

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button');
    helpBtn.className = 'nav-btn';
    helpBtn.textContent = '💡 Help';
    helpBtn.onclick = () => {
      const clue = step.hints[hintIndex % step.hints.length];
      hintIndex += 1; audioManager.speak(clue);
      const note = document.createElement('div');
      note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;';
      note.textContent = clue; shell.appendChild(note);
    };
    const retryBtn = document.createElement('button');
    retryBtn.className = 'nav-btn';
    retryBtn.textContent = '🔄 Try Again';
    retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); shell.appendChild(actions);
    container.appendChild(shell);
  },

  renderReactionLabStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fef3c7; border:2px solid #fbbf24; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#fef3c7,#fed7aa); border:4px solid #f59e0b;';
      intro.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">⚗️</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Reaction Lab</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Goal: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions);
      container.appendChild(shell); return;
    }

    if (step.type === 'mix') {
      const mixPanel = document.createElement('div');
      mixPanel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
      mixPanel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
      const beaker = document.createElement('div');
      beaker.style.cssText = 'width:100%; max-width:420px; height:170px; margin:12px auto 18px auto; border-radius:28px; background:linear-gradient(180deg,#dbeafe,#f8fafc); border:4px dashed #60a5fa; display:flex; align-items:center; justify-content:center; font-size:3rem;';
      beaker.textContent = '🧪';
      mixPanel.appendChild(beaker);

      const itemWrap = document.createElement('div');
      itemWrap.style.cssText = 'display:flex; gap:14px; flex-wrap:wrap; justify-content:center;';
      let hintIndex = 0;
      step.items.forEach(item => {
        const option = document.createElement('div');
        option.draggable = true; option.className = 'interactive-item';
        option.style.cssText = 'padding:18px 16px; min-width:140px; border-radius:18px;';
        option.innerHTML = `<div style="font-size:1.35rem; font-weight:800;">${item.label}</div>`;
        option.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', item.val); audioManager.playClick(); });
        option.addEventListener('click', () => {
          if (item.val === step.targetValue) {
            audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar();
            beaker.textContent = item.result; beaker.style.fontSize = '2.6rem';
            setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900);
          } else {
            audioManager.playPop(); option.style.borderColor = '#ef4444'; option.style.animation = 'shake 0.4s'; setTimeout(() => { option.style.animation = ''; }, 400);
          }
        });
        itemWrap.appendChild(option);
      });

      beaker.addEventListener('dragover', (e) => { e.preventDefault(); beaker.style.borderColor = '#22c55e'; });
      beaker.addEventListener('dragleave', () => { beaker.style.borderColor = '#60a5fa'; });
      beaker.addEventListener('drop', (e) => {
        e.preventDefault(); const val = e.dataTransfer.getData('text/plain');
        if (val === step.targetValue) {
          audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar();
          beaker.textContent = step.result; beaker.style.fontSize = '2.6rem';
          setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900);
        } else {
          audioManager.playPop(); beaker.style.borderColor = '#ef4444'; setTimeout(() => { beaker.style.borderColor = '#60a5fa'; }, 500);
        }
      });

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
      actions.appendChild(helpBtn); actions.appendChild(retryBtn); shell.appendChild(mixPanel); shell.appendChild(itemWrap); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const finalPanel = document.createElement('div');
    finalPanel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    finalPanel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
    const choicesWrap = document.createElement('div');
    choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:14px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:20px;';
      btn.innerHTML = `<div style="font-size:1.1rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.9rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => { if (option.isCorrect) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e'; btn.style.transform = 'scale(1.04)'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400); } };
      choicesWrap.appendChild(btn);
    });
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button');
    helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
    helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); shell.appendChild(finalPanel); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderDataDetectiveStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#e0f2fe; border:2px solid #38bdf8; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#e0f2fe,#dbeafe); border:4px solid #38bdf8;';
      intro.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">📊</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Data Detective Mission</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Goal: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const panel = document.createElement('div');
    panel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    panel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
    shell.appendChild(panel);

    const chartWrap = document.createElement('div');
    chartWrap.style.cssText = 'display:flex; align-items:flex-end; justify-content:space-around; gap:14px; min-height:180px; padding:16px; background:linear-gradient(180deg,#f8fafc,#dbeafe); border-radius:24px; border:3px solid #cbd5e1;';
    step.data.forEach((value, i) => {
      const barWrap = document.createElement('div');
      barWrap.style.cssText = 'display:flex; flex-direction:column; align-items:center; gap:8px;';
      const bar = document.createElement('button');
      bar.className = 'interactive-item';
      bar.style.cssText = `width:65px; height:${value * 24 + 40}px; border-radius:16px 16px 10px 10px; background:linear-gradient(180deg,#38bdf8,#2563eb); display:flex; align-items:flex-end; justify-content:center; color:white; font-weight:800;`; bar.textContent = value; bar.onclick = () => { if (i === step.correctIndex) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); bar.style.transform = 'scale(1.08)'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); bar.style.borderColor = '#ef4444'; bar.style.animation = 'shake 0.4s'; setTimeout(() => { bar.style.animation = ''; }, 400); } };
      const label = document.createElement('div'); label.textContent = step.labels[i]; label.style.cssText = 'font-weight:700; color:#334155; font-size:0.8rem;';
      barWrap.appendChild(bar); barWrap.appendChild(label); chartWrap.appendChild(barWrap);
    });
    shell.appendChild(chartWrap);

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    let hintIndex = 0;
    const helpBtn = document.createElement('button');
    helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
    helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); shell.appendChild(actions); container.appendChild(shell);
  },

  renderEarthSystemExplorerStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#dcfce7; border:2px solid #22c55e; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#e0f2fe); border:4px solid #22c55e;';
      intro.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">🌍</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Earth System Explorer</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Goal: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); }; 
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const globe = document.createElement('div');
    globe.style.cssText = 'position:relative; width:100%; max-width:680px; height:250px; margin:0 auto; border-radius:50%; background:radial-gradient(circle at 35% 35%, #93c5fd 0%, #2563eb 30%, #0f172a 100%); border:6px solid #e2e8f0; box-shadow:0 18px 30px rgba(15,23,42,0.18);';
    const layer = document.createElement('div');
    layer.style.cssText = 'position:absolute; inset:16%; border-radius:50%; border:4px dashed #e2e8f0;';
    globe.appendChild(layer);
    const dot = document.createElement('button');
    dot.style.cssText = 'position:absolute; left:52%; top:34%; width:18px; height:18px; border-radius:50%; background:#fef08a; border:3px solid #ffffff;';
    dot.onclick = () => { if (step.correct === 'atmosphere') { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); dot.style.transform = 'scale(1.3)'; setTimeout(() => { dot.style.transform = 'scale(1)'; }, 400); } };
    globe.appendChild(dot);
    shell.appendChild(globe);

    const choicesWrap = document.createElement('div');
    choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(170px,1fr)); gap:12px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:18px;';
      btn.innerHTML = `<div style="font-size:1.1rem; font-weight:800;">${option.label}</div><div style="font-size:0.9rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => { if (option.isCorrect) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400); } };
      choicesWrap.appendChild(btn);
    });
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button');
    helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
    helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderTimeVaultStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#f5d0fe; border:2px solid #c084fc; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#f5d0fe,#ddd6fe); border:4px solid #c084fc;';
      intro.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">🏛️</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Time Vault Mission</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Goal: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const timeline = document.createElement('div');
    timeline.style.cssText = 'display:flex; gap:12px; flex-wrap:wrap; justify-content:center;';
    const items = [...step.events];
    const order = items.slice().sort(() => Math.random() - 0.5);
    order.forEach(event => {
      const chip = document.createElement('div');
      chip.className = 'interactive-item'; chip.draggable = true; chip.style.cssText = 'padding:14px 18px; min-width:180px; border-radius:18px;';
      chip.textContent = event; chip.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', event); audioManager.playClick(); });
      chip.addEventListener('click', () => {
        if (event === step.answer) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); chip.style.borderColor = '#ef4444'; chip.style.animation = 'shake 0.4s'; setTimeout(() => { chip.style.animation = ''; }, 400); }
      });
      timeline.appendChild(chip);
    });

    const vault = document.createElement('div');
    vault.style.cssText = 'padding:18px; border-radius:24px; background:#f8fafc; border:3px dashed #c084fc; min-height:110px; display:flex; align-items:center; justify-content:center; font-weight:800; color:#4c1d95;';
    vault.textContent = 'Evidence Vault';
    vault.addEventListener('dragover', (e) => { e.preventDefault(); vault.style.borderColor = '#22c55e'; });
    vault.addEventListener('dragleave', () => { vault.style.borderColor = '#c084fc'; });
    vault.addEventListener('drop', (e) => {
      e.preventDefault(); const saved = e.dataTransfer.getData('text/plain');
      if (saved === step.answer) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); vault.textContent = 'Correct clue linked!'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); vault.style.borderColor = '#ef4444'; setTimeout(() => { vault.style.borderColor = '#c084fc'; }, 500); }
    });

    shell.appendChild(timeline); shell.appendChild(vault);

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    let hintIndex = 0;
    const helpBtn = document.createElement('button');
    helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
    helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); shell.appendChild(actions); container.appendChild(shell);
  },

  renderDecisionLabStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:900px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#d1fae5; border:2px solid #10b981; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#d1fae5,#ecfeff); border:4px solid #10b981;';
      intro.innerHTML = `
        <div style="font-size:2.4rem; margin-bottom:8px;">🧠</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Decision Lab Mission</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Goal: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Mission';
      startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const panel = document.createElement('div');
    panel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    panel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
    shell.appendChild(panel);

    const choicesWrap = document.createElement('div');
    choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(170px,1fr)); gap:12px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:18px;';
      btn.innerHTML = `<div style="font-size:1.1rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.9rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => { if (option.isCorrect) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400); } };
      choicesWrap.appendChild(btn);
    });
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button');
    helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help';
    helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderLifeSystemsInvestigationStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#ecfeff; border:2px solid #22d3ee; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#ecfeff,#f0fdf4); border:4px solid #06b6d4;';
      intro.innerHTML = `
        <div style="font-size:2.3rem; margin-bottom:8px;">🧬</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Life Systems Investigation</div>
        <div style="font-size:1.02rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
        <div style="margin-top:14px; display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:10px;">
          <div style="padding:10px 12px; border-radius:14px; background:#dbeafe; font-weight:700; color:#0f172a;">Cell → tissue → organ</div>
          <div style="padding:10px 12px; border-radius:14px; background:#dcfce7; font-weight:700; color:#0f172a;">Systems work together</div>
          <div style="padding:10px 12px; border-radius:14px; background:#fef3c7; font-weight:700; color:#0f172a;">Evidence-based thinking</div>
        </div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button'); startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Activity'; startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:12px 16px; border-radius:18px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const bodyPanel = document.createElement('div');
    bodyPanel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    bodyPanel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;

    const diagram = document.createElement('div');
    diagram.style.cssText = 'position:relative; width:100%; max-width:560px; height:300px; margin:10px auto 18px; border-radius:26px; background:linear-gradient(180deg,#e0f2fe,#dbeafe); border:4px solid #7dd3fc;';

    const torso = document.createElement('div');
    torso.style.cssText = 'position:absolute; left:50%; top:28%; width:160px; height:160px; transform:translateX(-50%); border-radius:30% 30% 28% 28%; background:linear-gradient(135deg,#f9a8d4,#fbcfe8); border:5px solid #be185d;';
    diagram.appendChild(torso);

    const head = document.createElement('div'); head.style.cssText = 'position:absolute; left:50%; top:6%; width:90px; height:90px; transform:translateX(-50%); border-radius:50%; background:linear-gradient(135deg,#fcd7aa,#fdba74); border:5px solid #c2410c;'; diagram.appendChild(head);
    const lungs = document.createElement('div'); lungs.style.cssText = 'position:absolute; left:35%; top:42%; width:52px; height:60px; border-radius:16px; background:#60a5fa; border:4px solid #1d4ed8; display:flex; align-items:center; justify-content:center; color:#fff; font-size:0.8rem; font-weight:800;'; lungs.textContent = 'Lungs'; diagram.appendChild(lungs);
    const lungs2 = document.createElement('div'); lungs2.style.cssText = 'position:absolute; right:35%; top:42%; width:52px; height:60px; border-radius:16px; background:#60a5fa; border:4px solid #1d4ed8; display:flex; align-items:center; justify-content:center; color:#fff; font-size:0.8rem; font-weight:800;'; lungs2.textContent = 'Lungs'; diagram.appendChild(lungs2);
    const heart = document.createElement('div'); heart.style.cssText = 'position:absolute; left:50%; top:44%; width:54px; height:54px; transform:translateX(-50%); border-radius:50%; background:#ef4444; border:4px solid #7f1d1d; display:flex; align-items:center; justify-content:center; color:#fff; font-size:0.8rem; font-weight:800;'; heart.textContent = 'Heart'; diagram.appendChild(heart);
    const stomach = document.createElement('div'); stomach.style.cssText = 'position:absolute; left:50%; top:58%; width:68px; height:62px; transform:translateX(-50%); border-radius:18px; background:#fbbf24; border:4px solid #b45309; display:flex; align-items:center; justify-content:center; color:#fff; font-size:0.8rem; font-weight:800;'; stomach.textContent = 'Stomach'; diagram.appendChild(stomach);

    const labels = document.createElement('div');
    labels.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    ['Heart', 'Lungs', 'Stomach', 'Brain'].forEach(label => {
      const chip = document.createElement('button'); chip.className = 'nav-btn'; chip.textContent = label; chip.style.padding = '8px 12px'; chip.onclick = () => { audioManager.playClick(); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:10px 12px; border-radius:12px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = `${label} is part of the body system that helps maintain life and function.`; bodyPanel.appendChild(note); };
      labels.appendChild(chip);
    });

    bodyPanel.appendChild(diagram); bodyPanel.appendChild(labels);
    shell.appendChild(bodyPanel);

    const choicesWrap = document.createElement('div');
    choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(170px,1fr)); gap:12px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button'); btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:18px;'; btn.innerHTML = `<div style="font-size:1.05rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.85rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => {
        if (option.isCorrect) {
          audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e';
          setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900);
        } else {
          audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400);
        }
      };
      choicesWrap.appendChild(btn);
    });

    const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    const restartBtn = document.createElement('button'); restartBtn.className = 'nav-btn'; restartBtn.textContent = '🔁 Restart'; restartBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex = 0; this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); actions.appendChild(restartBtn); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderChemistryMysteryLabStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#f5f3ff; border:2px solid #a78bfa; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#f5f3ff,#eff6ff); border:4px solid #8b5cf6;';
      intro.innerHTML = `
        <div style="font-size:2.2rem; margin-bottom:8px;">⚗️</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Chemistry Mystery Lab</div>
        <div style="font-size:1.02rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button'); startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Experiment'; startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const labPanel = document.createElement('div');
    labPanel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    labPanel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;

    const beakers = document.createElement('div');
    beakers.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(130px,1fr)); gap:12px; margin-top:12px;';
    ['A', 'B', 'C', 'D'].forEach((label, idx) => {
      const beaker = document.createElement('button');
      beaker.className = 'interactive-item'; beaker.style.cssText = 'padding:18px; border-radius:18px; min-height:120px;';
      beaker.innerHTML = `<div style="font-size:2.7rem;">${['🧪','🧴','🧫','🧬'][idx]}</div><div style="font-weight:800; margin-top:8px;">Sample ${label}</div>`;
      beaker.onclick = () => {
        const result = label === 'B' ? 'turns cloudy and the temperature rises' : label === 'C' ? 'changes colour and produces gas' : label === 'A' ? 'stays mostly unchanged' : 'forms a precipitate';
        audioManager.playClick();
        const obs = document.createElement('div'); obs.style.cssText = 'margin-top:12px; padding:12px 14px; border-radius:14px; background:#ecfeff; color:#0f172a; font-weight:700;'; obs.textContent = `Observation: Sample ${label} ${result}.`; labPanel.appendChild(obs);
      };
      beakers.appendChild(beaker);
    });
    labPanel.appendChild(beakers);
    shell.appendChild(labPanel);

    const choicesWrap = document.createElement('div'); choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button'); btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:18px;'; btn.innerHTML = `<div style="font-size:1.05rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.85rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => {
        if (option.isCorrect) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400); }
      };
      choicesWrap.appendChild(btn);
    });
    const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    const restartBtn = document.createElement('button'); restartBtn.className = 'nav-btn'; restartBtn.textContent = '🔁 Restart'; restartBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex = 0; this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); actions.appendChild(restartBtn); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderPhysicsSimulationLabStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#dbeafe; border:2px solid #60a5fa; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#dbeafe,#e0f2fe); border:4px solid #2563eb;';
      intro.innerHTML = `
        <div style="font-size:2.2rem; margin-bottom:8px;">⚡</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Physics Simulation Lab</div>
        <div style="font-size:1.02rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button'); startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Lab'; startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const simPanel = document.createElement('div');
    simPanel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    simPanel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
    const track = document.createElement('div');
    track.style.cssText = 'position:relative; height:140px; border-radius:22px; background:linear-gradient(180deg,#eff6ff,#dbeafe); border:4px dashed #60a5fa; overflow:hidden;';
    const cart = document.createElement('div'); cart.style.cssText = 'position:absolute; left:20px; bottom:18px; width:80px; height:48px; border-radius:16px; background:linear-gradient(135deg,#93c5fd,#2563eb); box-shadow:0 10px 18px rgba(37,99,235,0.25); transition:left 0.4s ease;'; cart.innerHTML = '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:white; font-weight:900;">🚗</div>';
    const valueBox = document.createElement('div'); valueBox.style.cssText = 'margin-top:12px; font-weight:800; color:#0f172a;'; valueBox.textContent = 'Force: 20 N';
    const slider = document.createElement('input'); slider.type = 'range'; slider.min = '10'; slider.max = '50'; slider.value = '20'; slider.style.cssText = 'width:100%; margin:10px 0;'; slider.oninput = () => { const v = Number(slider.value); valueBox.textContent = `Force: ${v} N`; cart.style.left = `${30 + v * 2}px`; };
    track.appendChild(cart); simPanel.appendChild(track); simPanel.appendChild(valueBox); simPanel.appendChild(slider); shell.appendChild(simPanel);

    const choicesWrap = document.createElement('div'); choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button'); btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:18px;'; btn.innerHTML = `<div style="font-size:1.05rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.85rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => {
        if (option.isCorrect) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400); }
      };
      choicesWrap.appendChild(btn);
    });
    const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    const restartBtn = document.createElement('button'); restartBtn.className = 'nav-btn'; restartBtn.textContent = '🔁 Restart'; restartBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex = 0; this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); actions.appendChild(restartBtn); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderMathStrategistStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#fef3c7; border:2px solid #f59e0b; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#fef3c7,#fff7ed); border:4px solid #f59e0b;';
      intro.innerHTML = `
        <div style="font-size:2.2rem; margin-bottom:8px;">📐</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Math Strategist</div>
        <div style="font-size:1.02rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button'); startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Challenge'; startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const panel = document.createElement('div');
    panel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    panel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;

    if (step.type === 'equation' || step.type === 'coordinate' || step.type === 'geometry') {
      const miniBoard = document.createElement('div');
      miniBoard.style.cssText = 'height:110px; border-radius:18px; background:linear-gradient(180deg,#f8fafc,#e2e8f0); border:2px solid #cbd5e1; margin-top:10px; position:relative; overflow:hidden;';
      const axes = document.createElement('div'); axes.style.cssText = 'position:absolute; inset:0;';
      axes.innerHTML = '<div style="position:absolute; left:50%; top:0; width:2px; height:100%; background:#94a3b8;"></div><div style="position:absolute; left:0; top:50%; width:100%; height:2px; background:#94a3b8;"></div>';
      const point = document.createElement('div'); point.style.cssText = 'position:absolute; left:58%; top:32%; width:14px; height:14px; border-radius:50%; background:#f97316; box-shadow:0 0 0 6px rgba(249,115,22,0.15);';
      miniBoard.appendChild(axes); miniBoard.appendChild(point); panel.appendChild(miniBoard);
    }

    const choicesWrap = document.createElement('div'); choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(170px,1fr)); gap:12px; margin-top:12px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button'); btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:18px;'; btn.innerHTML = `<div style="font-size:1.05rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.85rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => {
        if (option.isCorrect) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400); }
      };
      choicesWrap.appendChild(btn);
    });
    const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    const restartBtn = document.createElement('button'); restartBtn.className = 'nav-btn'; restartBtn.textContent = '🔁 Restart'; restartBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex = 0; this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); actions.appendChild(restartBtn); shell.appendChild(panel); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderSocialScienceEvidenceStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#dcfce7; border:2px solid #16a34a; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#ecfeff); border:4px solid #16a34a;';
      intro.innerHTML = `
        <div style="font-size:2.2rem; margin-bottom:8px;">🌍</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Evidence Investigation</div>
        <div style="font-size:1.02rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button'); startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Investigation'; startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const panel = document.createElement('div');
    panel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    panel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;

    const regionWrap = document.createElement('div');
    regionWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:12px; margin-top:12px;';
    ['River valley', 'Coastal city', 'Mountain pass', 'Dry plateau'].forEach(region => {
      const chip = document.createElement('button'); chip.className = 'interactive-item'; chip.style.cssText = 'padding:16px 12px; border-radius:16px;'; chip.textContent = region; chip.onclick = () => { audioManager.playClick(); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:10px 12px; border-radius:12px; background:#ecfeff; color:#0f172a; font-weight:700;'; note.textContent = `${region} provides a specific clue for trade, settlement, or survival.`; panel.appendChild(note); };
      regionWrap.appendChild(chip);
    });
    panel.appendChild(regionWrap);
    shell.appendChild(panel);

    const choicesWrap = document.createElement('div'); choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button'); btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:18px;'; btn.innerHTML = `<div style="font-size:1.05rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.85rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => {
        if (option.isCorrect) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400); }
      };
      choicesWrap.appendChild(btn);
    });
    const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    const restartBtn = document.createElement('button'); restartBtn.className = 'nav-btn'; restartBtn.textContent = '🔁 Restart'; restartBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex = 0; this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); actions.appendChild(restartBtn); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderRealWorldCaseFileStage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';
    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:#ede9fe; border:2px solid #8b5cf6; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#ede9fe,#f5f3ff); border:4px solid #8b5cf6;';
      intro.innerHTML = `
        <div style="font-size:2.2rem; margin-bottom:8px;">🧠</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Real-World Case File</div>
        <div style="font-size:1.02rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(intro);
      const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button'); startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Open Case File'; startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    const casePanel = document.createElement('div');
    casePanel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    casePanel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
    const evidenceBar = document.createElement('div');
    evidenceBar.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(120px,1fr)); gap:10px; margin-top:12px;';
    ['Water use', 'Traffic flow', 'Energy demand', 'Soil test'].forEach(label => {
      const item = document.createElement('div'); item.style.cssText = 'padding:12px 10px; border-radius:14px; background:#f8fafc; border:2px solid #cbd5e1; font-weight:700; text-align:center;'; item.textContent = label; evidenceBar.appendChild(item);
    });
    casePanel.appendChild(evidenceBar);
    shell.appendChild(casePanel);

    const choicesWrap = document.createElement('div'); choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button'); btn.className = 'interactive-item'; btn.style.cssText = 'padding:18px 16px; border-radius:18px;'; btn.innerHTML = `<div style="font-size:1.05rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.85rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => {
        if (option.isCorrect) { audioManager.playSuccessFanfare(); ConfettiEngine.fire(); app.addStar(); btn.style.borderColor = '#22c55e'; setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900); } else { audioManager.playPop(); btn.style.borderColor = '#ef4444'; btn.style.animation = 'shake 0.4s'; setTimeout(() => { btn.style.animation = ''; }, 400); }
      };
      choicesWrap.appendChild(btn);
    });
    const actions = document.createElement('div'); actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    const restartBtn = document.createElement('button'); restartBtn.className = 'nav-btn'; restartBtn.textContent = '🔁 Restart'; restartBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex = 0; this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); actions.appendChild(restartBtn); shell.appendChild(choicesWrap); shell.appendChild(actions); container.appendChild(shell);
  },

  renderClass10Stage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const missionBar = document.createElement('div');
    missionBar.style.cssText = 'padding:12px 16px; border-radius:16px; background:linear-gradient(135deg,#dbeafe,#f5f3ff); border:2px solid #6366f1; font-weight:800; color:#0f172a;';
    missionBar.textContent = `Mission progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(missionBar);

    if (step.type === 'start') {
      const intro = document.createElement('div');
      intro.style.cssText = 'padding:22px; border-radius:24px; background:linear-gradient(135deg,#e0f2fe,#eef2ff); border:4px solid #4f46e5;';
      intro.innerHTML = `
        <div style="font-size:2.3rem; margin-bottom:8px;">🎯</div>
        <div style="font-size:1.5rem; font-weight:800; color:#0f172a; margin-bottom:8px;">Theory & Information</div>
        <div style="font-size:1.02rem; color:#1f2937; line-height:1.7;">${step.intro}</div>
        <div style="margin-top:10px; font-weight:800; color:#0f172a;">Objective: ${step.objective}</div>
      `;
      shell.appendChild(intro);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      let hintIndex = 0;
      const startBtn = document.createElement('button'); startBtn.className = 'nav-btn'; startBtn.textContent = '🚀 Start Activity'; startBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex += 1; this.renderCurrentStep(); };
      const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:12px 16px; border-radius:16px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
      actions.appendChild(startBtn); actions.appendChild(helpBtn); shell.appendChild(actions); container.appendChild(shell); return;
    }

    if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:28px 22px; border-radius:24px; background:linear-gradient(135deg,#dcfce7,#ecfeff); border:4px solid #16a34a;';
      successCard.innerHTML = `
        <div style="font-size:2.5rem; margin-bottom:10px;">✅</div>
        <div style="font-size:1.6rem; font-weight:900; color:#0f172a; margin-bottom:8px;">Mission Complete</div>
        <div style="font-size:1.05rem; color:#1f2937; line-height:1.7;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      const restartBtn = document.createElement('button'); restartBtn.className = 'nav-btn'; restartBtn.textContent = '🔁 Restart'; restartBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex = 0; this.renderCurrentStep(); };
      actions.appendChild(restartBtn);
      shell.appendChild(actions);
      container.appendChild(shell);
      return;
    }

    const panel = document.createElement('div');
    panel.style.cssText = 'padding:20px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0;';
    panel.innerHTML = `<div style="font-size:1.2rem; font-weight:900; margin-bottom:10px; color:#0f172a;">${step.prompt}</div>`;
    shell.appendChild(panel);

    const choicesWrap = document.createElement('div');
    choicesWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; margin-top:10px;';
    let hintIndex = 0;
    step.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'interactive-item';
      btn.style.cssText = 'padding:18px 16px; border-radius:18px;';
      btn.innerHTML = `<div style="font-size:1.04rem; font-weight:800; color:#0f172a;">${option.label}</div><div style="font-size:0.85rem; color:#475569;">${option.detail}</div>`;
      btn.onclick = () => {
        if (option.isCorrect) {
          audioManager.playSuccessFanfare();
          ConfettiEngine.fire();
          app.addStar();
          btn.style.borderColor = '#22c55e';
          setTimeout(() => { this.currentStepIndex += 1; this.renderCurrentStep(); }, 900);
        } else {
          audioManager.playPop();
          btn.style.borderColor = '#ef4444';
          btn.style.animation = 'shake 0.4s';
          setTimeout(() => { btn.style.animation = ''; }, 400);
          const clue = step.hint || step.hints[0];
          audioManager.speak(clue);
        }
      };
      choicesWrap.appendChild(btn);
    });
    shell.appendChild(choicesWrap);

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
    const helpBtn = document.createElement('button'); helpBtn.className = 'nav-btn'; helpBtn.textContent = '💡 Help'; helpBtn.onclick = () => { const clue = step.hints[hintIndex % step.hints.length]; hintIndex += 1; audioManager.speak(clue); const note = document.createElement('div'); note.style.cssText = 'margin-top:10px; padding:12px 16px; border-radius:14px; background:#f0fdf4; border:2px dashed #22c55e; color:#166534; font-weight:700;'; note.textContent = clue; shell.appendChild(note); };
    const retryBtn = document.createElement('button'); retryBtn.className = 'nav-btn'; retryBtn.textContent = '🔄 Try Again'; retryBtn.onclick = () => { audioManager.playClick(); this.renderCurrentStep(); };
    const restartBtn = document.createElement('button'); restartBtn.className = 'nav-btn'; restartBtn.textContent = '🔁 Restart'; restartBtn.onclick = () => { audioManager.playClick(); this.currentStepIndex = 0; this.renderCurrentStep(); };
    actions.appendChild(helpBtn); actions.appendChild(retryBtn); actions.appendChild(restartBtn); shell.appendChild(actions); container.appendChild(shell);
  },

  render3DStage(container, step, act) {
    container.innerHTML = '';

    // Interactive 3D Canvas Box
    const viewport = document.createElement('div');
    viewport.style.position = 'relative';
    viewport.style.width = '100%';
    viewport.style.maxWidth = '850px';
    viewport.style.height = '230px';
    viewport.style.margin = '0 auto 15px auto';
    viewport.style.borderRadius = '24px';
    viewport.style.background = 'radial-gradient(circle, #38bdf8 0%, #0369a1 100%)';
    viewport.style.border = '5px solid #ffffff';
    viewport.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    viewport.style.display = 'flex';
    viewport.style.flexDirection = 'column';
    viewport.style.alignItems = 'center';
    viewport.style.justifyContent = 'center';
    viewport.style.perspective = '800px';

    const object3D = document.createElement('div');
    object3D.style.fontSize = '6.5rem';
    object3D.style.cursor = 'grab';
    object3D.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    object3D.style.filter = 'drop-shadow(0 15px 15px rgba(0,0,0,0.3))';
    object3D.textContent = step.options.find(o => o.isCorrect)?.emoji || '🪐';

    let rotationDegree = 0;
    let zoomScale = 1;

    object3D.style.transform = `rotateY(${rotationDegree}deg) scale(${zoomScale})`;

    const controlsRow = document.createElement('div');
    controlsRow.style.position = 'absolute';
    controlsRow.style.bottom = '10px';
    controlsRow.style.display = 'flex';
    controlsRow.style.gap = '10px';

    const rotateBtn = document.createElement('button');
    rotateBtn.className = 'nav-btn';
    rotateBtn.style.fontSize = '0.9rem';
    rotateBtn.style.padding = '5px 12px';
    rotateBtn.textContent = '🔄 Rotate 3D';
    rotateBtn.onclick = () => {
      rotationDegree += 90;
      object3D.style.transform = `rotateY(${rotationDegree}deg) scale(${zoomScale})`;
      audioManager.playClick();
    };

    const zoomBtn = document.createElement('button');
    zoomBtn.className = 'nav-btn';
    zoomBtn.style.fontSize = '0.9rem';
    zoomBtn.style.padding = '5px 12px';
    zoomBtn.textContent = '🔍 Zoom 3D';
    zoomBtn.onclick = () => {
      zoomScale = zoomScale === 1 ? 1.3 : 1;
      object3D.style.transform = `rotateY(${rotationDegree}deg) scale(${zoomScale})`;
      audioManager.playClick();
    };

    controlsRow.appendChild(rotateBtn);
    controlsRow.appendChild(zoomBtn);

    viewport.appendChild(object3D);
    viewport.appendChild(controlsRow);
    container.appendChild(viewport);

    // Options Grid below 3D viewport
    const optionsGrid = document.createElement('div');
    optionsGrid.style.display = 'flex';
    optionsGrid.style.gap = '15px';
    optionsGrid.style.flexWrap = 'wrap';
    optionsGrid.style.justifyContent = 'center';

    step.options.forEach(opt => {
      const item = document.createElement('div');
      item.className = 'interactive-item';
      item.style.padding = '20px 30px';
      item.style.minWidth = '150px';
      item.style.borderWidth = '4px';
      item.style.borderRadius = '20px';
      item.style.cursor = 'pointer';
      item.innerHTML = `
        <div class="item-emoji" style="font-size: 3.8rem; pointer-events: none;">${opt.emoji}</div>
        <div class="item-label" style="font-size: 1.3rem; margin-top:6px; font-weight:700; pointer-events: none;">${opt.label}</div>
      `;

      item.addEventListener('click', () => {
        if (opt.isCorrect) {
          audioManager.playSuccessFanfare();
          ConfettiEngine.fire();
          app.addStar();
          item.style.borderColor = 'var(--primary-green)';
          item.style.transform = 'scale(1.18)';
          audioManager.speak(`Super Job! Correct answer!`);

          setTimeout(() => {
            this.currentStepIndex++;
            this.renderCurrentStep();
          }, 1000);
        } else {
          audioManager.playPop();
          item.style.borderColor = '#ef4444';
          item.style.animation = 'shake 0.4s';
          setTimeout(() => { item.style.animation = ''; }, 400);
          audioManager.speak('Almost there! Try again!');
        }
      });

      optionsGrid.appendChild(item);
    });

    container.appendChild(optionsGrid);
  },

  renderClass8Stage(container, step, act) {
    const shell = document.createElement('div');
    shell.style.cssText = 'width:100%; max-width:980px; margin:0 auto; display:flex; flex-direction:column; gap:18px;';

    const progress = document.createElement('div');
    progress.style.cssText = 'padding:12px 16px; border-radius:16px; background:linear-gradient(90deg,#e2e8f0,#f8fafc); border:2px solid #cbd5e1; font-weight:800; color:#0f172a;';
    progress.textContent = `Progress: ${this.currentStepIndex + 1}/${act.steps.length}`;
    shell.appendChild(progress);

    if (step.type === 'theory') {
      const theoryCard = document.createElement('div');
      theoryCard.style.cssText = 'padding:24px; border-radius:26px; background:linear-gradient(135deg,#f8fafc,#e0f2fe); border:4px solid #38bdf8; box-shadow:0 12px 30px rgba(15,23,42,0.08);';

      const title = document.createElement('div');
      title.style.cssText = 'font-size:1.8rem; font-weight:900; color:#0f172a; margin-bottom:12px;';
      title.textContent = '📚 Theory & Information';
      theoryCard.appendChild(title);

      const topic = document.createElement('div');
      topic.style.cssText = 'font-size:1.25rem; font-weight:800; color:#0f172a; margin-bottom:8px;';
      topic.textContent = `Topic: ${step.topic}`;
      theoryCard.appendChild(topic);

      if (step.concept) {
        const p = document.createElement('div');
        p.style.cssText = 'font-size:1.02rem; line-height:1.7; color:#1f2937; margin-bottom:10px;';
        p.innerHTML = `<strong>Concept:</strong> ${step.concept}`;
        theoryCard.appendChild(p);
      }

      if (Array.isArray(step.definitions) && step.definitions.length) {
        const defs = document.createElement('div');
        defs.style.cssText = 'margin:10px 0; padding:12px 14px; border-radius:16px; background:#ffffff; border:2px solid rgba(56,189,248,0.3);';
        defs.innerHTML = `<div style="font-weight:900; color:#0f172a; margin-bottom:8px;">Important definitions</div><ul style="margin:0; padding-left:18px; color:#1f2937; line-height:1.8;">${step.definitions.map(item => `<li>${item}</li>`).join('')}</ul>`;
        theoryCard.appendChild(defs);
      }

      if (Array.isArray(step.points) && step.points.length) {
        const points = document.createElement('div');
        points.style.cssText = 'margin:10px 0; padding:12px 14px; border-radius:16px; background:#ecfeff; border:2px solid rgba(45,212,191,0.4);';
        points.innerHTML = `<div style="font-weight:900; color:#0f172a; margin-bottom:8px;">Important points</div><ul style="margin:0; padding-left:18px; color:#0f172a; line-height:1.8;">${step.points.map(item => `<li>${item}</li>`).join('')}</ul>`;
        theoryCard.appendChild(points);
      }

      if (Array.isArray(step.formulae) && step.formulae.length) {
        const form = document.createElement('div');
        form.style.cssText = 'margin:10px 0; padding:12px 14px; border-radius:16px; background:#fef3c7; border:2px solid rgba(245,158,11,0.4);';
        form.innerHTML = `<div style="font-weight:900; color:#0f172a; margin-bottom:8px;">Formulae</div><ul style="margin:0; padding-left:18px; color:#0f172a; line-height:1.8;">${step.formulae.map(item => `<li>${item}</li>`).join('')}</ul>`;
        theoryCard.appendChild(form);
      }

      if (Array.isArray(step.examples) && step.examples.length) {
        const ex = document.createElement('div');
        ex.style.cssText = 'margin:10px 0; padding:12px 14px; border-radius:16px; background:#f0fdf4; border:2px solid rgba(34,197,94,0.4);';
        ex.innerHTML = `<div style="font-weight:900; color:#0f172a; margin-bottom:8px;">Simple examples</div><ul style="margin:0; padding-left:18px; color:#166534; line-height:1.8;">${step.examples.map(item => `<li>${item}</li>`).join('')}</ul>`;
        theoryCard.appendChild(ex);
      }

      if (step.visual) {
        const visual = document.createElement('div');
        visual.style.cssText = 'margin:12px 0; padding:18px 16px; border-radius:18px; background:#ffffff; border:2px solid #dbeafe;';
        visual.innerHTML = step.visual;
        theoryCard.appendChild(visual);
      }

      if (Array.isArray(step.revision) && step.revision.length) {
        const rev = document.createElement('div');
        rev.style.cssText = 'margin:10px 0; padding:12px 14px; border-radius:16px; background:#f3e8ff; border:2px solid rgba(168,85,247,0.3);';
        rev.innerHTML = `<div style="font-weight:900; color:#0f172a; margin-bottom:8px;">Quick revision</div><ul style="margin:0; padding-left:18px; color:#4c1d95; line-height:1.8;">${step.revision.map(item => `<li>${item}</li>`).join('')}</ul>`;
        theoryCard.appendChild(rev);
      }

      if (step.summary) {
        const sum = document.createElement('div');
        sum.style.cssText = 'margin:10px 0 0; padding:12px 14px; border-radius:16px; background:#f9fafb; border:2px dashed #94a3b8; color:#0f172a; font-weight:800;';
        sum.textContent = `What you learned: ${step.summary}`;
        theoryCard.appendChild(sum);
      }

      shell.appendChild(theoryCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      const startBtn = document.createElement('button');
      startBtn.className = 'nav-btn';
      startBtn.textContent = '🎮 Start Activity';
      startBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex += 1;
        this.renderCurrentStep();
      };

      let hintIndex = 0;
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const clue = (step.hints || ['Review the main idea carefully.'])[hintIndex % (step.hints || ['Review the main idea carefully.']).length];
        hintIndex += 1;
        audioManager.speak(clue);
        const note = document.createElement('div');
        note.style.cssText = 'padding:12px 16px; border-radius:14px; background:#fff7ed; border:2px dashed #f59e0b; color:#9a4d00; font-weight:700;';
        note.textContent = `Hint ${hintIndex}: ${clue}`;
        shell.appendChild(note);
      };

      actions.appendChild(startBtn);
      actions.appendChild(helpBtn);
      shell.appendChild(actions);
    } else if (step.type === 'success') {
      const successCard = document.createElement('div');
      successCard.style.cssText = 'padding:28px; border-radius:26px; background:linear-gradient(135deg,#dcfce7,#dbeafe); border:4px solid #22c55e; text-align:center; box-shadow:0 12px 30px rgba(34,197,94,0.12);';
      successCard.innerHTML = `
        <div style="font-size:4rem; margin-bottom:10px;">🏆</div>
        <div style="font-size:1.8rem; font-weight:900; color:#0f172a; margin-bottom:10px;">Mission Complete</div>
        <div style="font-size:1.08rem; line-height:1.8; color:#1f2937;">${step.prompt}</div>
      `;
      shell.appendChild(successCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:12px; flex-wrap:wrap;';
      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart';
      restartBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };
      actions.appendChild(restartBtn);
      shell.appendChild(actions);
    } else {
      const challengeCard = document.createElement('div');
      challengeCard.style.cssText = 'padding:22px; border-radius:24px; background:#ffffff; border:4px solid #e2e8f0; box-shadow:0 12px 24px rgba(15,23,42,0.06);';

      const prompt = document.createElement('div');
      prompt.style.cssText = 'font-size:1.25rem; font-weight:900; color:#0f172a; margin-bottom:14px;';
      prompt.textContent = step.prompt;
      challengeCard.appendChild(prompt);

      if (step.visual) {
        const visualBox = document.createElement('div');
        visualBox.style.cssText = 'padding:16px; border-radius:18px; background:linear-gradient(135deg,#f8fafc,#ecfeff); border:2px solid #a5f3fc; margin-bottom:16px;';
        visualBox.innerHTML = step.visual;
        challengeCard.appendChild(visualBox);
      }

      const optionsWrap = document.createElement('div');
      optionsWrap.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px;';

      let hintIndex = 0;
      const clueBox = document.createElement('div');
      clueBox.style.cssText = 'margin-top:14px; padding:12px 14px; border-radius:14px; background:#f8fafc; border:2px dashed #cbd5e1; color:#334155; font-weight:700;';
      clueBox.textContent = 'Use the clues and think carefully before choosing.';

      (step.options || []).forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'interactive-item';
        btn.style.cssText = 'padding:18px 14px; border-radius:20px; min-height:120px; text-align:left;';
        btn.innerHTML = `<div style="font-size:1.08rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${option.label}</div><div style="font-size:0.92rem; color:#475569; line-height:1.5;">${option.detail || ''}</div>`;
        btn.onclick = () => {
          if (option.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            btn.style.borderColor = '#22c55e';
            btn.style.transform = 'scale(1.02)';
            clueBox.style.background = '#f0fdf4';
            clueBox.style.borderColor = '#22c55e';
            clueBox.style.color = '#166534';
            clueBox.textContent = 'Great choice! You used the evidence and reasoning to reach the correct conclusion.';
            setTimeout(() => {
              this.currentStepIndex += 1;
              this.renderCurrentStep();
            }, 950);
          } else {
            audioManager.playPop();
            btn.style.borderColor = '#ef4444';
            btn.style.animation = 'shake 0.4s';
            setTimeout(() => { btn.style.animation = ''; }, 400);
            const clue = (step.hints || ['Think again using the key idea and helpful evidence.'])[hintIndex % ((step.hints || ['Think again using the key idea and helpful evidence.']).length)];
            hintIndex += 1;
            clueBox.style.background = '#fff7ed';
            clueBox.style.borderColor = '#f59e0b';
            clueBox.style.color = '#9a4d00';
            clueBox.textContent = `Good attempt. ${clue}`;
            audioManager.speak(clue);
          }
        };
        optionsWrap.appendChild(btn);
      });

      challengeCard.appendChild(optionsWrap);
      challengeCard.appendChild(clueBox);
      shell.appendChild(challengeCard);

      const actions = document.createElement('div');
      actions.style.cssText = 'display:flex; justify-content:center; gap:10px; flex-wrap:wrap;';
      const helpBtn = document.createElement('button');
      helpBtn.className = 'nav-btn';
      helpBtn.textContent = '💡 Help';
      helpBtn.onclick = () => {
        const hint = (step.hints || ['Look closely at the pattern before choosing.'])[hintIndex % ((step.hints || ['Look closely at the pattern before choosing.']).length)];
        hintIndex += 1;
        clueBox.style.background = '#fff7ed';
        clueBox.style.borderColor = '#f59e0b';
        clueBox.style.color = '#9a4d00';
        clueBox.textContent = `Hint: ${hint}`;
        audioManager.speak(hint);
      };

      const retryBtn = document.createElement('button');
      retryBtn.className = 'nav-btn';
      retryBtn.textContent = '🔄 Try Again';
      retryBtn.onclick = () => {
        audioManager.playClick();
        clueBox.style.background = '#f8fafc';
        clueBox.style.borderColor = '#cbd5e1';
        clueBox.style.color = '#334155';
        clueBox.textContent = 'Try again using the same clues. You can do this.';
      };

      const restartBtn = document.createElement('button');
      restartBtn.className = 'nav-btn';
      restartBtn.textContent = '🔄 Restart';
      restartBtn.onclick = () => {
        audioManager.playClick();
        this.currentStepIndex = 0;
        this.renderCurrentStep();
      };

      actions.appendChild(helpBtn);
      actions.appendChild(retryBtn);
      actions.appendChild(restartBtn);
      shell.appendChild(actions);
    }

    container.appendChild(shell);
  },

  renderTapStage(container, step, act) {
    const isNursery = act && act.classLevel === 'nursery';

    if (isNursery) {
      const nurseryScene = document.createElement('div');
      nurseryScene.style.width = '100%';
      nurseryScene.style.maxWidth = '850px';
      nurseryScene.style.margin = '0 auto 15px auto';
      nurseryScene.style.padding = '25px 20px';
      nurseryScene.style.borderRadius = '28px';
      nurseryScene.style.background = 'linear-gradient(180deg, #e0f2fe 0%, #f0fdf4 100%)';
      nurseryScene.style.border = '4px dashed #38bdf8';
      nurseryScene.style.boxShadow = '0 8px 25px rgba(0,0,0,0.06)';
      nurseryScene.style.display = 'flex';
      nurseryScene.style.flexDirection = 'column';
      nurseryScene.style.alignItems = 'center';

      const decorHeader = document.createElement('div');
      decorHeader.style.fontSize = '2.2rem';
      decorHeader.style.marginBottom = '15px';
      decorHeader.innerHTML = '☁️ ☀️ 🌸 🐰 🌈';
      nurseryScene.appendChild(decorHeader);

      const cardsWrap = document.createElement('div');
      cardsWrap.style.display = 'flex';
      cardsWrap.style.gap = '20px';
      cardsWrap.style.flexWrap = 'wrap';
      cardsWrap.style.justifyContent = 'center';

      step.options.forEach(opt => {
        const item = document.createElement('div');
        item.className = 'interactive-item';
        item.style.padding = '25px 35px';
        item.style.minWidth = '170px';
        item.style.borderWidth = '5px';
        item.style.borderRadius = '24px';
        item.style.cursor = 'pointer';
        item.style.background = '#ffffff';
        item.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
        item.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        item.innerHTML = `
          <div class="item-emoji" style="font-size: 5.5rem; pointer-events: none; filter: drop-shadow(0 8px 10px rgba(0,0,0,0.15));">${opt.emoji}</div>
          <div class="item-label" style="font-size: 1.5rem; margin-top:10px; font-weight:800; color: #1e293b; pointer-events: none;">${opt.label}</div>
        `;

        item.addEventListener('click', () => {
          if (opt.isCorrect) {
            audioManager.playSuccessFanfare();
            ConfettiEngine.fire();
            app.addStar();
            item.style.borderColor = 'var(--primary-green)';
            item.style.transform = 'scale(1.2)';
            audioManager.speak(`Super Job! Correct!`);

            setTimeout(() => {
              this.currentStepIndex++;
              this.renderCurrentStep();
            }, 1000);
          } else {
            audioManager.playPop();
            item.style.borderColor = '#ef4444';
            item.style.animation = 'shake 0.4s';
            setTimeout(() => { item.style.animation = ''; }, 400);
            audioManager.speak('Try again!');
          }
        });

        cardsWrap.appendChild(item);
      });

      nurseryScene.appendChild(cardsWrap);
      container.appendChild(nurseryScene);
      return;
    }

    step.options.forEach(opt => {
      const item = document.createElement('div');
      item.className = 'interactive-item';
      item.style.padding = '25px 35px';
      item.style.minWidth = '160px';
      item.style.borderWidth = '5px';
      item.style.borderRadius = '24px';
      item.style.cursor = 'pointer';
      item.innerHTML = `
        <div class="item-emoji" style="font-size: 4.8rem; pointer-events: none;">${opt.emoji}</div>
        <div class="item-label" style="font-size: 1.5rem; margin-top:8px; font-weight:700; pointer-events: none;">${opt.label}</div>
      `;

      item.addEventListener('click', () => {
        if (opt.isCorrect) {
          audioManager.playSuccessFanfare();
          ConfettiEngine.fire();
          app.addStar();
          item.style.borderColor = 'var(--primary-green)';
          item.style.transform = 'scale(1.18)';
          audioManager.speak(`Super Job! Correct answer!`);

          setTimeout(() => {
            this.currentStepIndex++;
            this.renderCurrentStep();
          }, 1000);
        } else {
          audioManager.playPop();
          item.style.borderColor = '#ef4444';
          item.style.animation = 'shake 0.4s';
          setTimeout(() => { item.style.animation = ''; }, 400);
          audioManager.speak('Almost there! Try again!');
        }
      });

      container.appendChild(item);
    });
  },

  renderDragMatchStage(container, step) {
    const itemsWrap = document.createElement('div');
    itemsWrap.style.display = 'flex';
    itemsWrap.style.gap = '20px';
    itemsWrap.style.flexWrap = 'wrap';

    step.draggableItems.forEach(item => {
      const dragEl = document.createElement('div');
      dragEl.className = 'interactive-item';
      dragEl.draggable = true;
      dragEl.innerHTML = `
        <div class="item-emoji">${item.emoji}</div>
        <div class="item-label">${item.label}</div>
      `;

      // Touch & Mouse Drag Handlers
      dragEl.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.val);
        audioManager.playClick();
      });

      // Direct tap fallback for small children!
      dragEl.addEventListener('click', () => {
        if (item.val === step.targetValue) {
          audioManager.playSuccessFanfare();
          app.addStar();
          this.currentStepIndex++;
          this.renderCurrentStep();
        } else {
          audioManager.playPop();
          audioManager.speak('Almost there! Try again!');
        }
      });

      itemsWrap.appendChild(dragEl);
    });

    const dropZone = document.createElement('div');
    dropZone.className = 'drop-zone';
    dropZone.innerHTML = `
      <div style="font-size: 3.5rem;">🧺</div>
      <div class="item-label" style="margin-top:8px;">${step.targetBox}</div>
    `;

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('hovered');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('hovered');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('hovered');
      const val = parseInt(e.dataTransfer.getData('text/plain'), 10);

      if (val === step.targetValue) {
        audioManager.playSuccessFanfare();
        app.addStar();
        this.currentStepIndex++;
        this.renderCurrentStep();
      } else {
        audioManager.playPop();
        audioManager.speak('Almost there! Try again!');
      }
    });

    container.appendChild(itemsWrap);
    container.appendChild(dropZone);
  },

  completeActivity() {
    audioManager.playSuccessFanfare();
    ConfettiEngine.fire();

    const celebModal = document.getElementById('celebrationModal');
    const celebTitle = document.getElementById('celebTitle');
    const celebMsg = document.getElementById('celebMsg');
    const celebBtn = document.getElementById('celebBtn');

    if (celebTitle) celebTitle.textContent = `🌟 ${this.currentActivity.title} Complete!`;
    if (celebMsg) celebMsg.textContent = `Awesome job! You completed all 5 levels of ${this.currentActivity.title}! ⭐⭐⭐⭐⭐`;

    audioManager.speak(`Awesome job! You completed all 5 levels of ${this.currentActivity.title}!`);

    if (celebModal) celebModal.classList.add('active');

    if (celebBtn) {
      celebBtn.onclick = () => {
        celebModal.classList.remove('active');
        app.showView('classActivitiesView');
      };
    }
  }
};
