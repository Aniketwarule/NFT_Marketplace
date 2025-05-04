
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Menu, X, User, Bell, MessageSquare, Search, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 py-4 px-6 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className="h-10 w-10 bg-algo-primary rounded-lg flex items-center justify-center mr-3">
              <div className="h-6 w-6 bg-background rounded-md flex items-center justify-center">
                <div className="h-3 w-3 bg-algo-accent rounded-sm"></div>
              </div>
            </div>
          </Link>
          <Link to="/">
            <span className="text-xl font-display font-bold tracking-tight">
              ALGO<span className="text-algo-accent">VERSE</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/explore" className="text-foreground/90 hover:text-algo-accent transition-colors">Explore</Link>
          <Link to="/collections" className="text-foreground/90 hover:text-algo-accent transition-colors">Collections</Link>
          <Link to="/artists" className="text-foreground/90 hover:text-algo-accent transition-colors">Artists</Link>
          <Link to="/community" className="text-foreground/90 hover:text-algo-accent transition-colors">Community</Link>
          <Link to="/sdk" className="text-foreground/90 hover:text-algo-accent transition-colors flex items-center">
            <Code className="h-4 w-4 mr-1" />
            SDK
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <div className="w-px h-6 bg-border mx-1"></div>
          <Button 
            variant="secondary"
            className="bg-secondary/50 hover:bg-secondary border border-border/50"
          >
            <User className="h-4 w-4 mr-2" />
            Connect
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-card border-y border-border p-4 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4">
          <Link to="/explore" className="py-2 px-4 rounded-md hover:bg-secondary">Explore</Link>
          <Link to="/collections" className="py-2 px-4 rounded-md hover:bg-secondary">Collections</Link>
          <Link to="/artists" className="py-2 px-4 rounded-md hover:bg-secondary">Artists</Link>
          <Link to="/community" className="py-2 px-4 rounded-md hover:bg-secondary">Community</Link>
          <Link to="/sdk" className="py-2 px-4 rounded-md hover:bg-secondary flex items-center">
            <Code className="h-4 w-4 mr-2" />
            SDK
          </Link>
          <div className="h-px w-full bg-border my-2"></div>
          <Button variant="secondary" className="w-full">
            <User className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
