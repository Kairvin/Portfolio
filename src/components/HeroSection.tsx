import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        {['About', 'Price', 'Projects', 'Contact'].map((link, index) => (
          <FadeIn key={link} delay={index * 0.1} y={-20} duration={0.6}>
            <a href={`#${link.toLowerCase()}`} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              {link}
            </a>
          </FadeIn>
        ))}
      </nav>

      <div className="flex flex-col pt-12 md:pt-24 relative z-40">
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40} duration={0.8} className="w-full flex justify-center">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, I&apos;m Kairvin
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        <FadeIn delay={0.35} y={20} duration={0.8}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} duration={0.8}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} duration={1} className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[360px] sm:w-[460px] md:w-[560px] lg:w-[680px]">
        <Magnet padding={200} strength={4} activeTransition="transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)">
          <img src="/Kairvin_avatar.png" alt="Kairvin 3D Avatar" className="w-full h-auto object-contain pointer-events-none drop-shadow-2xl" />
        </Magnet>
      </FadeIn>
    </section>
  );
};
