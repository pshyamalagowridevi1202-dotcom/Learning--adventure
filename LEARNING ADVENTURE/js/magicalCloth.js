// ============================================
// MAGICAL CLOTH - INVISIBILITY EFFECT
// ============================================

window.MagicalCloth = {

    video: null,
    stream: null,
    backgroundCanvas: null,
    backgroundData: null,
    animationId: null,
    processing: false,

    async startCamera() {

        try {

            const wrapper =
                document.getElementById("magicalClothWrapper");

            const canvas =
                document.getElementById("magicalClothCanvas");

            if (!wrapper || !canvas) {
                console.error("Magical Cloth elements not found");
                return;
            }

            // --------------------------------------------
            // Create / reuse hidden camera video
            // --------------------------------------------

            let video =
                document.getElementById("magicalClothVideo");

            if (!video) {

                video = document.createElement("video");

                video.id = "magicalClothVideo";

                video.autoplay = true;
                video.muted = true;
                video.playsInline = true;

                video.style.position = "absolute";
                video.style.width = "1px";
                video.style.height = "1px";
                video.style.opacity = "0";
                video.style.pointerEvents = "none";

                wrapper.appendChild(video);
            }

            this.video = video;

            // --------------------------------------------
            // Camera
            // --------------------------------------------

            if (!this.stream || !this.stream.active) {

                this.stream =
                    await navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode: "user"
                        },
                        audio: false
                    });

                video.srcObject = this.stream;
            }

            await video.play();

            console.log("📷 Magical Cloth camera started");

            // --------------------------------------------
            // Wait until camera gives a real frame
            // --------------------------------------------

            const waitForCamera = () => {

                if (
                    video.readyState >= 2 &&
                    video.videoWidth > 0 &&
                    video.videoHeight > 0
                ) {

                    console.log("✨ Camera frame ready");

                    this.captureBackground();

                    this.startInvisibilityEffect();

                } else {

                    requestAnimationFrame(waitForCamera);
                }
            };

            waitForCamera();

        } catch (error) {

            console.error(
                "❌ Magical Cloth camera failed:",
                error
            );
        }
    },


    // ============================================
    // CAPTURE BACKGROUND
    // ============================================

    captureBackground() {

        const video = this.video;

        if (!video) return;

        const canvas =
            document.getElementById("magicalClothCanvas");

        if (!canvas) return;

        // Keep processing size reasonable for performance
        const maxWidth = 640;

        const width =
            Math.min(video.videoWidth, maxWidth);

        const height =
            Math.round(
                video.videoHeight *
                (width / video.videoWidth)
            );

        canvas.width = width;
        canvas.height = height;

        // --------------------------------------------
        // Create separate background canvas
        // --------------------------------------------

        this.backgroundCanvas =
            document.createElement("canvas");

        this.backgroundCanvas.width = width;
        this.backgroundCanvas.height = height;

        const bgCtx =
            this.backgroundCanvas.getContext("2d", {
                willReadFrequently: true
            });

        // Capture the clean background
        bgCtx.drawImage(
            video,
            0,
            0,
            width,
            height
        );

        // Store background pixels ONCE
        this.backgroundData =
            bgCtx.getImageData(
                0,
                0,
                width,
                height
            );

        console.log(
            "🪄 Background captured successfully"
        );
    },


    // ============================================
    // BLACK CLOTH INVISIBILITY EFFECT
    // ============================================

    startInvisibilityEffect() {

        if (this.processing) return;

        const video = this.video;

        const canvas =
            document.getElementById("magicalClothCanvas");

        if (!video || !canvas) return;

        const ctx =
            canvas.getContext("2d", {
                willReadFrequently: true
            });

        this.processing = true;

        // Make processed canvas visible
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.zIndex = "10";
        canvas.style.pointerEvents = "none";

        const drawFrame = () => {

            if (!this.processing) return;

            const width = canvas.width;
            const height = canvas.height;

            // --------------------------------------------
            // Draw LIVE camera frame
            // --------------------------------------------

            ctx.drawImage(
                video,
                0,
                0,
                width,
                height
            );

            // Get live frame pixels
            const liveData =
                ctx.getImageData(
                    0,
                    0,
                    width,
                    height
                );

            const livePixels =
                liveData.data;

            const backgroundPixels =
                this.backgroundData.data;

            // --------------------------------------------
            // BLACK CLOTH DETECTION
            // --------------------------------------------

            for (
                let i = 0;
                i < livePixels.length;
                i += 4
            ) {

                const r = livePixels[i];
                const g = livePixels[i + 1];
                const b = livePixels[i + 2];

                // RED CLOTH DETECTION
                const isRed =
                    r > 100 &&
                    r > g * 1.4 &&
                    r > b * 1.4;

                // Replace RED cloth with captured background
                if (isRed) {

                    livePixels[i] =
                        backgroundPixels[i];

                    livePixels[i + 1] =
                        backgroundPixels[i + 1];

                    livePixels[i + 2] =
                        backgroundPixels[i + 2];

                    livePixels[i + 3] = 255;
                }
            }

            // Put processed image back
            ctx.putImageData(
                liveData,
                0,
                0
            );

            this.animationId =
                requestAnimationFrame(drawFrame);
        };

        drawFrame();

        console.log(
            "🪄 Black Cloth Invisibility Effect ON"
        );
    },


    // ============================================
    // RESET / CAPTURE NEW BACKGROUND
    // ============================================

    reset() {

        if (this.video) {

            this.captureBackground();

            console.log(
                "🔄 New background captured"
            );
        }
    },


    // ============================================
    // STOP CAMERA
    // ============================================

    stop() {

        this.processing = false;

        if (this.animationId) {

            cancelAnimationFrame(
                this.animationId
            );

            this.animationId = null;
        }

        if (this.stream) {

            this.stream
                .getTracks()
                .forEach(track => track.stop());

            this.stream = null;
        }

        console.log(
            "📷 Magical Cloth camera stopped"
        );
    }

};