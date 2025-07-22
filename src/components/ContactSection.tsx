import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  return (
    <section className={`px-4 sm:px-6 py-20 sm:py-28 lg:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 lg:mb-10 text-white uppercase tracking-wider">
            Contato
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-16 lg:mb-20 max-w-md leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam 
            nec ante laoreet fringilla ac et quam. Nullam vitae nulla ut augue facilisis rutrum.
          </p>
          
          <div className="space-y-8 sm:space-y-10">
            {/* Address */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="mt-1">
                <MapPin className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-medium text-white mb-1">Lorem Ipsum 375</div>
                <div className="text-xl sm:text-2xl font-medium text-white">São Paulo</div>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-4 sm:gap-5">
              <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
              <div className="text-xl sm:text-2xl font-medium text-white">example@drive.com</div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-4 sm:gap-5">
              <Phone className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
              <div className="text-xl sm:text-2xl font-medium text-white">55 (14) 99999-9999</div>
            </div>
          </div>
        </div>
        
        {/* Right - Contact Form */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <input 
              type="text" 
              placeholder="Nome"
              className="w-full bg-transparent border-2 border-[#D8D8D8]/40 rounded-xl px-4 sm:px-6 py-4 sm:py-6 text-white text-base sm:text-lg placeholder-[#494949] focus:border-white/60 focus:outline-none transition-colors"
            />
            <input 
              type="text" 
              placeholder="Empresa"
              className="w-full bg-transparent border-2 border-[#D8D8D8]/40 rounded-xl px-4 sm:px-6 py-4 sm:py-6 text-white text-base sm:text-lg placeholder-[#494949] focus:border-white/60 focus:outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email"
              className="w-full bg-transparent border-2 border-[#D8D8D8]/40 rounded-xl px-4 sm:px-6 py-4 sm:py-6 text-white text-base sm:text-lg placeholder-[#494949] focus:border-white/60 focus:outline-none transition-colors"
            />
            <textarea 
              placeholder="Mensagem"
              rows={6}
              className="w-full bg-transparent border-2 border-[#D8D8D8]/40 rounded-xl px-4 sm:px-6 py-4 sm:py-6 text-white text-base sm:text-lg placeholder-[#494949] resize-none focus:border-white/60 focus:outline-none transition-colors"
            />
          </div>
          
          <button className="w-full bg-white text-[#040509] py-5 sm:py-6 rounded-xl font-bold text-lg sm:text-xl hover:bg-white/90 transition-colors">
            Fale conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
