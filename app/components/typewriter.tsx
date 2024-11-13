"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  typingDelay?: number;
  deletingDelay?: number;
  pauseDelay?: number;
  infinite?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingDelay = 127,
  deletingDelay = 127,
  pauseDelay = 500,
  infinite = false,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentFullText = texts[currentTextIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < currentFullText.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentFullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingDelay);
    } else if (!isDeleting && currentIndex === currentFullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && currentIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, deletingDelay);
    } else if (isDeleting && currentIndex === 0) {
      const nextTextIndex = (currentTextIndex + 1) % texts.length;
      if (infinite || nextTextIndex !== 0) {
        timeout = setTimeout(() => {
          setCurrentTextIndex(nextTextIndex);
          setIsDeleting(false);
        }, pauseDelay);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    currentTextIndex,
    isDeleting,
    typingDelay,
    deletingDelay,
    pauseDelay,
    infinite,
    texts,
    currentFullText,
  ]);

  return (
    <span className="text-xl">
      <span className="opacity-0">X</span>
      {currentText}
      <span className="opacity-0">X</span>
    </span>
  );
};

export default Typewriter;
