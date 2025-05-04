
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import CollectionSection from "@/components/CollectionSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrendingSection />
        <CollectionSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
