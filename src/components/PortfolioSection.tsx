import React from 'react';
import { projects } from '../data/projectsData';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="scroll-3d px-4 md:px-20 lg:px-40 py-20 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-700 ease-out">
      <h2 className="text-4xl font-bold text-center mb-14">
        My <span className="text-cyan-400 drop-shadow-[0_0_8px_#00E8F8]">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(0,232,248,0.2)] transition-all duration-300 group hover:scale-105"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl text-cyan-300 font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;