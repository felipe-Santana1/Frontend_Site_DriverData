import React from 'react';

interface CompaniesProps {
  className?: string;
}

const Companies: React.FC<CompaniesProps> = ({ className = '' }) => {
  // Company logos data
  const companies = [
    { name: 'NearBuy', logo: '/images/nearbuy-logo.png' },
    { name: 'Lozios', logo: '/images/lozios-logo.png' },
    { name: 'Vibe Store', logo: '/images/vibestore-logo.png' },
    { name: 'Farmácia Vida Mais', logo: '/images/farmaciavida-logo.png' },
    { name: 'SeuMar', logo: '/images/seumar-logo.png' },
    { name: 'Boracay Store', logo: '/images/boracay-logo.png' },
  ];

  return (
    <section className={`bg-[#040509] px-4 sm:px-6 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-lg sm:text-xl text-white/60 font-light">
            Empresas que confiam na gente
          </p>
        </div>
        
        {/* Companies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-6 sm:h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                style={{ maxWidth: '100px', width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
