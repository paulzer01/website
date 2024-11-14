"use client";

import { useEffect } from "react";

export default function MatrixCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const chars = "0123456789ABCDEF";
    const trail: HTMLDivElement[] = [];

    function createMatrixChar(x: number, y: number) {
      const char = document.createElement("div");
      char.className = "matrix-char";
      char.style.left = x + "px";
      char.style.top = y + "px";
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      document.body.appendChild(char);

      trail.push(char);
      if (trail.length > 50) {
        const oldChar = trail.shift();
        if (oldChar) {
          oldChar.style.opacity = "0";
          setTimeout(() => oldChar.remove(), 1000);
        }
      }

      setTimeout(() => {
        char.style.opacity = "0";
      }, 500);
    }

    function handleMouseMove(e: MouseEvent) {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        if (Math.random() > 0.5) {
          createMatrixChar(e.clientX, e.clientY);
        }
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="cursor" />;
}
