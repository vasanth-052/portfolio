import React from 'react';
import { certificates } from '../data/certificatesData';

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="scroll-3d px-4 md:px-20 lg:px-40 py-20 bg-slate-900 transition-all duration-700 ease-out">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-cyan-400 drop-shadow-[0_0_8px_#00E8F8]">Certifications</span>
      </h2>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <ul className="space-y-4">
          {certificates.map((cert, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-400 transition-all"
              >
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificatesSection;
