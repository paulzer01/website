"use client"; // Ensure this is a Client Component if using Next.js App Router

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  typingDelay?: number;
  deletingDelay?: number;
  pauseDelay?: number;
  infinite?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typingDelay = 150,
  deletingDelay = 100,
  pauseDelay = 2000,
  infinite = false,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingDelay);
    } else if (!isDeleting && currentIndex === text.length) {
      if (infinite) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else if (isDeleting && currentIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, deletingDelay);
    } else if (isDeleting && currentIndex === 0) {
      if (infinite) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, pauseDelay);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    typingDelay,
    deletingDelay,
    pauseDelay,
    infinite,
    text,
  ]);

  return (
    <span className="text-xl">
      {/* {`.`} */}
      {currentText}
    </span>
  );
};

export default Typewriter;
