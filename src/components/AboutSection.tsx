import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-3d px-4 md:px-20 lg:px-40 py-20 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-700 ease-out">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          About <span className="text-cyan-400 drop-shadow-[0_0_8px_#00E8F8]">Me</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-center text-slate-300">
I'm Vasanth K, a Computer Science student passionate about frontend development and UI/UX design.
Skilled in building responsive, high-performance web applications using technologies like React, TypeScript, Vite, and the MERN stack. I enjoy creating clean, user-friendly interfaces and solving real-world problems through code.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;