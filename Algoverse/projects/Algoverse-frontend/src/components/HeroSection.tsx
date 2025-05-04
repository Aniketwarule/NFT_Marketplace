
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const floatingElements = [
  { x: '15%', y: '20%', size: 20, delay: 0, shape: 'hexagon' },
  { x: '80%', y: '65%', size: 28, delay: 1, shape: 'octagon' },
  { x: '25%', y: '75%', size: 15, delay: 2, shape: 'diamond' },
  { x: '70%', y: '15%', size: 22, delay: 3, shape: 'hexagon' },
  { x: '50%', y: '50%', size: 32, delay: 2, shape: 'octagon' },
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex flex-col justify-center items-center px-6 py-12 md:py-24 text-center">
      {/* Animated Background Elements */}
      {floatingElements.map((el, index) => (
        <div 
          key={index}
          className={cn(
            "absolute opacity-30 bg-algo-primary filter blur-sm",
            el.shape,
            "animate-float"
          )}
          style={{
            width: `${el.size}px`,
            height: `${el.size}px`,
            left: el.x,
            top: el.y,
            animationDelay: `${el.delay}s`,
          }}
        ></div>
      ))}
      
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-algo-primary/10 via-transparent to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative max-w-4xl space-y-8 z-10">
        <div className={cn(
          "transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="px-4 py-2 rounded-full border border-algo-primary/30 bg-algo-primary/10 text-algo-primary inline-flex items-center text-sm mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            The next generation NFT marketplace
          </span>
        </div>
        
        <h1 className={cn(
          "text-4xl md:text-6xl lg:text-7xl font-bold leading-tight gradient-text",
          "bg-clip-text text-transparent bg-gradient-to-r from-algo-primary to-algo-accent",
          "transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Discover, Collect & Sell <br className="hidden md:block" />
          Extraordinary NFTs
        </h1>
        
        <p className={cn(
          "text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto",
          "transition-all duration-700 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          AlgoVerse is the premier marketplace on Algorand blockchain for NFTs —
          where art, culture, and technology converge.
        </p>
        
        <div className={cn(
          "flex flex-col md:flex-row items-center justify-center gap-4 mt-8",
          "transition-all duration-700 delay-900",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-glow rounded-full blur-xl opacity-30"></div>
            <div className="relative bg-secondary/50 flex items-center rounded-full border border-algo-primary/20 px-4">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search collections, artists or NFTs..."
                className="bg-transparent border-0 py-3 px-3 w-full focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Button className="btn-glow bg-algo-primary hover:bg-algo-primary/90 text-white w-full md:w-auto">
            Explore NFTs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className={cn(
          "flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground",
          "transition-all duration-700 delay-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">24k+</span>
            <span>Artworks</span>
          </div>
          <div className="h-10 w-px bg-border/50"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">8.5k+</span>
            <span>Artists</span>
          </div>
          <div className="h-10 w-px bg-border/50"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">45.8k+</span>
            <span>Collectors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
