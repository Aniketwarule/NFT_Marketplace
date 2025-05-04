
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import NFTCard from "@/components/NFTCard";
import { Search, Filter, Grid3X3, List } from "lucide-react";

// Sample NFT data
const nftItems = [
  { id: 1, title: "Celestial Harmony #42", creator: "NeoArtist", price: "189", likes: 24, image: "/placeholder.svg", category: "Art" },
  { id: 2, title: "Digital Genesis #08", creator: "CryptoVisionary", price: "235", likes: 56, image: "/placeholder.svg", category: "Collectible" },
  { id: 3, title: "Quantum Resonance", creator: "FutureForm", price: "120", likes: 18, image: "/placeholder.svg", category: "Photography" },
  { id: 4, title: "Binary Dreams", creator: "AlgoArtist", price: "175", likes: 32, image: "/placeholder.svg", category: "Art" },
  { id: 5, title: "Neural Pathways", creator: "CodeArtistry", price: "210", likes: 43, image: "/placeholder.svg", category: "Animation" },
  { id: 6, title: "Fractal Universe #12", creator: "DigitalNomad", price: "145", likes: 27, image: "/placeholder.svg", category: "Art" },
  { id: 7, title: "Cyber Relic #05", creator: "FuturePunk", price: "195", likes: 39, image: "/placeholder.svg", category: "Collectible" },
  { id: 8, title: "Astral Projection", creator: "EtherealArtist", price: "250", likes: 61, image: "/placeholder.svg", category: "Photography" },
  { id: 9, title: "Synthetic Evolution", creator: "TechnoCreator", price: "165", likes: 22, image: "/placeholder.svg", category: "Animation" }
];

const categories = ["All Categories", "Art", "Collectible", "Photography", "Animation", "Music", "Virtual Worlds"];
const sortOptions = ["Recently Added", "Price: Low to High", "Price: High to Low", "Most Popular"];

const Explore = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 bg-card rounded-lg border border-border/50 p-4 space-y-6 sticky top-24">
            <div>
              <h3 className="text-lg font-semibold mb-3">Filters</h3>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search NFTs" 
                  className="pl-9 bg-background"
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Category</h4>
              <div className="space-y-1">
                {categories.map((category, index) => (
                  <Button 
                    key={index}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className={`justify-start w-full ${selectedCategory === category ? "" : "text-muted-foreground"}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="px-2">
                <Slider 
                  defaultValue={[0, 1000]} 
                  max={1000} 
                  step={10}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value)}
                  className="my-6"
                />
                <div className="flex justify-between items-center">
                  <span>{priceRange[0]} ALGO</span>
                  <span>{priceRange[1]} ALGO</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">#Digital</Badge>
                <Badge variant="secondary">#Abstract</Badge>
                <Badge variant="secondary">#Crypto</Badge>
                <Badge variant="secondary">#Animation</Badge>
                <Badge variant="secondary">#Pixel</Badge>
                <Badge variant="secondary">#3D</Badge>
              </div>
            </div>

            <Button className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
          </div>

          {/* NFT Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h1 className="text-2xl font-bold mb-4 sm:mb-0">Explore NFTs</h1>
              <div className="flex items-center gap-3">
                <Select defaultValue="Recently Added">
                  <select className="bg-secondary/50 border border-border/50 rounded-md h-9 w-48 px-3">
                    {sortOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </Select>
                <div className="flex border border-border rounded-md overflow-hidden">
                  <Button 
                    variant={viewMode === "grid" ? "secondary" : "ghost"} 
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant={viewMode === "list" ? "secondary" : "ghost"} 
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {nftItems.map((nft) => (
                <NFTCard 
                  key={nft.id}
                  id={nft.id.toString()}
                  name={nft.title}
                  creator={nft.creator}
                  price={nft.price}
                  likes={nft.likes}
                  views={nft.likes * 2} // Using a calculation since views is missing in the data
                  image={nft.image}
                  className={viewMode === "list" ? "flex-row" : ""}
                />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="mr-2" disabled>Previous</Button>
              <Button variant="outline" className="mx-1 bg-secondary">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" className="mx-1">3</Button>
              <Button variant="outline" className="ml-2">Next</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
