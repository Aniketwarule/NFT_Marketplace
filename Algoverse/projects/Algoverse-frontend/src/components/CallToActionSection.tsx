
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { ArrowRight, Upload, Wallet } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-24 px-6 md:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-algo-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-algo-accent opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-algo-primary to-algo-accent">
              Start Your NFT Journey Today
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Whether you're an artist looking to showcase your work or a collector searching for the next digital masterpiece, AlgoVerse provides the tools and community you need.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-algo-primary/10 p-2 rounded-lg mr-4">
                  <Upload className="h-5 w-5 text-algo-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Create and Sell</h3>
                  <p className="text-sm text-muted-foreground">Upload your artwork and mint NFTs with just a few clicks</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-algo-accent/10 p-2 rounded-lg mr-4">
                  <Wallet className="h-5 w-5 text-algo-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Connect and Collect</h3>
                  <p className="text-sm text-muted-foreground">Link your Algorand wallet to buy, sell, and trade NFTs instantly</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-x-4">
              <Button className="bg-algo-primary hover:bg-algo-primary/90 text-white">
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-border/50 hover:bg-secondary">
                Explore Marketplace
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "relative h-[400px] angled-border bg-card rounded-lg overflow-hidden",
            "before:border-algo-primary/30 before:bg-card"
          )}>
            {/* Abstract 3D shape visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-algo-primary/30 rounded-full blur-xl animate-pulse"></div>
                
                <div className="absolute top-0 left-0 right-0 bottom-0 animate-rotate" style={{ transformOrigin: 'center center' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-1 bg-algo-primary rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 w-1 bg-algo-primary rounded-full"></div>
                </div>
                
                <div className="absolute top-0 left-0 right-0 bottom-0 animate-rotate" style={{ animationDelay: '0.5s', transformOrigin: 'center center' }}>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1 w-16 bg-algo-accent rounded-full"></div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 h-1 w-16 bg-algo-accent rounded-full"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-algo-primary to-algo-accent rotate-45 animate-float"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card via-card/90 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
