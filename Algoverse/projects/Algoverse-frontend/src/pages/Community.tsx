import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Badge from "@/components/Badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, MessageSquare, Book, Calendar } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-card relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-algo-primary/10 to-algo-accent/5 z-0"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the AlgoVerse Community</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with fellow artists, collectors, and enthusiasts in the world's most innovative NFT marketplace on Algorand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Users className="mr-2 h-5 w-5" />
                Join Discord
              </Button>
              <Button variant="secondary" size="lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat Forum
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-algo-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-8 right-1/4 w-32 h-32 bg-algo-accent/10 rounded-full blur-2xl"></div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-to-br from-card to-secondary border border-border/50">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-1">35K+</h3>
              <p className="text-muted-foreground text-center">Community Members</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-secondary border border-border/50">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-1">12K+</h3>
              <p className="text-muted-foreground text-center">Artists & Creators</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-secondary border border-border/50">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-1">250K+</h3>
              <p className="text-muted-foreground text-center">NFTs Created</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-secondary border border-border/50">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mb-1">$48M+</h3>
              <p className="text-muted-foreground text-center">Trading Volume</p>
            </CardContent>
          </Card>
        </div>

        {/* Community Features */}
        <h2 className="text-3xl font-bold mb-8">Community Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader className="pb-0">
              <div className="h-12 w-12 bg-algo-primary/20 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-algo-primary" />
              </div>
              <h3 className="text-xl font-bold">Forums & Discussions</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Engage in discussions about NFT trends, blockchain technology, and creative processes with our global community.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 h-auto text-algo-primary">
                Explore Forums <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-0">
              <div className="h-12 w-12 bg-algo-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-algo-accent" />
              </div>
              <h3 className="text-xl font-bold">Virtual Events</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join virtual art exhibits, creator AMAs, and educational workshops to expand your knowledge and network.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 h-auto text-algo-accent">
                View Calendar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-0">
              <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold">Knowledge Base</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access guides, tutorials, and resources to help you create, buy, sell, and collect NFTs on the Algorand blockchain.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 h-auto text-purple-500">
                Read Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Latest Blog Posts */}
        <h2 className="text-3xl font-bold mb-8">Latest from Our Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden card-hover">
              <div className="h-48 bg-secondary overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Blog post"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-algo-primary/20 text-algo-primary border-algo-primary/20 px-2 py-0.5 rounded-full">NFT Trends</Badge>
                  <span className="text-xs text-muted-foreground">May 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">The Evolution of Digital Art in the NFT Era</h3>
                <p className="text-muted-foreground line-clamp-3">
                  How blockchain technology has revolutionized the way digital artists create, distribute, and monetize their work in the growing NFT ecosystem.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="Author" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">James Davis</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-algo-primary">
                    Read more
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Community Partners */}
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="bg-secondary/30 border-border/50 flex items-center justify-center p-6 h-24">
              <div className="h-10 w-full flex items-center justify-center bg-muted rounded">
                <span className="text-muted-foreground">Partner Logo</span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-br from-algo-primary/20 to-algo-accent/10 border-border/50 mb-8">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the next generation of digital creators and collectors on the Algorand blockchain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-glow">Create Your Account</Button>
              <Button variant="secondary" size="lg">Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
