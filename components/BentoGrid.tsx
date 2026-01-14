'use client';
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers, Zap } from "lucide-react";

// Individual Card Component
const Card = ({ title, subtitle, icon: Icon, size, color }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 ${
      size === "large" ? "md:col-span-2" : "md:col-span-1"
    }`}
  >
    {/* Glow Effect on Hover */}
    <div className={`absolute -right-10 -top-10 h-64 w-64 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40 ${color}`} />
    
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
        <Icon className="h-6 w-6 text-white" />
      </div>
      
      <div>
        <h3 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="text-zinc-400">{subtitle}</p>
      </div>

      {/* "View Project" Arrow */}
      <div className="absolute top-8 right-8 opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="text-white" />
      </div>
    </div>
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section id="work" className="bg-[#030303] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-5xl">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          
          {/* Project 1: Roofing Site (Large) */}
          <Card 
            size="large"
            title="Apex Roofing Systems"
            subtitle="Conversion-focused landing page that increased leads by 140%."
            icon={Layers}
            color="bg-blue-500"
          />

          {/* Project 2: Tech Stack (Small) */}
          <Card 
            size="small"
            title="Next.js Architecture"
            subtitle="We use the latest React Server Components for speed."
            icon={Zap}
            color="bg-yellow-500"
          />

          {/* Project 3: SaaS Dashboard (Small) */}
          <Card 
            size="small"
            title="FlowState CRM"
            subtitle="Dark-mode dashboard for a high-growth SaaS startup."
            icon={Github}
            color="bg-purple-500"
          />

           {/* Project 4: Dental Site (Large) */}
           <Card 
            size="large"
            title="Lumina Dental Studio"
            subtitle="Premium aesthetic website for a luxury cosmetic dentist."
            icon={Layers}
            color="bg-cyan-500"
          />

        </div>
      </div>
    </section>
  );
}

