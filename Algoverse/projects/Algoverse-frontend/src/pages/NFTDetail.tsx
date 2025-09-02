import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NFTCard from "@/components/NFTCard";
import { useParams, Link } from "react-router-dom";
import { Heart, Share2, Flag, ExternalLink, Clock, History, ChevronRight, Users, MessageSquare, Palette, Image, BarChart, ArrowRight } from "lucide-react";

// Mock NFT data
const nftData = {
  id: "42",
  title: "Celestial Harmony #42",
  description: "A mesmerizing exploration of cosmic balance and universal patterns. This piece represents the delicate equilibrium between chaos and order, using algorithmic techniques to create visual harmony from mathematical complexity.",
  image: "/placeholder.svg",
  creator: {
    id: "1",
    name: "CryptoVisionary",
    avatar: "/placeholder.svg",
    verified: true
  },
  owner: {
    id: "5",
    name: "CollectorPrime",
    avatar: "/placeholder.svg",
    verified: true
  },
  collection: {
    id: "3",
    name: "Algorithmic Dreams",
    verified: true
  },
  price: "189",
  lastPrice: "156",
  currency: "ALGO",
  likes: 24,
  views: 342,
  created: "2 weeks ago",
  attributes: [
    { trait: "Technique", value: "Generative" },
    { trait: "Color Palette", value: "Cosmos" },
    { trait: "Dimension", value: "3000 x 3000" },
    { trait: "Animation", value: "None" },
    { trait: "Rarity", value: "Rare" }
  ],
  history: [
    { event: "Listed", price: "189 ALGO", from: "CryptoVisionary", to: "Market", date: "2 days ago" },
    { event: "Minted", price: "N/A", from: "CryptoVisionary", to: "CryptoVisionary", date: "2 weeks ago" }
  ]
};

// Similar NFTs
const similarNFTs = [
  { id: "43", title: "Celestial Harmony #43", creator: "CryptoVisionary", price: "192", likes: 18, image: "/placeholder.svg" },
  { id: "44", title: "Astral Junction", creator: "CryptoVisionary", price: "210", likes: 29, image: "/placeholder.svg" },
  { id: "45", title: "Cosmic Reflections", creator: "NeoArtist", price: "175", likes: 32, image: "/placeholder.svg" }
];

const NFTDetail: NextPage = () => {
  const { id } = useParams<{ id: string }>();
  const [nftData, setNftData] = useState<NFTItem>({} as NFTItem);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nftport.xyz/v0/nfts/algorand/${process.env.NEXT_PUBLIC_ALGOVERSE_APP_ID}/${id}`);
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          setLoading(false);
          return;
        }

        setNftData(data.nft);
        setLoading(false);
      } catch (error) {
        setError(error as string);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left column - NFT image */}
          <div className="lg:w-1/2">
            <div className="bg-card border border-border/50 rounded-xl overflow-hidden relative group">
              <img
                src={nftData.image}
                alt={nftData.title}
                className="w-full h-auto object-cover aspect-square"
              />

              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="icon" className="bg-card/80 backdrop-blur-sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-card/80 backdrop-blur-sm">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-card/80 backdrop-blur-sm">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm">#{nftData.id}</Badge>
                  <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View on Algorand
                  </Badge>
                </div>
              </div>
            </div>

            {/* NFT details for mobile view */}
            <div className="mt-6 block lg:hidden">
              <h1 className="text-2xl font-bold mb-2">{nftData.title}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Link to={`/collection/${nftData.collection.id}`} className="text-muted-foreground hover:text-foreground">
                  {nftData.collection.name}
                </Link>
                {nftData.collection.verified && (
                  <span className="h-4 w-4 bg-algo-primary rounded-full flex items-center justify-center">
                    <span className="h-2 w-2 bg-card rounded-full"></span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right column - NFT details */}
          <div className="lg:w-1/2">
            {/* NFT details for desktop */}
            <div className="hidden lg:block">
              <h1 className="text-3xl font-bold mb-2">{nftData.title}</h1>
              <div className="flex items-center gap-2 mb-6">
                <Link to={`/collection/${nftData.collection.id}`} className="text-muted-foreground hover:text-foreground">
                  {nftData.collection.name}
                </Link>
                {nftData.collection.verified && (
                  <span className="h-4 w-4 bg-algo-primary rounded-full flex items-center justify-center">
                    <span className="h-2 w-2 bg-card rounded-full"></span>
                  </span>
                )}
              </div>
            </div>

            {/* Creator & Owner */}
            <div className="flex gap-6 mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Creator</p>
                <Link to={`/artist/${nftData.creator.id}`} className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={nftData.creator.avatar} />
                    <AvatarFallback>{nftData.creator.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{nftData.creator.name}</span>
                  {nftData.creator.verified && (
                    <span className="h-4 w-4 bg-algo-primary rounded-full flex items-center justify-center">
                      <span className="h-2 w-2 bg-card rounded-full"></span>
                    </span>
                  )}
                </Link>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Current Owner</p>
                <Link to={`/artist/${nftData.owner.id}`} className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={nftData.owner.avatar} />
                    <AvatarFallback>{nftData.owner.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{nftData.owner.name}</span>
                  {nftData.owner.verified && (
                    <span className="h-4 w-4 bg-algo-primary rounded-full flex items-center justify-center">
                      <span className="h-2 w-2 bg-card rounded-full"></span>
                    </span>
                  )}
                </Link>
              </div>
            </div>

            {/* Price information */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{nftData.price}</span>
                      <span className="text-muted-foreground">{nftData.currency}</span>
                      <span className="text-sm text-green-400">(+{(((parseInt(nftData.price) - parseInt(nftData.lastPrice)) / parseInt(nftData.lastPrice)) * 100).toFixed(1)}%)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Sale ends in 5 days</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button className="w-full">Buy now</Button>
                  <Button variant="secondary" className="w-full">Make offer</Button>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for description, properties, etc. */}
            <Tabs defaultValue="description">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="properties">Properties</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="pt-2">
                <p className="text-muted-foreground">{nftData.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Created</p>
                    <p className="font-medium">{nftData.created}</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Collection</p>
                    <p className="font-medium truncate">{nftData.collection.name}</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Views</p>
                    <p className="font-medium">{nftData.views}</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Favorites</p>
                    <p className="font-medium">{nftData.likes}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="properties">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {nftData.attributes.map((attr, index) => (
                    <div key={index} className="bg-secondary/30 rounded-lg p-3 text-center border border-secondary">
                      <p className="text-xs text-algo-primary uppercase font-medium">{attr.trait}</p>
                      <p className="font-medium truncate mt-1">{attr.value}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history">
                <div className="space-y-4">
                  {nftData.history.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <History className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{item.event}</p>
                          <p className="text-sm text-muted-foreground">{item.from} {item.to !== item.from ? `→ ${item.to}` : ''}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p>{item.price}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* FAQs */}
            <div className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is an NFT?</AccordionTrigger>
                  <AccordionContent>
                    NFT stands for Non-Fungible Token. These are unique digital assets verified using blockchain technology. Unlike cryptocurrencies, NFTs are not interchangeable, meaning each one is unique and can represent ownership of a specific digital item.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I buy this NFT?</AccordionTrigger>
                  <AccordionContent>
                    To purchase this NFT, you'll need to connect your Algorand wallet, click the "Buy now" button, and confirm the transaction. Make sure you have enough ALGO in your wallet to cover the cost plus transaction fees.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I resell this NFT?</AccordionTrigger>
                  <AccordionContent>
                    Yes, once you own this NFT, you can list it for sale on our marketplace or transfer it to another wallet. You'll retain ownership until the NFT is sold or transferred to another user.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* More from this collection */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">More from this collection</h2>
            <Link to={`/collection/${nftData.collection.id}`} className="flex items-center text-algo-primary hover:text-algo-primary/80">
              View all
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarNFTs.map((nft) => (
              <NFTCard
                key={nft.id}
                id={nft.id}
                name={nft.title}
                creator={nft.creator}
                price={nft.price}
                likes={nft.likes}
                views={nft.likes * 2}
                image={nft.image}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NFTDetail;

.floating-animation {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.bg-grid {
  background-size: 50px 50px;
  background-image: linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px);
}
