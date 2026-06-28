import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

const projects = [
  {
    id: "01",
    client: "Client",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    id: "02",
    client: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    id: "03",
    client: "Client",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }

];

const ProjectCard = ({ project, index, totalCards, progress }: { project: any, index: number, totalCards: number, progress: any }) => {
  // The cards should scale down when the user scrolls past them
  const targetScale = 1 - (totalCards - 1 - index) * 0.05;

  // Create an input range based on the index. 
  const scale = useTransform(
    progress,
    [index * (1 / totalCards), 1],
    [1, targetScale]
  );

  return (
    <div className="sticky w-full flex items-center justify-center" style={{ top: `calc(10vh + ${index * 21}px)`, height: '85vh' }}>
      <motion.div
        style={{ scale }}
        className="w-full h-full max-w-7xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 shadow-2xl origin-top"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <span className="text-[#D7E2EA] font-black text-[clamp(3rem,10vw,140px)] leading-none -mb-4 md:-mb-8">
              {project.id}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-sm">
                ({project.client})
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-none">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="flex flex-row gap-4 sm:gap-6 flex-1 min-h-[200px]">
          <div className="w-[40%] flex flex-col gap-4 sm:gap-6 h-full">
            <div
              className="w-full bg-cover bg-center rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20 shrink-0"
              style={{ backgroundImage: `url(${project.images.col1_1})`, height: 'clamp(130px, 16vw, 230px)' }}
            />
            <div
              className="w-full flex-1 bg-cover bg-center rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20"
              style={{ backgroundImage: `url(${project.images.col1_2})` }}
            />
          </div>
          <div
            className="w-[60%] h-full bg-cover bg-center rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20"
            style={{ backgroundImage: `url(${project.images.col2})` }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-40 -mt-10 sm:-mt-12 md:-mt-14">
      <div className="pt-20 sm:pt-24 md:pt-32 px-5 sm:px-8 md:px-10">
        <FadeIn y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
            Project
          </h2>
        </FadeIn>
      </div>

      <div ref={containerRef} className="px-5 sm:px-8 md:px-10 relative">
        { }
        <div className="flex flex-col items-center pb-[20vh]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length + 1}
              progress={scrollYProgress}
            />
          ))}
          {}
          {}
          <div className="h-screen w-full flex-shrink-0 pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
