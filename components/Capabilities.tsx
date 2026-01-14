'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: "01",
    title: "Digital Strategy",
    desc: "Market Analysis, Brand Positioning, Content Architecture",
    tags: ["Research", "UX Audit", "Roadmap"]
  },
  {
    num: "02",
    title: "Web Engineering",
    desc: "Next.js Development, WebGL Animations, Headless CMS",
    tags: ["React", "Node.js", "Three.js"]
  },
  {
    num: "03",
    title: "Interface Design",
    desc: "Visual Identity, Design Systems, Prototyping",
    tags: ["Figma", "Motion", "UI/UX"]
  },
  {
    num: "04",
    title: "Performance",
    desc: "SEO Optimization, Core Web Vitals, Server Scaling",
    tags: ["Analytics", "Speed", "Security"]
  }
];

export default function Capabilities() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="capabilities" className="py-32 px-4 md:px-12 bg-[#F3F3F3] text-[#111]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-[#111]/20 pb-8">
          <h2 className="font-[family-name:var(--font-syne)] text-6xl md:text-8xl font-black uppercase leading-[0.9]">
            Our <br/> Capabilities
          </h2>
          <p className="font-mono text-sm mt-8 md:mt-0 max-w-xs opacity-60 uppercase tracking-wide">
            We don&apos;t just build websites. <br/> We build digital assets that compound in value.
          </p>
        </div>

        {/* The Giant List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="group relative border-b border-[#111]/20 py-12 transition-all duration-500 hover:py-20 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                
                {/* Number & Title */}
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span className="font-mono text-sm opacity-40">({service.num})</span>
                  <h3 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-bold uppercase transition-transform duration-500 group-hover:translate-x-4">
                    {service.title}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>

              {/* Hidden Details (Reveal on Hover) */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === index ? 'max-h-40 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                <div className="pl-0 md:pl-24 flex flex-col md:flex-row gap-8">
                  <p className="text-xl max-w-md">{service.desc}</p>
                  <div className="flex gap-4">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1 rounded-full border border-[#111]/20 text-sm font-mono uppercase bg-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

