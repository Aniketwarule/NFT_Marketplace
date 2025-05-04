
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// Sample artist data
const artists = [
  { 
    id: 1, 
    name: "CryptoVisionary", 
    avatar: "/placeholder.svg",
    cover: "/placeholder.svg", 
    followers: "12.4K", 
    items: 42, 
    bio: "Creating digital art at the intersection of mathematics and imagination.",
    verified: true
  },
  { 
    id: 2, 
    name: "PixelMaster", 
    avatar: "/placeholder.svg",
    cover: "/placeholder.svg", 
    followers: "8.7K", 
    items: 36, 
    bio: "Pixel art enthusiast exploring the beauty of low-resolution aesthetics.",
    verified: true
  },
  { 
    id: 3, 
    name: "FutureForm", 
    avatar: "/placeholder.svg",
    cover: "/placeholder.svg", 
    followers: "5.2K", 
    items: 28, 
    bio: "Blending sci-fi concepts with abstract forms to create tomorrow's aesthetic.",
    verified: false
  },
  { 
    id: 4, 
    name: "NeoArtist", 
    avatar: "/placeholder.svg",
    cover: "/placeholder.svg", 
    followers: "9.1K", 
    items: 54, 
    bio: "Digital sculptor and 3D artist pushing the boundaries of virtual space.",
    verified: true
  },
  { 
    id: 5, 
    name: "CodeArtistry", 
    avatar: "/placeholder.svg",
    cover: "/placeholder.svg", 
    followers: "7.3K", 
    items: 31, 
    bio: "Creating generative art through algorithms and creative coding.",
    verified: false
  },
  { 
    id: 6, 
    name: "DigitalNomad", 
    avatar: "/placeholder.svg",
    cover: "/placeholder.svg", 
    followers: "10.8K", 
    items: 47, 
    bio: "Traveling the world while creating digital artifacts of cultural fusion.",
    verified: true
  },
  { 
    id: 7, 
    name: "FuturePunk", 
    avatar: "/placeholder.svg",
    cover: "/placeholder.svg", 
    followers: "6.9K", 
    items: 25, 
    bio: "Cyberpunk aesthetics meet blockchain technology in a neon-drenched future.",
    verified: true
  },
  { 
    id: 8, 
    name: "EtherealArtist", 
    avatar: "/placeholder.svg",
    cover: "/placeholder.svg", 
    followers: "4.5K", 
    items: 19, 
    bio: "Creating dreamlike landscapes and surreal experiences in the digital realm.",
    verified: false
  },
];

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter artists based on search term
  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Featured Artists</h1>
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search artists" 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <Link to={`/artist/${artist.id}`} key={artist.id}>
              <Card className="overflow-hidden card-hover">
                <div className="h-24 bg-secondary overflow-hidden">
                  <img 
                    src={artist.cover} 
                    alt={artist.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-12 pb-4 px-4 relative text-center">
                  <Avatar className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-16 h-16 border-4 border-card">
                    <AvatarImage src={artist.avatar} alt={artist.name} />
                    <AvatarFallback className="bg-secondary text-lg">
                      {artist.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="font-bold text-lg">{artist.name}</h3>
                    {artist.verified && (
                      <span className="h-4 w-4 bg-algo-primary rounded-full flex items-center justify-center">
                        <span className="h-2 w-2 bg-card rounded-full"></span>
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{artist.bio}</p>
                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-muted-foreground">Followers</p>
                      <p className="font-medium">{artist.followers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Items</p>
                      <p className="font-medium">{artist.items}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No artists found matching "{searchTerm}"</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Artists;
