import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-slate-900/90 z-50 shadow-md border-b border-slate-700/50">
      <div className="flex justify-between items-center px-6 md:px-20 lg:px-40 h-16">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0602 29.6128C17.537 28.3229 16.5815 27.2551 15.3575 26.5922C14.1335 25.9293 12.7171 25.7126 11.3509 25.9792C9.98474 26.2458 8.75374 26.9792 7.8688 28.0536C6.98386 29.1281 6.50003 30.4768 6.5002 31.8688C6.5002 32.485 6.37364 33.0947 6.12836 33.66C5.88308 34.2253 5.52431 34.7342 5.07428 35.1551C4.62426 35.5761 4.09257 35.9001 3.51218 36.1072C2.93178 36.3142 2.31505 36.3999 1.7002 36.3588C2.68909 38.0767 4.21746 39.4201 6.04804 40.1804C7.87862 40.9407 9.90901 41.0754 11.824 40.5636C13.739 40.0518 15.4314 38.9221 16.6386 37.3499C17.8458 35.7778 18.5002 33.851 18.5002 31.8688C18.5002 31.0708 18.3442 30.3088 18.0602 29.6128ZM18.0602 29.6128C20.4382 28.8025 22.7125 27.715 24.8362 26.3728M14.7502 26.3228C15.5607 23.9398 16.6496 21.6607 17.9942 19.5328M24.8342 26.3728C28.6267 23.9763 31.8729 20.8091 34.3622 17.0768L42.1142 5.4488C42.4112 5.00592 42.5452 4.47369 42.4933 3.94299C42.4415 3.41229 42.2071 2.91604 41.83 2.53899C41.453 2.16194 40.9567 1.92748 40.426 1.87565C39.8953 1.82382 39.3631 1.95783 38.9202 2.2548L27.2922 10.0088C23.5592 12.4978 20.3913 15.7441 17.9942 19.5368C21.0376 20.8984 23.4726 23.3334 24.8342 26.3768" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="text-white text-2xl font-extrabold">Portfolio.</div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="absolute right-0 top-16 bg-slate-900/95 backdrop-blur-md shadow-lg rounded-md w-48 border border-slate-600">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block px-4 py-3 hover:text-cyan-400 transition-colors border-b border-slate-600 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-16 text-slate-100">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;