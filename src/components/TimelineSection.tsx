import React from 'react';
import { Globe, Star } from 'lucide-react';

interface TimelineSectionProps {
  className?: string;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ className = '' }) => {
  return (
    <section className={`px-4 sm:px-6 py-20 sm:py-28 lg:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-center mb-16 sm:mb-20 lg:mb-24 text-white">
          Lorem ipsum dolor
        </h2>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="xl:col-span-1">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-white leading-tight">
              Lorem ipsum dolor sit amet, consectetur.
            </h3>
            <p className="text-white/70 mb-10 sm:mb-12 leading-relaxed text-base sm:text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /><br />
              Vestibulum at est ut odio cursus efficitur.
            </p>
            
            {/* Timeline Items */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white/60 text-sm mb-1">Lorem ipsum dolor</div>
                  <div className="text-white text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur.</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white/60 text-sm mb-1">Lorem ipsum dolor</div>
                  <div className="text-white text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur.</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Blog Cards */}
          <div className="xl:col-span-2 space-y-6">
            {/* First Blog Card */}
            <div className="card-gradient glass-effect rounded-[15px] sm:rounded-[20px] overflow-hidden">
              {/* Featured Image */}
              <div className="h-48 sm:h-60 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6">
                  <span className="inline-block bg-white/10 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm">
                    Análise de dados
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-white leading-tight">
                  Como a DriveData transforma a gestão de picking com inteligência Visual 3D
                </h3>
                <p className="text-white/60 text-sm mb-4 sm:mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at est ut odio.
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
                  </div>
                  <span className="text-sm text-white/60">Letícia Smirelli</span>
                </div>
              </div>
            </div>
            
            {/* Second Blog Card */}
            <div className="card-gradient glass-effect rounded-[20px] overflow-hidden">
              {/* Featured Image */}
              <div className="h-60 bg-gradient-to-br from-green-900/50 to-teal-900/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    Análise de dados
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-medium mb-4 text-white leading-tight">
                  Como a DriveData transforma a gestão de picking com inteligência Visual 3D
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at est ut odio.
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                  </div>
                  <span className="text-sm text-white/60">Letícia Smirelli</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
