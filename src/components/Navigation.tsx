import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Soluções', href: '#' },
    { label: 'Cases', href: '#' },
    { label: 'Clientes', href: '#' },
    { label: 'Blog', href: '#' }
  ];

  return (
    <nav className={`px-4 sm:px-6 py-4 sm:py-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gradient-bg glass-navigation rounded-full px-4 sm:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/drivedata-logo.svg" alt="Drive Data" className="h-6 sm:h-7" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className={`text-sm text-white${index === 0 ? ' font-medium' : '/80 font-medium'} hover:text-white transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Desktop CTA Button */}
          <button className="hidden sm:block bg-white text-[#040509] px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
            Entrar em contato
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-50 mt-2 mx-4 sm:mx-6">
            <div className="gradient-bg glass-navigation rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href} 
                    className={`text-base text-white${index === 0 ? ' font-medium' : '/80 font-medium'} hover:text-white transition-colors py-2 border-b border-white/10 last:border-b-0`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Mobile CTA Button */}
                <button 
                  className="bg-white text-[#040509] px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
