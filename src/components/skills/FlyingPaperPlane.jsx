import React, { useEffect, useRef } from "react";

const FlyingPaperPlane = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const plane = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: 10,
      speed: 1.5,
      angle: 0,
      targetX: null,
      targetY: null,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
    };

    function drawPlane(x, y, angle) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();

      // Paper plane design
      ctx.moveTo(plane.size, 0);
      ctx.lineTo(-plane.size, plane.size / 2);
      ctx.lineTo(-plane.size * 0.7, 0);
      ctx.lineTo(-plane.size, -plane.size / 2);
      ctx.lineTo(plane.size, 0);

      // Wing details
      ctx.moveTo(0, 0);
      ctx.lineTo(-plane.size * 0.7, plane.size / 3);
      ctx.moveTo(0, 0);
      ctx.lineTo(-plane.size * 0.7, -plane.size / 3);

      // Tail
      ctx.moveTo(-plane.size, 0);
      ctx.lineTo(-plane.size - plane.size * 0.3, plane.size * 0.2);
      ctx.lineTo(-plane.size - plane.size * 0.3, -plane.size * 0.2);
      ctx.lineTo(-plane.size, 0);

      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    function updateAutonomousMovement() {
      // Gradually change direction
      plane.dx += (Math.random() - 0.5) * 0.02;
      plane.dy += (Math.random() - 0.5) * 0.02;

      // Normalize direction vector
      const length = Math.sqrt(plane.dx * plane.dx + plane.dy * plane.dy);
      plane.dx /= length;
      plane.dy /= length;

      // Update position
      plane.x += plane.dx * plane.speed;
      plane.y += plane.dy * plane.speed;

      // Update angle smoothly
      const targetAngle = Math.atan2(plane.dy, plane.dx);
      const angleDiff = targetAngle - plane.angle;
      plane.angle += angleDiff * 0.1; // Adjust this value to change rotation speed

      // Wrap around screen edges
      if (plane.x > canvas.width) plane.x = 0;
      if (plane.x < 0) plane.x = canvas.width;
      if (plane.y > canvas.height) plane.y = 0;
      if (plane.y < 0) plane.y = canvas.height;
    }

    function updatePlanePosition() {
      if (plane.targetX !== null && plane.targetY !== null) {
        const dx = plane.targetX - plane.x;
        const dy = plane.targetY - plane.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > plane.speed) {
          const ratio = plane.speed / distance;
          plane.x += dx * ratio;
          plane.y += dy * ratio;
          plane.angle = Math.atan2(dy, dx);
        } else {
          plane.x = plane.targetX;
          plane.y = plane.targetY;
          plane.targetX = null;
          plane.targetY = null;
        }
      } else {
        updateAutonomousMovement();
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updatePlanePosition();
      drawPlane(plane.x, plane.y, plane.angle);

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    function handleClick(event) {
      const rect = canvas.getBoundingClientRect();
      plane.targetX = event.clientX - rect.left;
      plane.targetY = event.clientY - rect.top;
    }

    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default FlyingPaperPlane;
