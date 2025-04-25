import React, { useRef, useEffect, useState } from "react";
import { data } from "../helper";
import "./Carrusel.css";

export const Carrusel = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [autoSpeed] = useState(80);
  const duplicatedData = [...data, ...data, ...data];

  useEffect(() => {
    if (isDragging) return;

    let animationFrameId;
    let lastTimestamp;
    let direction = 1;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setPosition((prev) => {
        const newPos = prev + (autoSpeed * delta * direction) / 1000;
        const maxScroll = trackRef.current.scrollWidth / 3;

        if (newPos > maxScroll) direction = -1;
        else if (newPos < 0) direction = 1;

        return Math.max(0, Math.min(newPos, maxScroll));
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, autoSpeed]);

  const handleInteractionStart = (e) => {
    setIsDragging(true);
    const startX = e.clientX || e.touches[0].clientX;
    const startPos = position;
    let velocity = 0;
    let lastMoveTime = Date.now();
    let lastX = startX;

    const handleMove = (e) => {
      const now = Date.now();
      const currentX = e.clientX || e.touches[0].clientX;
      const deltaTime = now - lastMoveTime;

      if (deltaTime > 0) {
        velocity = (currentX - lastX) / deltaTime;
      }

      lastX = currentX;
      lastMoveTime = now;
      setPosition(startPos - (currentX - startX));
    };

    const handleEnd = () => {
      setIsDragging(false);

      if (Math.abs(velocity) > 0.2) {
        const inertiaDuration = 1000;
        const inertiaDistance = velocity * inertiaDuration;
        setPosition((prev) => {
          const newPos = prev - inertiaDistance;
          const maxScroll = trackRef.current.scrollWidth / 3;
          return Math.max(0, Math.min(newPos, maxScroll));
        });
      }

      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", handleEnd);
  };

  return (
    <>
      <Typewriter
        text="Pastelería con corazón, sabor con propósito!!!"
        speed={60}
        loop
      />
      <div
        className="carrusel-container"
        ref={containerRef}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <div
          className="carrusel-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${position}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
        >
          {duplicatedData.map((product, i) => (
            <div className="product-card" key={`${product.id}-${i}`}>
              <div className="product-image">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  draggable="false"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.nombre}</h3>
                {/* <p className="product-description">{product.descripcion}</p> */}
                <p className="product-price">${product.precio.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Typewriter = ({ text, speed = 50, loop = false }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed + Math.random() * 50);

      return () => clearTimeout(timeout);
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, loop]);

  return (
    <h2 className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </h2>
  );
};
