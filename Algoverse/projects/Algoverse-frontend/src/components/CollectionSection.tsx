
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Image } from 'lucide-react';
import { cn } from '@/lib/utils';

const collections = [
  {
    id: '1',
    name: 'Cybernetic Evolution',
    creator: 'NeuralCollective',
    items: 108,
    owners: 42,
    cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '2',
    name: 'Digital Dreamscapes',
    creator: 'TechnoVeil',
    items: 86,
    owners: 34,
    cover: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '3',
    name: 'Quantum Artifacts',
    creator: 'DataMind',
    items: 124,
    owners: 58,
    cover: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&q=80',
  },
];

const CollectionSection = () => {
  return (
    <section className="py-16 px-6 md:px-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Collections</h2>
          <p className="text-muted-foreground max-w-2xl">
            Curated selections of remarkable NFT collections
          </p>
        </div>
        <Button variant="link" className="text-algo-accent flex items-center p-0 h-auto">
          View all collections
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <div 
            key={collection.id}
            className={cn(
              "relative group overflow-hidden rounded-lg border border-border/50",
              "transition-all duration-500 card-hover",
              "bg-gradient-to-br from-secondary to-card"
            )}
          >
            {/* Cover Image */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10"></div>
              <img 
                src={collection.cover}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex items-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-algo-primary rounded-xl opacity-20 blur-sm"></div>
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden border-2 border-card">
                    <img 
                      src={collection.logo}
                      alt={`${collection.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Collection Details */}
            <div className="p-4 pt-0">
              <h3 className="font-bold text-xl mt-4">{collection.name}</h3>
              <p className="text-sm text-muted-foreground">by {collection.creator}</p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Image className="h-4 w-4 text-algo-accent mr-1.5" />
                  <span className="text-sm">{collection.items} items</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-algo-accent mr-1.5" />
                  <span className="text-sm">{collection.owners} owners</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4 bg-secondary/80 hover:bg-secondary border border-border/50"
              >
                View Collection
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;
