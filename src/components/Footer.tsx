import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-[#040509] px-4 sm:px-6 py-20 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Top Gradient Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-20 sm:mb-24"></div>
        
        <div className="space-y-12 sm:space-y-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8">
            {/* Logo Column */}
            <div className="lg:col-span-1">
              <img src="/images/drivedata-logo.svg" alt="Drive Data" className="h-6 sm:h-8 mb-4 sm:mb-6" />
            </div>
            
            {/* Links Column 1 */}
            <div>
              <h4 className="text-white/60 font-medium mb-4 sm:mb-6 text-sm">Lorem ipsum dolor</h4>
              <div className="space-y-2 sm:space-y-3">
                <a href="#" className="block text-white text-sm hover:text-white/80 transition-colors">Drive Data</a>
                <a href="#" className="block text-white text-sm hover:text-white/80 transition-colors">Drive Data</a>
                <a href="#" className="block text-white text-sm hover:text-white/80 transition-colors">Drive Data</a>
              </div>
            </div>
            
            {/* Links Column 2 */}
            <div>
              <h4 className="text-white/60 font-medium mb-4 sm:mb-6 text-sm">Lorem ipsum dolor</h4>
              <div className="space-y-2 sm:space-y-3">
                <a href="#" className="block text-white text-sm hover:text-white/80 transition-colors">Drive Data</a>
                <a href="#" className="block text-white text-sm hover:text-white/80 transition-colors">Drive Data</a>
                <a href="#" className="block text-white text-sm hover:text-white/80 transition-colors">Drive Data</a>
              </div>
            </div>
            
            {/* Newsletter Column */}
            <div>
              <h4 className="text-white/70 font-medium mb-4 sm:mb-6 text-sm">Email</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white/[0.01] border border-white/10 rounded-md backdrop-blur-sm">
                  <input 
                    type="email" 
                    placeholder="lorem@email.com"
                    className="w-full bg-transparent px-3 sm:px-4 py-2 sm:py-3 text-sm text-white/80 placeholder-white/48 focus:outline-none"
                  />
                </div>
                <button className="w-full bg-white text-[#040509] px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium hover:bg-white/90 transition-colors">
                  Lorem ipsum dolor
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-white/10 gap-3 sm:gap-4">
            <div className="text-sm text-white/60">drivedata.com.br</div>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-white">
              <span>DriveData © Copyright 2025</span>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <span>Feito por InnovaSfera</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
