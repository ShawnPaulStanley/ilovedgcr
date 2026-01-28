import React, { useState } from 'react';
import { AlertTriangle, FolderOpen, Chrome, ToggleRight, DownloadCloud, PlayCircle, Copy, Check } from 'lucide-react';

export const Installation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('chrome://extensions');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      id: 1,
      text: "Download the ZIP file using the button above.",
      icon: <DownloadCloud className="w-6 h-6" />
    },
    {
      id: 2,
      text: "Extract (Unzip) the downloaded file to a folder.",
      icon: <FolderOpen className="w-6 h-6" />
    },
    {
      id: 3,
      text: (
        <span className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span>Open Chrome and go to</span>
          <button 
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 px-3 py-1 rounded-md text-sm font-mono text-gray-700 transition-colors group/btn cursor-pointer"
            title="Click to copy"
          >
            chrome://extensions
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500 group-hover/btn:text-gray-900" />}
          </button>
        </span>
      ),
      icon: <Chrome className="w-6 h-6" />
    },
    {
      id: 4,
      text: "Enable \"Developer Mode\" (top right toggle).",
      icon: <ToggleRight className="w-6 h-6" />
    },
    {
      id: 5,
      text: "Click \"Load unpacked\".",
      icon: <PlayCircle className="w-6 h-6" />
    },
    {
      id: 6,
      text: "Select the extracted folder.",
      icon: <FolderOpen className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-light/50 via-white to-white -z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">How to Install</h2>
          <p className="text-xl text-gray-600 font-medium">Follow these simple steps to install iLoveGCR manually.</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-100 rounded-full hidden md:block"></div>

          <div className="grid gap-6">
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-center md:items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 group">
                {/* Step Number */}
                <div className="flex-shrink-0 relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-brand-green text-brand-green text-2xl font-black mr-6 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  {step.id}
                </div>
                
                {/* Content */}
                <div className="flex-grow flex items-center justify-between mt-2">
                  <div className="text-lg md:text-xl text-gray-800 font-bold group-hover:text-brand-green transition-colors leading-tight">
                    {step.text}
                  </div>
                  <div className="hidden sm:block text-gray-300 group-hover:text-brand-yellow transition-colors ml-4 bg-gray-50 p-3 rounded-xl group-hover:bg-brand-yellow/10">
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-orange-50 border border-orange-100 rounded-2xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
           <div className="absolute -right-10 -bottom-10 opacity-10">
              <AlertTriangle className="w-48 h-48 text-orange-500" />
           </div>
          <div className="p-4 bg-white rounded-full shadow-sm relative z-10">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-xl font-black text-gray-900 mb-1">Developer Mode Warning</h4>
            <p className="text-base text-gray-700 font-medium">
              Since this extension is not from the Chrome Web Store, you may see a "Unpacked extension" warning. This is <span className="font-bold underline decoration-orange-300 decoration-2">completely normal</span> and safe for open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};