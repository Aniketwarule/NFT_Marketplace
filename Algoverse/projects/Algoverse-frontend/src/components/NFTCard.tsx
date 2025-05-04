
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart, Eye } from 'lucide-react';

interface NFTCardProps {
  id: string;
  name: string;
  creator: string;
  image: string;
  price: string;
  likes: number;
  views: number;
  className?: string;
}

const NFTCard = ({
  id,
  name,
  creator,
  image,
  price,
  likes,
  views,
  className,
}: NFTCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card rounded-lg overflow-hidden card-hover border border-border/50",
        "bg-card-gradient backdrop-blur-sm",
        className
      )}
    >
      {/* NFT Image */}
      <div className="relative aspect-square overflow-hidden group">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <Button variant="secondary" size="sm" className="bg-black/50 backdrop-blur-md">
            <Eye className="h-4 w-4 mr-1" /> Quick View
          </Button>
        </div>
      </div>
      
      {/* NFT Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg truncate">{name}</h3>
            <p className="text-sm text-muted-foreground">by {creator}</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-algo-accent">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="bg-secondary/50 px-3 py-1.5 rounded-md">
            <p className="text-xs text-muted-foreground">Current Price</p>
            <p className="font-mono font-medium">{price} ALGO</p>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center">
              <Heart className="h-3.5 w-3.5 mr-1" /> {likes}
            </span>
            <span className="flex items-center">
              <Eye className="h-3.5 w-3.5 mr-1" /> {views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
