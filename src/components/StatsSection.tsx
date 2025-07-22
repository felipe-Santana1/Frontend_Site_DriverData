import React from 'react';
import { Globe } from 'lucide-react';

interface StatsSection {
  className?: string;
}

const StatsSection: React.FC<StatsSection> = ({ className = '' }) => {
  return (
    <section className={`px-4 sm:px-6 py-12 sm:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Text */}
          <div className="bg-[#171717] rounded-xl lg:rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Icon with background circle */}
            <div className="absolute top-6 sm:top-8 lg:top-10 left-6 sm:left-12 lg:left-24 w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 rounded-full bg-white flex items-center justify-center z-10">
              <Globe className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-[#171717]" />
            </div>
            
            <div className="mt-16 sm:mt-18 lg:mt-20 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-medium mb-4 lg:mb-6 text-white">Lorem ipsum dolor sit amet</h2>
              <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam urna, 
                pharetra at ex in, viverra sollicitudin ipsum. Pellentesque est risus, 
                feugiat quis maximus at, laoreet non metus. Suspendisse non magna a nulla 
                accumsan euismod.
              </p>
            </div>
          </div>
          
          {/* Right Stats */}
          <div className="bg-[#171717] rounded-xl lg:rounded-2xl p-8 lg:p-12">
            <div className="space-y-8 lg:space-y-12">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-3">+50</div>
                <div className="text-base lg:text-lg text-white/80">Lorem ipsum dolor</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-3">+100</div>
                <div className="text-base lg:text-lg text-white/80">Lorem ipsum dolor</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-3">+12 Mil</div>
                <div className="text-base lg:text-lg text-white/80">Lorem ipsum dolor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
