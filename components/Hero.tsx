import React from 'react';
import { Download, ChevronDown, FileText, Image as ImageIcon, Video, FileSpreadsheet, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToInstall = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative bg-brand-green text-white overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Gradient & Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-[#1e8f5a] to-brand-dark"></div>
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Floating Background Icons - Visualizing "Files" */}
      <div className="absolute top-1/4 left-10 md:left-20 opacity-20 animate-bounce-slow pointer-events-none">
        <FileText className="w-24 h-24 transform -rotate-12" />
      </div>
      <div className="absolute bottom-1/3 right-10 md:right-20 opacity-20 animate-bounce-slow delay-300 pointer-events-none">
        <FileSpreadsheet className="w-32 h-32 transform rotate-12" />
      </div>
      <div className="absolute top-20 right-1/4 opacity-10 animate-pulse delay-100 pointer-events-none">
        <ImageIcon className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 left-1/3 opacity-10 animate-pulse delay-200 pointer-events-none">
        <Video className="w-20 h-20" />
      </div>

      {/* Abstract Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-yellow rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
        <div className="inline-block mb-8 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 animate-fade-in-up shadow-lg">
          <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
            The Ultimate Student Tool
          </span>
        </div>

        {/* Updated Title: Massive sans-serif bold styling */}
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter mb-8 opacity-0 animate-fade-in-up delay-100 drop-shadow-2xl text-white selection:bg-white selection:text-brand-green leading-[0.9] transform scale-100 hover:scale-[1.02] transition-transform duration-500">
          iLoveGCR
        </h1>
        
        <p className="text-2xl md:text-3xl font-bold text-brand-light mb-14 max-w-3xl mx-auto leading-tight opacity-0 animate-fade-in-up delay-200">
          Download all your <span className="bg-white/10 px-3 rounded-lg text-brand-yellow border border-white/10">Google Classroom</span> files in one click.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up delay-300 pb-10">
          {/* Enhanced 3D "Push" Button */}
          <a
            href="/ilovegcr.zip"
            download
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-brand-yellow text-gray-900 text-xl font-black rounded-2xl transition-all duration-200 hover:-translate-y-1 active:translate-y-1 border-b-[6px] border-[#D99F00] active:border-b-0 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] active:shadow-none hover:bg-[#FFD12E] min-w-[280px] justify-center"
          >
            <Download className="w-7 h-7 stroke-[3] group-hover:animate-bounce" />
            <span className="tracking-wide">DOWNLOAD NOW</span>
            
            {/* Glossy highlight effect */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-white/30 pointer-events-none"></div>
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none"></div>
          </a>

          {/* Secondary GitHub Button */}
          <a
             href="https://github.com/ShawnPaulStanley/ilovegcr"
             target="_blank"
             rel="noopener noreferrer"
             className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white text-xl font-bold rounded-2xl transition-all duration-200 hover:bg-white/20 hover:-translate-y-1 border-2 border-white/30 hover:border-white min-w-[280px] justify-center"
          >
            <Github className="w-7 h-7" />
            <span>View Source</span>
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-4 opacity-60 animate-fade-in-up delay-300">
           <p className="text-sm font-semibold text-brand-light flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span> Version 1.0
           </p>
           <p className="text-sm font-semibold text-brand-light flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span> Free & Open Source
           </p>
           <p className="text-sm font-semibold text-brand-light flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span> No Sign-up Required
           </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={scrollToInstall}>
        <ChevronDown className="w-10 h-10 text-white" />
      </div>
    </header>
  );
};