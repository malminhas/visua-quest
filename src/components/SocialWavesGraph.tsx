
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SocialWaveProps {
  className?: string;
  children: React.ReactNode;
}

const SocialWave: React.FC<SocialWaveProps> = ({ className, children }) => {
  return (
    <div className={cn("social-card p-6 rounded-2xl space-y-4", className)}>
      {children}
    </div>
  );
};

const SocialWavesGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    // Stagger the animations
    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-16 animate-fade-in animated-element tracking-tight">
        The 3 Waves of Social
      </h1>
      
      <div className="w-full relative mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Wave 1: Profile-first */}
          <SocialWave className="animate-fade-in animated-element">
            <div className="flex items-center space-x-2 text-wave-blue">
              <span className="font-bold text-3xl">1.</span>
              <h2 className="font-bold text-3xl">I am first</h2>
            </div>
            <div className="text-gray-600 text-lg font-medium italic">"MySpace Era"</div>
            
            <ul className="space-y-2 text-gray-700 pt-2">
              <li className="flex items-start">
                <span className="mr-2 text-wave-blue">•</span>
                <span>Personal spaces for self-expression</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-blue">•</span>
                <span>User-driven discovery</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-blue">•</span>
                <span>Human serendipity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-blue">•</span>
                <span>Digital wandering & exploration</span>
              </li>
            </ul>
            
            <div className="flex justify-between items-center mt-4 gap-2">
              <div className="aspect-square w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="MySpace Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-black rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Hi5 Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-green-500 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="DeviantArt Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-teal-400 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="LiveJournal Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-red-600 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Blogger Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </SocialWave>
          
          {/* Wave 2: Feed-first */}
          <SocialWave className="animate-fade-in animated-element">
            <div className="flex items-center space-x-2 text-wave-yellow">
              <span className="font-bold text-3xl">2.</span>
              <h2 className="font-bold text-3xl">Second wave</h2>
            </div>
            <div className="text-gray-600 text-lg font-medium italic">"Facebook Era"</div>
            
            <ul className="space-y-2 text-gray-700 pt-2">
              <li className="flex items-start">
                <span className="mr-2 text-wave-yellow">•</span>
                <span>Algorithmic content curation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-yellow">•</span>
                <span>Passive consumption</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-yellow">•</span>
                <span>Engagement metrics rule</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-yellow">•</span>
                <span>Echo chambers form</span>
              </li>
            </ul>
            
            <div className="flex justify-between items-center mt-4 gap-2">
              <div className="aspect-square w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Facebook Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Instagram Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-black rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="TikTok Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-blue-400 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Twitter Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-blue-800 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Tumblr Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </SocialWave>
          
          {/* Wave 3: Chat-first */}
          <SocialWave className="animate-fade-in animated-element">
            <div className="flex items-center space-x-2 text-wave-coral">
              <span className="font-bold text-3xl">3.</span>
              <h2 className="font-bold text-3xl">Third wave</h2>
            </div>
            <div className="text-gray-600 text-lg font-medium italic">"AI Era"</div>
            
            <ul className="space-y-2 text-gray-700 pt-2">
              <li className="flex items-start">
                <span className="mr-2 text-wave-coral">•</span>
                <span>AI-powered conversations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-coral">•</span>
                <span>Voice-first interactions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-coral">•</span>
                <span>Non-declarative discovery</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-wave-coral">•</span>
                <span>Dynamic matching</span>
              </li>
            </ul>
            
            <div className="flex justify-between items-center mt-4 gap-2">
              <div className="aspect-square w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-400 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Replika Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-pink-600 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Character.ai Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="ChatGPT Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Claude Logo" className="w-full h-full object-contain" />
              </div>
              <div className="aspect-square w-10 h-10 bg-teal-700 rounded-md flex items-center justify-center p-1">
                <img src="/lovable-uploads/9f25f7a1-64eb-463d-b1e1-1d454b7437e0.png" alt="Anthropic Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </SocialWave>
        </div>
        
        {/* SVG Wave Graph */}
        <div className="w-full mt-12 animate-scale-in animated-element">
          <svg ref={svgRef} className="w-full h-[300px]" viewBox="0 0 1000 300" preserveAspectRatio="none">
            {/* Timeline */}
            <line x1="50" y1="250" x2="950" y2="250" stroke="#333" strokeWidth="2" />
            
            {/* Timeline labels */}
            <text x="50" y="280" fill="#666" fontSize="20" textAnchor="middle">2000</text>
            <text x="500" y="280" fill="#666" fontSize="20" textAnchor="middle">2010</text>
            <text x="950" y="280" fill="#666" fontSize="20" textAnchor="middle">2020</text>
            
            {/* Y-axis */}
            <line x1="50" y1="50" x2="50" y2="250" stroke="#333" strokeWidth="2" />
            
            {/* Wave 1: Blue */}
            <path 
              className="social-wave wave-blue"
              d="M50,250 C150,250 180,50 350,50 C450,50 480,50 500,100" 
              fill="none" 
              stroke="#1E90FF" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            
            {/* Wave 2: Yellow */}
            <path 
              className="social-wave wave-yellow"
              d="M400,250 C450,250 480,50 650,50 C750,50 780,50 800,100" 
              fill="none" 
              stroke="#FFD700" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            
            {/* Wave 3: Coral */}
            <path 
              className="social-wave wave-coral"
              d="M700,250 C750,250 780,50 950,50" 
              fill="none" 
              stroke="#FF6B6B" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SocialWavesGraph;
