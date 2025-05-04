
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

// Sample collection data
const collections = [
  {
    id: 1,
    name: "Algorithmic Dreams",
    creator: "CryptoVisionary",
    items: 42,
    floorPrice: "89",
    volume: "12.5K",
    logo: "/placeholder.svg",
    banner: "/placeholder.svg",
    verified: true,
    category: "Art"
  },
  {
    id: 2,
    name: "Pixel Punks",
    creator: "PixelMaster",
    items: 112,
    floorPrice: "45",
    volume: "8.2K",
    logo: "/placeholder.svg",
    banner: "/placeholder.svg",
    verified: true,
    category: "Collectible"
  },
  {
    id: 3,
    name: "Digital Horizons",
    creator: "FutureForm",
    items: 28,
    floorPrice: "120",
    volume: "5.7K",
    logo: "/placeholder.svg",
    banner: "/placeholder.svg",
    verified: false,
    category: "Photography"
  },
  {
    id: 4,
    name: "Quantum Art Gallery",
    creator: "QuantumArtist",
    items: 76,
    floorPrice: "67",
    volume: "9.3K",
    logo: "/placeholder.svg",
    banner: "/placeholder.svg",
    verified: true,
    category: "Art"
  },
  {
    id: 5,
    name: "Neo Genesis",
    creator: "TechnoCreator",
    items: 53,
    floorPrice: "98",
    volume: "14.2K",
    logo: "/placeholder.svg",
    banner: "/placeholder.svg",
    verified: true,
    category: "Animation"
  },
  {
    id: 6,
    name: "Cyber Relic Archive",
    creator: "FuturePunk",
    items: 35,
    floorPrice: "75",
    volume: "7.8K",
    logo: "/placeholder.svg",
    banner: "/placeholder.svg",
    verified: false,
    category: "Collectible"
  }
];

const categories = ["All", "Art", "Collectible", "Photography", "Animation", "Music", "Virtual Worlds"];

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Collections</h1>
          <div className="flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer px-4 py-1"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link to={`/collection/${collection.id}`} key={collection.id}>
              <Card className="overflow-hidden card-hover">
                <div className="h-32 bg-secondary overflow-hidden">
                  <img 
                    src={collection.banner} 
                    alt={collection.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="relative pt-12 pb-4 px-4">
                  <Avatar className="absolute -top-8 left-4 w-16 h-16 border-4 border-card">
                    <AvatarImage src={collection.logo} alt={collection.name} />
                    <AvatarFallback className="bg-secondary text-lg">
                      {collection.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">{collection.name}</h3>
                        {collection.verified && (
                          <span className="h-4 w-4 bg-algo-primary rounded-full flex items-center justify-center">
                            <span className="h-2 w-2 bg-card rounded-full"></span>
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground">by {collection.creator}</p>
                    </div>
                    <Badge variant="outline" className="bg-secondary/50">
                      {collection.category}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                    <div className="bg-secondary/50 rounded-md p-2">
                      <p className="text-muted-foreground text-xs">Items</p>
                      <p className="font-medium">{collection.items}</p>
                    </div>
                    <div className="bg-secondary/50 rounded-md p-2">
                      <p className="text-muted-foreground text-xs">Floor</p>
                      <p className="font-medium">{collection.floorPrice} ALGO</p>
                    </div>
                    <div className="bg-secondary/50 rounded-md p-2">
                      <p className="text-muted-foreground text-xs">Volume</p>
                      <p className="font-medium">{collection.volume}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
