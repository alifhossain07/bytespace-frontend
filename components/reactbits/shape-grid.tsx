"use client";

import React, { useRef, useEffect } from "react";
import "./shape-grid.css";

interface ShapeGridProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal";
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  maxCols?: number;
  numCols?: number;
  numRows?: number;
  hoverFillColor?: string;
  shape?: "square" | "hexagon" | "circle" | "triangle";
  hoverTrailAmount?: number;
  className?: string;
}

export const ShapeGrid: React.FC<ShapeGridProps> = ({
  direction = "right",
  speed = 0,
  borderColor = "rgba(255, 255, 255, 0.15)",
  squareSize = 96,
  maxCols = 14,
  numCols,
  numRows,
  hoverFillColor = "rgba(203, 252, 1, 0.08)",
  shape = "square",
  hoverTrailAmount = 3,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hoveredSquare = useRef<{ x: number; y: number } | null>(null);
  const trailCells = useRef<Array<{ x: number; y: number }>>([]);
  const cellOpacities = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Helper to calculate square size ensuring numCols or maxCols constraint
    const getSquareSize = () => {
      const w = canvas.width;
      if (numCols && numCols > 0 && w > 0) {
        return Math.max(10, w / numCols);
      }
      if (maxCols && maxCols > 0 && w > 0) {
        return Math.max(80, Math.ceil(w / maxCols));
      }
      return Math.max(10, squareSize);
    };

    const isHex = shape === "hexagon";
    const isTri = shape === "triangle";

    const drawHex = (cx: number, cy: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const vx = cx + size * Math.cos(angle);
        const vy = cy + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(vx, vy);
        else ctx.lineTo(vx, vy);
      }
      ctx.closePath();
    };

    const drawCircle = (cx: number, cy: number, size: number) => {
      ctx.beginPath();
      ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
      ctx.closePath();
    };

    const drawTriangle = (cx: number, cy: number, size: number, flip: boolean) => {
      ctx.beginPath();
      if (flip) {
        ctx.moveTo(cx, cy + size / 2);
        ctx.lineTo(cx + size / 2, cy - size / 2);
        ctx.lineTo(cx - size / 2, cy - size / 2);
      } else {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy + size / 2);
      }
      ctx.closePath();
    };

    const drawGrid = () => {
      if (!canvas || !ctx || canvas.width <= 0 || canvas.height <= 0) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const effectiveSize = Math.max(10, getSquareSize());
      const hexHoriz = Math.max(10, effectiveSize * 1.5);
      const hexVert = Math.max(10, effectiveSize * Math.sqrt(3));

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;

        const cols = Math.min(100, Math.max(1, Math.ceil(canvas.width / hexHoriz) + 2));
        const rows = Math.min(100, Math.max(1, Math.ceil(canvas.height / hexVert) + 2));

        for (let col = 0; col < cols; col++) {
          for (let row = 0; row < rows; row++) {
            const cx = col * hexHoriz + offsetX;
            const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;

            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawHex(cx, cy, effectiveSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }

            drawHex(cx, cy, effectiveSize);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else if (isTri) {
        const halfW = Math.max(10, effectiveSize / 2);
        const triH = Math.max(10, effectiveSize);
        const colShift = Math.floor(gridOffset.current.x / halfW);
        const rowShift = Math.floor(gridOffset.current.y / triH);
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % triH) + triH) % triH;

        const cols = Math.min(100, Math.max(1, Math.ceil(canvas.width / halfW) + 2));
        const rows = Math.min(100, Math.max(1, Math.ceil(canvas.height / triH) + 2));

        for (let col = 0; col < cols; col++) {
          for (let row = 0; row < rows; row++) {
            const cx = col * halfW + offsetX;
            const cy = row * triH + triH / 2 + offsetY;
            const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;

            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawTriangle(cx, cy, effectiveSize, flip);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }

            drawTriangle(cx, cy, effectiveSize, flip);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else if (shape === "circle") {
        const offsetX = ((gridOffset.current.x % effectiveSize) + effectiveSize) % effectiveSize;
        const offsetY = ((gridOffset.current.y % effectiveSize) + effectiveSize) % effectiveSize;

        const cols = Math.min(100, Math.max(1, Math.ceil(canvas.width / effectiveSize) + 2));
        const rows = Math.min(100, Math.max(1, Math.ceil(canvas.height / effectiveSize) + 2));

        for (let col = 0; col < cols; col++) {
          for (let row = 0; row < rows; row++) {
            const cx = col * effectiveSize + effectiveSize / 2 + offsetX;
            const cy = row * effectiveSize + effectiveSize / 2 + offsetY;

            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawCircle(cx, cy, effectiveSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }

            drawCircle(cx, cy, effectiveSize);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else {
        const cellW = Math.max(10, numCols && canvas.width > 0 ? canvas.width / numCols : effectiveSize);
        const cellH = Math.max(10, numRows && canvas.height > 0 ? canvas.height / numRows : (numCols ? cellW : effectiveSize));
        const offsetX = numCols ? 0 : ((gridOffset.current.x % effectiveSize) + effectiveSize) % effectiveSize;
        const offsetY = numRows ? 0 : ((gridOffset.current.y % effectiveSize) + effectiveSize) % effectiveSize;

        const cols = Math.min(100, Math.max(1, numCols || (Math.ceil(canvas.width / cellW) + 1)));
        const rows = Math.min(100, Math.max(1, numRows || (Math.ceil(canvas.height / cellH) + 1)));

        for (let col = 0; col < cols; col++) {
          for (let row = 0; row < rows; row++) {
            const sx = col * cellW + offsetX;
            const sy = row * cellH + offsetY;

            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(sx, sy, cellW, cellH);
              ctx.globalAlpha = 1;
            }

            ctx.strokeStyle = borderColor;
            ctx.strokeRect(sx, sy, cellW, cellH);
          }
        }
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w <= 0 || h <= 0) return;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      const currentSize = getSquareSize();
      numSquaresX.current = numCols || (Math.ceil(canvas.width / currentSize) + 1);
      numSquaresY.current = numRows || (Math.ceil(canvas.height / currentSize) + 1);
      drawGrid();
    };

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        resizeCanvas();
      });
      ro.observe(canvas);
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let isVisible = false;
    let isPageVisible = !document.hidden;

    const tryStart = () => {
      if (isVisible && isPageVisible && !requestRef.current) {
        requestRef.current = requestAnimationFrame(updateAnimation);
      }
    };
    const tryStop = () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };

    const updateAnimation = () => {
      if (!canvas || !ctx || canvas.width <= 0 || canvas.height <= 0) {
        requestRef.current = null;
        return;
      }

      const effectiveSize = Math.max(10, getSquareSize());
      const hexHoriz = Math.max(10, effectiveSize * 1.5);
      const hexVert = Math.max(10, effectiveSize * Math.sqrt(3));

      if (speed > 0) {
        const effectiveSpeed = speed;
        const wrapX = isHex ? hexHoriz * 2 : effectiveSize;
        const wrapY = isHex ? hexVert : isTri ? effectiveSize * 2 : effectiveSize;

        switch (direction) {
          case "right":
            gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
            break;
          case "left":
            gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX;
            break;
          case "up":
            gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY;
            break;
          case "down":
            gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
            break;
          case "diagonal":
            gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
            gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
            break;
          default:
            break;
        }
      }

      updateCellOpacities();
      drawGrid();

      // Only continue requestAnimationFrame if moving or actively fading hover trails
      const isAnimating = speed > 0 || cellOpacities.current.size > 0 || hoveredSquare.current !== null;
      if (isAnimating && isVisible && isPageVisible) {
        requestRef.current = requestAnimationFrame(updateAnimation);
      } else {
        requestRef.current = null;
      }
    };

    const updateCellOpacities = () => {
      const targets = new Map<string, number>();

      if (hoveredSquare.current) {
        targets.set(`${hoveredSquare.current.x},${hoveredSquare.current.y}`, 1);
      }

      if (hoverTrailAmount > 0) {
        for (let i = 0; i < trailCells.current.length; i++) {
          const t = trailCells.current[i];
          const key = `${t.x},${t.y}`;
          if (!targets.has(key)) {
            targets.set(key, (trailCells.current.length - i) / (trailCells.current.length + 1));
          }
        }
      }

      for (const [key] of targets) {
        if (!cellOpacities.current.has(key)) {
          cellOpacities.current.set(key, 0);
        }
      }

      for (const [key, opacity] of cellOpacities.current) {
        const target = targets.get(key) || 0;
        const next = opacity + (target - opacity) * 0.15;
        if (next < 0.005) {
          cellOpacities.current.delete(key);
        } else {
          cellOpacities.current.set(key, next);
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas || canvas.width <= 0 || canvas.height <= 0) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const effectiveSize = Math.max(10, getSquareSize());
      const hexHoriz = Math.max(10, effectiveSize * 1.5);
      const hexVert = Math.max(10, effectiveSize * Math.sqrt(3));

      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz;
        const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / hexHoriz);
        const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
        const row = Math.round((adjustedY - rowOffset) / hexVert);

        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== col ||
          hoveredSquare.current.y !== row
        ) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
          tryStart();
        }
      } else if (isTri) {
        const halfW = Math.max(10, effectiveSize / 2);
        const triH = Math.max(10, effectiveSize);
        const offsetX = ((gridOffset.current.x % halfW) + halfW) % halfW;
        const offsetY = ((gridOffset.current.y % triH) + triH) % triH;

        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / halfW);
        const row = Math.floor(adjustedY / triH);

        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== col ||
          hoveredSquare.current.y !== row
        ) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
          tryStart();
        }
      } else if (shape === "circle") {
        const offsetX = ((gridOffset.current.x % effectiveSize) + effectiveSize) % effectiveSize;
        const offsetY = ((gridOffset.current.y % effectiveSize) + effectiveSize) % effectiveSize;

        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.round(adjustedX / effectiveSize);
        const row = Math.round(adjustedY / effectiveSize);

        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== col ||
          hoveredSquare.current.y !== row
        ) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
          tryStart();
        }
      } else {
        const cellW = Math.max(10, numCols && canvas.width > 0 ? canvas.width / numCols : effectiveSize);
        const cellH = Math.max(10, numRows && canvas.height > 0 ? canvas.height / numRows : (numCols ? cellW : effectiveSize));
        const offsetX = numCols ? 0 : ((gridOffset.current.x % effectiveSize) + effectiveSize) % effectiveSize;
        const offsetY = numRows ? 0 : ((gridOffset.current.y % effectiveSize) + effectiveSize) % effectiveSize;

        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;

        const col = Math.floor(adjustedX / cellW);
        const row = Math.floor(adjustedY / cellH);

        if (numCols && (col < 0 || col >= numCols)) return;
        if (numRows && (row < 0 || row >= numRows)) return;

        if (
          !hoveredSquare.current ||
          hoveredSquare.current.x !== col ||
          hoveredSquare.current.y !== row
        ) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
          tryStart();
        }
      }
    };

    const handleMouseLeave = () => {
      if (hoveredSquare.current && hoverTrailAmount > 0) {
        trailCells.current.unshift({ ...hoveredSquare.current });
        if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount;
      }
      hoveredSquare.current = null;
      tryStart();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          drawGrid();
          tryStart();
        } else {
          tryStop();
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) {
        tryStart();
      } else {
        tryStop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    drawGrid();
    tryStart();

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      tryStop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, maxCols, numCols, numRows, shape, hoverTrailAmount]);

  return <canvas ref={canvasRef} className={`shapegrid-canvas ${className}`} />;
};

export default ShapeGrid;
