'use client';

const steps = [
  {
    phase: "Phase 01",
    title: "Discovery",
    desc: "We deep dive into your business model, competitors, and revenue goals. We don't start coding until we know exactly what 'Winning' looks like for you."
  },
  {
    phase: "Phase 02",
    title: "Architecture",
    desc: "We design the wireframes and technical infrastructure. This is the blueprint phase where we decide the tech stack (Next.js, Supabase, Shopify) based on scalability."
  },
  {
    phase: "Phase 03",
    title: "Development",
    desc: "Our engineers build your site using component-driven architecture. We prioritize clean code, 100/100 Google Lighthouse scores, and fluid animations."
  },
  {
    phase: "Phase 04",
    title: "Launch",
    desc: "We handle the server deployment, domain configuration, and SEO indexing. We provide you with a recorded training session on how to manage your new asset."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-4 md:px-12 bg-[#111] text-[#F3F3F3]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-24">
          <h2 className="font-[family-name:var(--font-syne)] text-6xl md:text-8xl font-black uppercase">
            The Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-6 group hover:opacity-100 transition-opacity">
              <div className="w-full h-[1px] bg-white/20 group-hover:bg-white transition-colors duration-500" />
              
              <span className="font-mono text-sm text-indigo-400 tracking-widest uppercase">
                {step.phase}
              </span>
              
              <h3 className="font-[family-name:var(--font-syne)] text-4xl font-bold">
                {step.title}
              </h3>
              
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

