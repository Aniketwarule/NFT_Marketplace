import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import NFTCard from "@/components/NFTCard";
import { Search, Filter, Grid3X3, List, Users, MessageSquare, BarChart, ArrowRight, Palette, Image } from "lucide-react";

// Sample NFT data
const nftItems = [
	{
		id: 1,
		title: "Celestial Harmony #42",
		creator: "NeoArtist",
		price: "189",
		likes: 24,
		image: "/placeholder.svg",
		category: "Art",
	},
	{
		id: 2,
		title: "Digital Genesis #08",
		creator: "CryptoVisionary",
		price: "235",
		likes: 56,
		image: "/placeholder.svg",
		category: "Collectible",
	},
	{
		id: 3,
		title: "Quantum Resonance",
		creator: "FutureForm",
		price: "120",
		likes: 18,
		image: "/placeholder.svg",
		category: "Photography",
	},
	{
		id: 4,
		title: "Binary Dreams",
		creator: "AlgoArtist",
		price: "175",
		likes: 32,
		image: "/placeholder.svg",
		category: "Art",
	},
	{
		id: 5,
		title: "Neural Pathways",
		creator: "CodeArtistry",
		price: "210",
		likes: 43,
		image: "/placeholder.svg",
		category: "Animation",
	},
	{
		id: 6,
		title: "Fractal Universe #12",
		creator: "DigitalNomad",
		price: "145",
		likes: 27,
		image: "/placeholder.svg",
		category: "Art",
	},
	{
		id: 7,
		title: "Cyber Relic #05",
		creator: "FuturePunk",
		price: "195",
		likes: 39,
		image: "/placeholder.svg",
		category: "Collectible",
	},
	{
		id: 8,
		title: "Astral Projection",
		creator: "EtherealArtist",
		price: "250",
		likes: 61,
		image: "/placeholder.svg",
		category: "Photography",
	},
	{
		id: 9,
		title: "Synthetic Evolution",
		creator: "TechnoCreator",
		price: "165",
		likes: 22,
		image: "/placeholder.svg",
		category: "Animation",
	},
];

const categories = [
	"All Categories",
	"Art",
	"Collectible",
	"Photography",
	"Animation",
	"Music",
	"Virtual Worlds",
];
const sortOptions = [
	"Recently Added",
	"Price: Low to High",
	"Price: High to Low",
	"Most Popular",
];

const Explore: NextPage = () => {
	const [viewMode, setViewMode] = useState<"grid" | "list">("list");
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
	const [selectedCategory, setSelectedCategory] = useState<string>(
		"All Categories"
	);
	const [sortOption, setSortOption] = useState<string>("Recently Added");
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [nftItems, setNftItems] = useState<NFTItem[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(12);
	const [currentPageItems, setCurrentPageItems] = useState<NFTItem[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalItems, setTotalItems] = useState<number>(0);
	const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		setError(null);
		setNftItems([]);
		setCurrentPageItems([]);
		setCurrentPage(1);
		setTotalPages(1);
		setTotalItems(0);
		setIsLoadingMore(false);

		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.nftport.xyz/v0/nfts/algorand/${process.env.NEXT_PUBLIC_ALGOVERSE_APP_ID}?creator=${process.env.NEXT_PUBLIC_ALGOVERSE_CREATOR}&chain=algorand&sort=${sortOption}&page=${page}&per_page=${perPage}&search=${searchTerm}`
				);
				const data = await response.json();

				if (data.error) {
					setError(data.error);
					setLoading(false);
					return;
				}

				setNftItems(data.nfts);
				setTotalPages(data.total_pages);
				setTotalItems(data.total);
				setLoading(false);
			} catch (error) {
				setError(error as string);
				setLoading(false);
			}
		};

		fetchData();
	}, [page, perPage, searchTerm, sortOption]);

	useEffect(() => {
		if (currentPage > totalPages) {
			setIsLoadingMore(false);
			return;
		}

		setIsLoadingMore(true);

		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.nftport.xyz/v0/nfts/algorand/${process.env.NEXT_PUBLIC_ALGOVERSE_APP_ID}?creator=${process.env.NEXT_PUBLIC_ALGOVERSE_CREATOR}&chain=algorand&sort=${sortOption}&page=${currentPage}&per_page=${perPage}&search=${searchTerm}`
				);
				const data = await response.json();

				if (data.error) {
					setError(data.error);
					setIsLoadingMore(false);
					return;
				}

				setCurrentPageItems(data.nfts);
				setCurrentPage(currentPage + 1);
				setIsLoadingMore(false);
			} catch (error) {
				setError(error as string);
				setIsLoadingMore(false);
			}
		};

		fetchData();
	}, [currentPage, perPage, searchTerm, sortOption]);

	const handleSortOptionChange = (option: string) => {
		setSortOption(option);
		setPage(1);
	};

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
											variant={
												selectedCategory === category
													? "default"
													: "ghost"
											}
											className={`justify-start w-full ${
												selectedCategory === category
													? ""
													: "text-muted-foreground"
											}`}
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
								<h1 className="text-2xl font-bold mb-4 sm:mb-0">
									Explore NFTs
								</h1>
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
											variant={
												viewMode === "grid" ? "secondary" : "ghost"
											}
											size="icon"
											onClick={() => setViewMode("grid")}
										>
											<Grid3X3 className="h-4 w-4" />
										</Button>
										<Button
											variant={
												viewMode === "list" ? "secondary" : "ghost"
											}
											size="icon"
											onClick={() => setViewMode("list")}
										>
											<List className="h-4 w-4" />
										</Button>
									</div>
								</div>
							</div>

							<div
								className={`grid ${
									viewMode === "grid"
										? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
										: "grid-cols-1"
								} gap-6`}
							>
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
								<Button variant="outline" className="mr-2" disabled>
									Previous
								</Button>
								<Button
									variant="outline"
									className="mx-1 bg-secondary"
									disabled
								>
									1
								</Button>
								<Button variant="outline" className="mx-1" disabled>
									2
								</Button>
								<Button variant="outline" className="mx-1" disabled>
									3
								</Button>
								<Button variant="outline" className="ml-2" disabled>
									Next
								</Button>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	};

const Community = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			{/* Hero Section */}
			<div className="bg-card relative overflow-hidden border-b border-border">
				<div className="absolute inset-0 bg-gradient-to-br from-algo-primary/20 to-algo-accent/10 z-0">
					<div className="absolute inset-0 bg-grid-white/[0.02] animate-grid" />
				</div>
				<div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
					<div className="max-w-3xl">
						<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-algo-primary to-algo-accent animate-gradient">
							Join the AlgoVerse Community
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
							Connect with fellow artists, collectors, and enthusiasts in the
							world's most innovative NFT marketplace on Algorand.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button
								size="lg"
								className="bg-algo-primary hover:bg-algo-primary/90 group"
							>
								<Users className="mr-2 h-5 w-5" />
								Join Discord
								<span className="ml-2 bg-black/20 px-2 py-0.5 rounded-full text-sm">
									35K+
								</span>
								<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-algo-accent/20 hover:bg-algo-accent/10"
							>
								<MessageSquare className="mr-2 h-5 w-5" />
								Chat Forum
							</Button>
						</div>
					</div>
				</div>
			</div>

			<main className="flex-1 container mx-auto px-4 py-12">
				{/* Community Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
					{[
						{ number: "35K+", label: "Community Members", icon: Users },
						{ number: "12K+", label: "Artists & Creators", icon: Palette },
						{ number: "250K+", label: "NFTs Created", icon: Image },
						{ number: "$48M+", label: "Trading Volume", icon: BarChart },
					].map((stat, index) => (
						<Card
							key={index}
							className="bg-gradient-to-br from-card/50 to-card border-border/50 relative overflow-hidden group hover:border-algo-primary/50 transition-colors"
						>
							<CardContent className="p-6">
								<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
									<stat.icon className="h-12 w-12" />
								</div>
								<h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-algo-primary to-algo-accent">
									{stat.number}
								</h3>
								<p className="text-muted-foreground">{stat.label}</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Rest of your existing components with added animations */}
				{/* ...existing code... */}
			</main>

			<Footer />
		</div>
	);
};

export default Explore;

.floating-animation {
	animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-10px);
	}
	100% {
		transform: translateY(0px);
	}
}

.card-hover {
	transition: all 0.3s ease;
}

.card-hover:hover {
	transform: translateY(-5px);
}

module.exports = {
  theme: {
    extend: {
      animation: {
        'grid': 'grid 20s linear infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        grid: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
};
