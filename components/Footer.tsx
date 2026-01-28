import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-white font-black text-3xl mb-2 tracking-tight">iLoveGCR</h3>
          <p className="text-base font-medium">Open-source project by Shawn Paul Stanley</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="mailto:shawnpaulstanley@gmail.com"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-sm border border-transparent hover:border-gray-200"
            title="Contact Support"
          >
            <Mail className="w-5 h-5" />
            <span>Support</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/shawn-paul-stanley/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-[#0077b5] hover:text-white transition-all duration-300 font-bold text-sm border border-transparent hover:border-[#0077b5]"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a 
            href="https://github.com/ShawnPaulStanley/ilovegcr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-brand-yellow hover:text-gray-900 transition-all duration-300 font-bold text-sm border border-transparent hover:border-brand-yellow"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm font-medium text-gray-600">
        <p>&copy; {new Date().getFullYear()} iLoveGCR. Not affiliated with Google or Google Classroom.</p>
      </div>
    </footer>
  );
};