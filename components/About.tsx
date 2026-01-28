import React from 'react';
import { Quote, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about-section" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quote className="w-96 h-96 text-gray-900" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-dark font-bold text-sm uppercase tracking-wider mb-6">
           <Code2 className="w-4 h-4" />
           Open Source Project
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
          What is iLoveGCR?
        </h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50 backdrop-blur-sm relative">
          {/* Corner decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Quote className="w-16 h-16 text-brand-green transform rotate-180" />
          </div>

          <p className="text-xl md:text-3xl font-medium text-gray-600 leading-relaxed max-w-4xl mx-auto">
            iLoveGCR is a <span className="text-brand-green font-bold relative inline-block px-1">
              free Chrome extension
              <span className="absolute bottom-0 left-0 w-full h-[6px] bg-brand-green/20 -z-10 rounded-full"></span>
            </span> designed to help students and teachers. 
            Easily download assignments, study materials, and resources 
            from Google Classroom in <span className="bg-brand-yellow px-3 py-1 rounded-lg text-gray-900 font-black shadow-sm inline-block transform -rotate-1 hover:rotate-1 transition-transform cursor-default border-2 border-transparent hover:border-gray-900">BULK</span>, saving you hours of manual work.
          </p>
        </div>
      </div>
    </section>
  );
};