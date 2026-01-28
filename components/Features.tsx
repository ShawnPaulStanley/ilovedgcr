import React from 'react';
import { Layers, MousePointerClick, GraduationCap, ShieldCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-50 hover:border-brand-yellow transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center h-full">
    <div className="p-5 bg-brand-light rounded-2xl text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 shadow-inner">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-gray-900 mb-4">{title}</h3>
    <p className="text-lg text-gray-600 font-medium leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle Geometric Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-md bg-brand-green/10 text-brand-dark font-bold tracking-widest uppercase text-xs mb-4">Why Use It?</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">Supercharge Your Workflow</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <FeatureCard
            icon={<Layers className="w-8 h-8 stroke-[2.5]" />}
            title="Bulk Download"
            description="Grab all assignments, PDFs, and attachments from any class stream instantly."
          />
          <FeatureCard
            icon={<MousePointerClick className="w-8 h-8 stroke-[2.5]" />}
            title="One-Click"
            description="Simple, intuitive design. No complex configurations needed to get started."
          />
          <FeatureCard
            icon={<GraduationCap className="w-8 h-8 stroke-[2.5]" />}
            title="Native Feel"
            description="Works directly inside the Google Classroom interface for a seamless experience."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-8 h-8 stroke-[2.5]" />}
            title="Privacy First"
            description="Runs entirely in your browser. No data is ever collected or sent to external servers."
          />
        </div>
      </div>
    </section>
  );
};