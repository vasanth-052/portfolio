import React from 'react';
import { services } from '../data/servicesData';

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="scroll-3d px-4 md:px-20 lg:px-40 py-20 bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <h2 className="text-4xl font-bold text-center mb-14 tracking-wider">
        {/* Our{' '} */}
        <span className="text-cyan-400 drop-shadow-[0_0_8px_#00E8F8]">
          My Experience
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group card-3d bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-lg animate-fadeInUp"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards',
            }}
          >
            <div className="flex justify-center mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-300 group-hover:text-cyan-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
