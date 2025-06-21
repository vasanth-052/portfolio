import React from 'react';
import { skills } from '../data/skillsData';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="scroll-3d px-4 md:px-20 lg:px-40 py-20 bg-slate-800 transition-all duration-700 ease-out">
      <h2 className="text-4xl font-bold text-center mb-10">
        Technical <span className="text-cyan-400 drop-shadow-[0_0_8px_#00E8F8]">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="bg-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-center text-sm hover:bg-slate-600/50 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;