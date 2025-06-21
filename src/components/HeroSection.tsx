import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { socialIcons } from '../data/socialData';

const roles = ['Frontend Developer', 'UI/UX Designer'];

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex <= currentRole.length) {
        setText(currentRole.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex >= 0) {
        setText(currentRole.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="pt-32 px-4 md:px-20 lg:px-40 min-h-screen flex flex-col-reverse lg:flex-row items-center gap-10 relative z-10"
    >
      <div className="flex flex-col gap-6 max-w-xl animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
          Hello, I'm{' '}
          <span className="text-cyan-400 drop-shadow-[0_0_8px_#00E8F8] animate-pulse">
            Vasanth
          </span>
        </h1>

        <div className="text-cyan-400 text-2xl sm:text-3xl font-extrabold min-h-[2.5rem]">
          <span>{text}</span>
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-base sm:text-lg text-justify leading-relaxed text-slate-300">
          Creating impactful and visually engaging digital experiences with
          modern tech and design principles.
        </p>

        <div className="flex gap-4 pt-2">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="group relative p-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,232,248,0.3)] hover:scale-110"
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {social.icon}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
            </a>
          ))}
        </div>

        <a
          href="public/resume.pdf"
          download
          className="group relative overflow-hidden px-6 py-3 bg-cyan-400 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,232,248,0.5)] hover:scale-105 w-fit"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          <span className="relative flex items-center gap-2">
            See my resume
            <ExternalLink className="w-4 h-4" />
          </span>
        </a>
      </div>

      <div className="relative">
        <img
          src="/image.png"
          className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-full shadow-[0px_0px_30px_10px_rgba(0,232,248,0.25)] border-4 border-cyan-400/20"
          alt="Vasanth K - Frontend Developer"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
