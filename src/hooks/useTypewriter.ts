import { useState, useEffect } from 'react';

export const useTypewriter = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["Frontend Developer", "UI/UX Designer"];

  useEffect(() => {
    const typeEffect = () => {
      const current = roles[roleIndex];
      setTypewriterText(current.slice(0, charIndex));
      
      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
      
      const timeout = setTimeout(() => {
        setCharIndex(prev => isDeleting ? prev - 1 : prev + 1);
      }, isDeleting ? 50 : 100);

      return () => clearTimeout(timeout);
    };

    typeEffect();
  }, [charIndex, isDeleting, roleIndex, roles]);

  return { typewriterText };
};