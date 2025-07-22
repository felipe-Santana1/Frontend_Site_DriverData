import React from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`px-4 sm:px-6 py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight">
                Transforme seus dados em resultados com inteligência analítica sob medida
              </h1>
              
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
                Direcionamos o futuro do seu negócio ao revelar oportunidades estratégicas com 
                inteligência de dados, BI, Analytics e IA — para prever resultados, reduzir 
                custos e escalar seu negócio com eficiência e inovação.
              </p>
              
              <div className="inline-flex items-center bg-[#0F0F13] border-2 border-[#121216] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2">
                <span className="text-xs sm:text-sm text-white">Sua transformação digital inteligente</span>
                <div className="ml-2 sm:ml-4 w-32 sm:w-48 lg:w-[275px] h-[20px] sm:h-[30px] bg-gray-800 rounded-full sm:rounded-3xl"></div>
              </div>
            </div>
            
            <button className="btn-gradient text-[#040509] px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity w-full sm:w-auto">
              Quero uma demonstração gratuita
            </button>
          </div>
          
          {/* Right Content - Dashboard Cards */}
          <div className="space-y-4 sm:space-y-6 order-first lg:order-last">
            {/* Estoque Card */}
            <div className="card-gradient glass-effect rounded-[15px] sm:rounded-[20px] p-6 sm:p-8">
              <h3 className="text-xs sm:text-sm font-semibold text-[#7A7A7A] mb-6 sm:mb-8 tracking-wide">ESTOQUE</h3>
              
              <div className="flex items-center justify-center mb-4 sm:mb-6 relative">
                <div className="absolute w-24 sm:w-36 h-24 sm:h-36 rounded-full bg-[#FFA7C5]/30 blur-[50px] sm:blur-[70px]"></div>
                <div className="relative">
                  {/* Chart placeholder */}
                  <div className="w-64 sm:w-72 h-28 sm:h-36 mb-4 relative">
                    {/* Dashed circle */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 283 150">
                      <path
                        d="M28 27 L255 27 L255 116 L28 116"
                        stroke="white"
                        strokeWidth="1"
                        strokeDasharray="2,16"
                        fill="none"
                      />
                    </svg>
                    
                    {/* Data visualization elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl sm:text-5xl font-semibold z-10">660</div>
                    </div>
                    
                    {/* Small indicator circle */}
                    <div className="absolute top-10 sm:top-14 left-48 sm:left-60 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white border-2 border-gray-600"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-sm sm:text-base font-semibold text-white">Valor estoque por área armazenagem</p>
                <p className="text-xs sm:text-sm text-[#7A7A7A]">Última verificação em 21 de abril</p>
              </div>
            </div>
            
            {/* Gastos/Faturamento Card */}
            <div className="card-gradient glass-effect rounded-[15px] sm:rounded-[20px] p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="space-y-2 sm:space-y-4">
                  <h3 className="text-sm sm:text-base font-medium text-[#7A7A7A]">Gastos</h3>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white">Faturamento</h3>
                </div>
              </div>
              
              {/* Chart area */}
              <div className="h-32 sm:h-40 mb-4 sm:mb-6 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#464646]">
                  <span>$1000</span>
                  <span>$500</span>
                  <span>$200</span>
                  <span>$0</span>
                </div>
                
                {/* Chart bars */}
                <div className="flex items-end justify-center h-full ml-8 sm:ml-10 gap-3 sm:gap-6">
                  {[
                    { height: '60%', color: '#4A4A4A' },
                    { height: '45%', color: '#4A4A4A' },
                    { height: '80%', color: '#4A4A4A' },
                    { height: '90%', color: '#4A4A4A' },
                    { height: '75%', color: '#4A4A4A' },
                    { height: '85%', color: '#4A4A4A' },
                    { height: '100%', color: '#F6F4FE' },
                    { height: '70%', color: '#4A4A4A' },
                    { height: '65%', color: '#4A4A4A' }
                  ].map((bar, i) => (
                    <div 
                      key={i} 
                      className="rounded-sm w-6 sm:w-8" 
                      style={{ 
                        height: bar.height, 
                        backgroundColor: bar.color 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[#7A7A7A]">Ao longo do tempo</span>
                <div className="flex gap-2 sm:gap-3 text-white">
                  <span>R$350.00</span>
                  <span className="text-white">|</span>
                  <span>R$640.00</span>
                </div>
              </div>
            </div>
            
            {/* Small stats card */}
            <div className="glass-effect rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 border border-white/[0.06]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-white mb-1">R$124,20</div>
                  <div className="text-xs text-[#7A7A7A]">21 Abri, 19:59</div>
                </div>
                <div className="bg-white text-[#040509] px-2 py-1 rounded-full text-xs font-medium">
                  +3.4%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
