
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Collections from "./pages/Collections";
import Artists from "./pages/Artists";
import NFTDetail from "./pages/NFTDetail";
import Community from "./pages/Community";
import SDK from "./pages/SDK";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/nft/:id" element={<NFTDetail />} />
          <Route path="/collection/:id" element={<NFTDetail />} />
          <Route path="/artist/:id" element={<NFTDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/sdk" element={<SDK />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
