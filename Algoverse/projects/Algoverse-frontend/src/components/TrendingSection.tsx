
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import NFTCard from './NFTCard';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';

const mockNfts = [
  {
    id: '1',
    name: 'Astral Projection #42',
    creator: 'NeuroArtist',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    price: '145.00',
    likes: 124,
    views: 1456,
  },
  {
    id: '2',
    name: 'Digital Soul Fragment',
    creator: 'CryptoVision',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    price: '89.50',
    likes: 92,
    views: 834,
  },
  {
    id: '3',
    name: 'Neural Pathways',
    creator: 'DataMind',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    price: '215.75',
    likes: 216,
    views: 2340,
  },
  {
    id: '4',
    name: 'Quantum Entanglement',
    creator: 'FutureScape',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80',
    price: '312.00',
    likes: 178,
    views: 1924,
  },
  {
    id: '5',
    name: 'Cybernetic Dreams',
    creator: 'TechnoVeil',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    price: '98.25',
    likes: 86,
    views: 932,
  },
  {
    id: '6',
    name: 'Digital Wilderness',
    creator: 'VirtualNomad',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80',
    price: '175.50',
    likes: 152,
    views: 1648,
  },
];

const TrendingSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 320; // Width of card + gap
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : scrollPosition + scrollAmount;
    
    scrollRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
    
    setScrollPosition(newPosition);
  };

  return (
    <section className="py-16 px-6 md:px-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-algo-accent" />
            <h2 className="text-2xl md:text-3xl font-bold">Trending NFTs</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore the most sought-after digital collectibles on the Algorand blockchain
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="border-border/50 hover:bg-secondary"
            onClick={() => handleScroll('left')}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="border-border/50 hover:bg-secondary"
            onClick={() => handleScroll('right')}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        className="relative overflow-hidden"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10px, black calc(100% - 10px), transparent)'
        }}
      >
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
          style={{ scrollbarWidth: 'none' }}
        >
          {mockNfts.map((nft) => (
            <NFTCard
              key={nft.id}
              id={nft.id}
              name={nft.name}
              creator={nft.creator}
              image={nft.image}
              price={nft.price}
              likes={nft.likes}
              views={nft.views}
              className="min-w-[280px] max-w-[280px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
