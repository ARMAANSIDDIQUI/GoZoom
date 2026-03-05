import React, { useEffect, useRef } from 'react';

const ShootingStars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        const setCanvasSize = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Particle configuration
        const bgStars = [];
        const shootingStars = [];
        const numBgStars = Math.floor((canvas.width * canvas.height) / 10000); // Responsive amount

        // Initialize background stars
        for (let i = 0; i < numBgStars; i++) {
            bgStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random(),
                speed: (Math.random() * 0.2) + 0.1,
            });
        }

        const createShootingStar = () => {
            const startX = Math.random() * canvas.width * 1.5; // Start widely
            const startY = Math.random() * canvas.height * 0.5; // Start in upper half

            shootingStars.push({
                x: startX,
                y: startY,
                length: Math.random() * 80 + 20,
                speed: Math.random() * 4 + 4,
                opacity: 1,
                vx: -1, // fixed angle leftwards
                vy: 1,  // fixed angle downwards
                trail: [] // store previous positions for trail
            });
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw bg stars (drifting slowly upwards)
            bgStars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Move
                star.y -= star.speed;
                // Twinkle
                star.opacity += (Math.random() - 0.5) * 0.1;
                star.opacity = Math.max(0.1, Math.min(1, star.opacity));

                // Reset if off screen
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }
            });

            // Randomly create shooting stars
            if (Math.random() < 0.03 && shootingStars.length < 3) {
                createShootingStar();
            }

            // Draw shooting stars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const star = shootingStars[i];

                // Add current position to trail
                star.trail.push({ x: star.x, y: star.y });
                if (star.trail.length > 20) star.trail.shift();

                // Draw trail
                if (star.trail.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(star.trail[0].x, star.trail[0].y);
                    for (let j = 1; j < star.trail.length; j++) {
                        ctx.lineTo(star.trail[j].x, star.trail[j].y);
                    }
                    const gradient = ctx.createLinearGradient(
                        star.trail[0].x, star.trail[0].y,
                        star.x, star.y
                    );
                    gradient.addColorStop(0, 'rgba(0, 240, 255, 0)');
                    gradient.addColorStop(1, `rgba(0, 240, 255, ${star.opacity})`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }

                // Draw head
                ctx.beginPath();
                ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Move
                star.x += star.vx * star.speed;
                star.y += star.vy * star.speed;

                // Fade out near end or if off screen
                if (star.x < 0 || star.y > canvas.height) {
                    star.opacity -= 0.05;
                }

                if (star.opacity <= 0) {
                    shootingStars.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-70"
            style={{ zIndex: 5 }}
        />
    );
};

export default ShootingStars;
