import { FadeIn } from './FadeIn';

const services = [
  {
    num: "01",
    title: "Autonomous AI Agents",
    desc: "Custom-built, intelligent agents designed to automate your customer support, lead generation, and internal workflows 24/7."
  },
  {
    num: "02",
    title: "High-Performance Web",
    desc: "Lightning-fast, visually stunning web applications and landing pages optimized for conversion and seamless user experiences."
  },
  {
    num: "03",
    title: "AI Software Integration",
    desc: "Seamlessly connect powerful AI models (like OpenAI, Claude, or Gemini) into your existing software infrastructure and daily operations."
  },
  {
    num: "04",
    title: "Workflow Automation",
    desc: "Eliminate manual data entry and repetitive tasks. I build custom automation pipelines that save your team hundreds of hours per month."
  },
  {
    num: "05",
    title: "AI Strategy & Consulting",
    desc: "Not sure where to start? I audit your current business processes and provide a strategic roadmap for adopting AI effectively and profitably."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30 -mt-10">
      <FadeIn y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, index) => (
          <FadeIn key={service.num} delay={index * 0.1} y={30} duration={0.8} className="flex flex-col md:flex-row gap-6 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-0">
            <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none w-full md:w-1/3">
              {service.num}
            </div>

            <div className="flex flex-col justify-center gap-3 md:gap-4 w-full md:w-2/3 mt-2 md:mt-0">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                {service.title}
              </h3>
              <p className="text-[#0C0C0C]/60 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
