import React from 'react';

interface TeamSectionProps {
  className?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ className = '' }) => {
  const teamMembers = [
    { 
      name: "Karine Lago", 
      image: "/images/karine-consultoria.png",
      title: "Microsoft MVP",
      specialty: "Especialista em\nPower BI e Excel"
    },
    { 
      name: "Letícia Smirelli", 
      image: "/images/leticia-consultoria.png",
      title: "Microsoft MVP",
      specialty: "Especialista em\nPower BI e Excel"
    },
    { 
      name: "Tamires Silva", 
      image: "/images/tamires-consultoria.png",
      title: "Microsoft MVP", 
      specialty: "Especialista em\nPower BI e Excel"
    }
  ];

  return (
    <section className={`px-4 sm:px-6 py-20 sm:py-28 lg:py-32 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 lg:mb-8 text-white">Lorem ipsum dolor</h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
            dapibus fermentum neque non tristique.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center max-w-[248px] w-full">
              {/* Profile Image */}
              <div className="relative mb-6 sm:mb-8">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-[248/283] object-cover rounded-t-lg"
                />
              </div>
              
              {/* Member Info */}
              <div className="space-y-3 sm:space-y-4 px-2">
                {/* Title */}
                <div className="text-sm text-white/60 font-normal">{member.title}</div>
                
                {/* Name */}
                <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-white">{member.name}</div>
                
                {/* Specialty */}
                <div className="text-sm sm:text-base text-white/80 leading-relaxed whitespace-pre-line">
                  {member.specialty}
                </div>
                
                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-4 sm:mt-6">
                  {/* TikTok */}
                  <div className="w-8 h-8 bg-[#131316] rounded-lg flex items-center justify-center hover:bg-[#1a1a1e] transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#54DA89] to-[#0A96EC] rounded-sm"></div>
                  </div>
                  
                  {/* Instagram */}
                  <div className="w-8 h-8 bg-[#131316] rounded-lg flex items-center justify-center hover:bg-[#1a1a1e] transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#54DA89] to-[#0A96EC] rounded-sm"></div>
                  </div>
                  
                  {/* Threads */}
                  <div className="w-8 h-8 bg-[#131316] rounded-lg flex items-center justify-center hover:bg-[#1a1a1e] transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#54DA89] to-[#0A96EC] rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
