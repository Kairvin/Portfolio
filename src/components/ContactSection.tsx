import { FadeIn } from './FadeIn';

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-white relative overflow-hidden py-20 px-6 sm:px-8 md:px-12 lg:px-20 z-50 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-[100vh] flex items-center justify-center">
      
      {/* Top Left Image */}
      <FadeIn delay={0.2} x={-50} duration={1} className="absolute top-[5%] left-[2%] md:left-[5%] w-[80px] sm:w-[120px] md:w-[160px] pointer-events-none opacity-80">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon Decoration" className="w-full grayscale" />
      </FadeIn>

      {/* Bottom Right Image */}
      <FadeIn delay={0.3} x={50} duration={1} className="absolute bottom-[5%] right-[2%] md:right-[5%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none opacity-80">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object Decoration" className="w-full grayscale" />
      </FadeIn>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <FadeIn y={30} delay={0.1}>
            <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tight mb-6">
              Let&apos;s get<br />in touch
            </h2>
          </FadeIn>
          
          <FadeIn y={30} delay={0.2}>
            <a 
              href="mailto:Kukkarkairvin@gmail.com" 
              className="text-[#0C0C0C] text-[clamp(1.5rem,3vw,2.5rem)] tracking-wide hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'var(--font-condensed)' }}
            >
              Kukkarkairvin@gmail.com
            </a>
          </FadeIn>
        </div>

        {/* Right Column (Form) */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <FadeIn y={40} delay={0.3} className="w-full">
            <form className="w-full flex flex-col border-t border-[#0C0C0C]">
              
              {/* Row 1: Full Name */}
              <div className="w-full border-b border-[#0C0C0C]">
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="w-full bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/50 px-4 py-5 md:py-6 text-lg md:text-xl font-medium outline-none focus:bg-[#0C0C0C]/5 transition-colors"
                  required
                />
              </div>

              {/* Row 2: Email & Phone */}
              <div className="w-full flex flex-col sm:flex-row border-b border-[#0C0C0C]">
                <div className="w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-[#0C0C0C]">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/50 px-4 py-5 md:py-6 text-lg md:text-xl font-medium outline-none focus:bg-[#0C0C0C]/5 transition-colors"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/50 px-4 py-5 md:py-6 text-lg md:text-xl font-medium outline-none focus:bg-[#0C0C0C]/5 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="w-full border-b border-[#0C0C0C]">
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/50 px-4 py-5 md:py-6 text-lg md:text-xl font-medium outline-none resize-none focus:bg-[#0C0C0C]/5 transition-colors"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="w-full pt-8 flex justify-start sm:justify-end">
                <button 
                  type="submit" 
                  className="px-10 py-4 rounded-full border border-[#0C0C0C] text-[#7621B0] font-bold uppercase tracking-wider hover:bg-[#0C0C0C] hover:text-white transition-all duration-300 active:scale-95 text-lg"
                >
                  Send
                </button>
              </div>

            </form>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
