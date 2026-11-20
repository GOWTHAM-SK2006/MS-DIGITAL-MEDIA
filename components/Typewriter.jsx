'use client';
import { useState, useEffect } from 'react';

const WORDS = [
  'Digital Growth',
  'Brand Visibility',
  'Business Success',
  'Online Presence',
];

export default function Typewriter() {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState(WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIdx];
    let timer;

    if (!isDeleting) {
      // Completed typing the full word -> pause for reading
      if (text === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      } else {
        // Type the next character
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 90);
      }
    } else {
      // Completed deleting the word -> advance to next word
      if (text === '') {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % WORDS.length);
        }, 350);
      } else {
        // Delete one character
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 45);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIdx]);

  return (
    <span className="typewriter">
      <span className="type-text">{text}</span>
      <span className="type-cursor" aria-hidden="true" />
    </span>
  );
}
