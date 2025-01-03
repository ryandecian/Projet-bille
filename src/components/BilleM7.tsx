import React, { useEffect, useRef } from "react";
import "./BilleM7.css";

const BilleM7: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d");

    if (!context) {
      console.error("Contexte 2D introuvable !");
      return;
    }

    const ctx = context; // Utilisation d'une variable locale pour le contexte

    // Initialisation des dimensions du canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["rgb(81, 162, 233)", "rgb(255, 77, 90)"];
    const dots = Array.from({ length: 300 }, () => createDot(canvas.width, canvas.height, colors));
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const CONNECTION_DISTANCE = 80;
    const LINE_WIDTH = 1.5;
    const CURSOR_RADIUS = 200;
    const MAX_DISTANCE = 300;
    const MIN_POINT_OPACITY = 0.3;

    function createDot(canvasWidth: number, canvasHeight: number, colors: string[]) {
      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() * 2 - 1) * Math.random() * 2,
        vy: (Math.random() * 2 - 1) * Math.random() * 2,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    }

    function updateDot(dot: typeof dots[number], canvasWidth: number, canvasHeight: number) {
      if (dot.x + dot.radius > canvasWidth || dot.x - dot.radius < 0) {
        dot.vx = -dot.vx;
      }
      if (dot.y + dot.radius > canvasHeight || dot.y - dot.radius < 0) {
        dot.vy = -dot.vy;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
    }

    function drawDot(dot: typeof dots[number]) {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);

      let opacity = MIN_POINT_OPACITY;
      if (mouse.x !== null && mouse.y !== null) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          opacity = Math.max(MIN_POINT_OPACITY, 1 - distance / CURSOR_RADIUS);
        }
      }

      ctx.fillStyle = dot.color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
      ctx.fill();
    }

    function connectDots() {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            let opacity = 0.5;
            if (mouse.x !== null && mouse.y !== null) {
              const mouseDx = (dots[i].x + dots[j].x) / 2 - mouse.x;
              const mouseDy = (dots[i].y + dots[j].y) / 2 - mouse.y;
              const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

              if (mouseDistance < CURSOR_RADIUS) {
                opacity = 1 - mouseDistance / CURSOR_RADIUS;
              } else {
                opacity = 0;
              }
            }

            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(81, 162, 233, ${opacity})`;
            ctx.lineWidth = LINE_WIDTH;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        updateDot(dot, canvas.width, canvas.height);
        drawDot(dot);
      });

      connectDots();
      requestAnimationFrame(animate);
    }

    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots.splice(0, dots.length, ...Array.from({ length: 300 }, () => createDot(canvas.width, canvas.height, colors)));
    });

    animate();
  }, []);

  return <canvas ref={canvasRef} className="bille-canvasM7" />;
};

export default BilleM7;
