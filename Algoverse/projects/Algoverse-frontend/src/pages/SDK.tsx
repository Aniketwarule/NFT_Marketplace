
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";
import { Link } from "react-router-dom";
import { Code, Terminal, Download, Book, ExternalLink, GitFork, FileCode, WrenchIcon } from "lucide-react";

// Sample code snippets for the SDK examples
const mintNFTCode = `// Mint an NFT using AlgoVerse SDK
import { AlgoVerseSDK } from '@algoverse/sdk';

// Initialize the SDK with your API key
const sdk = new AlgoVerseSDK({
  apiKey: 'your-api-key',
  network: 'testnet' // or 'mainnet' for production
});

async function mintNFT() {
  try {
    const nft = await sdk.nft.create({
      name: "My First NFT",
      description: "This is my first NFT on Algorand",
      image: "ipfs://QmXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxYour-IPFS-CID",
      creator: "Your Algorand Address",
      properties: {
        artist: "Your Name",
        medium: "Digital",
      }
    });

    console.log("NFT created successfully:", nft);
    return nft;
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
}`;

const listNFTCode = `// List an NFT for sale using AlgoVerse SDK
async function listNFT(assetId, price) {
  try {
    const listing = await sdk.marketplace.list({
      assetId: assetId,
      price: price, // price in microAlgos
      seller: "Your Algorand Address"
    });

    console.log("NFT listed successfully:", listing);
    return listing;
  } catch (error) {
    console.error("Error listing NFT:", error);
  }
}`;

const buyNFTCode = `// Buy an NFT using AlgoVerse SDK
async function buyNFT(listingId) {
  try {
    const purchase = await sdk.marketplace.buy({
      listingId: listingId,
      buyer: "Buyer's Algorand Address"
    });

    console.log("NFT purchased successfully:", purchase);
    return purchase;
  } catch (error) {
    console.error("Error buying NFT:", error);
  }
}`;

const walletConnectCode = `// Connect to AlgoVerse with Pera Wallet
import { PeraWalletConnect } from '@perawallet/connect';

const peraWallet = new PeraWalletConnect();

// Connect to wallet
async function connectWallet() {
  try {
    const accounts = await peraWallet.connect();
    console.log("Connected accounts:", accounts);
    return accounts[0]; // Return the first connected account
  } catch (error) {
    console.error("Error connecting to wallet:", error);
  }
}

// Disconnect from wallet
function disconnectWallet() {
  peraWallet.disconnect();
  console.log("Wallet disconnected");
}`;

const SDK = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card-gradient py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-algo-primary/20 text-algo-accent">
              <Terminal className="h-4 w-4 mr-2" />
              <span>Developer Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AlgoVerse SDK
            </h1>
            <p className="text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
              Create, manage, and trade NFTs on Algorand without writing smart contracts.
              Our powerful SDK handles the complexity so you can focus on building.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-algo-primary hover:bg-algo-primary/80">
                <Download className="h-5 w-5 mr-2" />
                Install SDK
              </Button>
              <Button size="lg" variant="outline">
                <Book className="h-5 w-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Introduction to AlgoVerse SDK</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-lg mb-4">
                  AlgoVerse SDK provides a simplified interface to interact with Algorand Standard Assets (ASAs) and NFTs without requiring in-depth knowledge of blockchain or smart contract development.
                </p>
                <p className="mb-4">
                  Built on top of the official Algorand SDK, our toolkit abstracts away the complexity of writing and deploying smart contracts, allowing developers to focus on creating great applications.
                </p>
                <p className="mb-6">
                  Whether you're building a marketplace, gallery, or integrating NFTs into your existing application, AlgoVerse SDK offers intuitive methods for the entire lifecycle of NFTs on Algorand.
                </p>
                <Button variant="link" className="text-algo-accent p-0" asChild>
                  <a href="https://developer.algorand.org/docs/get-details/asa/" target="_blank" rel="noopener noreferrer">
                    Learn about Algorand Standard Assets
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
              <Card className="bg-secondary/50 border-border/50">
                <CardHeader>
                  <h3 className="text-xl font-semibold flex items-center">
                    <Code className="h-5 w-5 mr-2 text-algo-accent" />
                    Key Features
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-algo-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-algo-primary"></div>
                    </div>
                    <p><span className="font-medium">No Smart Contracts Required</span> - Create and manage NFTs without writing TEAL or PyTeal code</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-algo-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-algo-primary"></div>
                    </div>
                    <p><span className="font-medium">ARC-3 Compliant</span> - Create standard-compliant NFTs that work across the Algorand ecosystem</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-algo-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-algo-primary"></div>
                    </div>
                    <p><span className="font-medium">Wallet Integration</span> - Seamlessly connect with Pera Wallet and other compatible wallets</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-algo-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-algo-primary"></div>
                    </div>
                    <p><span className="font-medium">Pre-built Marketplace Logic</span> - List, buy, and transfer NFTs with simple function calls</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SDK Installation Section */}
        <section className="py-16 px-6 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Installation</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Installation</h3>
                <div className="bg-background p-4 rounded-md font-mono text-sm mb-6">
                  <p className="mb-2">
                    # Using npm<br />
                    npm install @algoverse/sdk
                  </p>
                  <p>
                    # Using yarn<br />
                    yarn add @algoverse/sdk
                  </p>
                </div>
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Node.js v14 or higher</li>
                  <li>Algorand account (TestNet or MainNet)</li>
                  <li>Algorand API key (from <a href="https://developer.purestake.io/" className="text-algo-accent hover:underline">PureStake</a> or <a href="https://www.algorand.com/technology/algorand-api-service" className="text-algo-accent hover:underline">Algorand API Service</a>)</li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Environment Setup</h3>
            <p className="mb-6">
              For optimal development experience, we recommend using AlgoKit CLI for project initialization:
            </p>
            <div className="bg-background p-4 rounded-md font-mono text-sm mb-8">
              <p>
                # Install AlgoKit CLI<br />
                pip install algokit<br /><br />

                # Initialize a new project<br />
                algokit init
              </p>
            </div>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Basic Configuration</h3>
              </CardHeader>
              <CardContent>
                <CodeBlock code={`
// Initialize the SDK
import { AlgoVerseSDK } from '@algoverse/sdk';

// Configure the SDK with your credentials
const sdk = new AlgoVerseSDK({
  apiKey: 'your-api-key',
  network: 'testnet', // or 'mainnet' for production
  algodServer: 'https://testnet-algorand.api.purestake.io/ps2',
  indexerServer: 'https://testnet-algorand.api.purestake.io/idx2',
  port: '',
});

        {/* Installation Section */}
        <section className="py-16 px-6 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Installation</h3>
                <div className="bg-background p-4 rounded-md font-mono text-sm mb-6">
                  <p className="mb-2">
                    # Using npm<br />
                    npm install @algoverse/sdk
                  </p>
                  <p>
                    # Using yarn<br />
                    yarn add @algoverse/sdk
                  </p>
                </div>
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Node.js v14 or higher</li>
                  <li>Algorand account (TestNet or MainNet)</li>
                  <li>Algorand API key (from <a href="https://developer.purestake.io/" className="text-algo-accent hover:underline">PureStake</a> or <a href="https://www.algorand.com/technology/algorand-api-service" className="text-algo-accent hover:underline">Algorand API Service</a>)</li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Environment Setup</h3>
            <p className="mb-6">
              For optimal development experience, we recommend using AlgoKit CLI for project initialization:
            </p>
            <div className="bg-background p-4 rounded-md font-mono text-sm mb-8">
              <p>
                # Install AlgoKit CLI<br />
                pip install algokit<br /><br />

                # Initialize a new project<br />
                algokit init
              </p>
            </div>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Basic Configuration</h3>
              </CardHeader>
              <CardContent>
                <CodeBlock code={`
// Initialize the SDK
import { AlgoVerseSDK } from '@algoverse/sdk';

// Configure the SDK with your credentials
const sdk = new AlgoVerseSDK({
  apiKey: 'your-api-key',
  network: 'testnet', // or 'mainnet' for production
  algodServer: 'https://testnet-algorand.api.purestake.io/ps2',
  indexerServer: 'https://testnet-algorand.api.purestake.io/idx2',
  port: '',
});
                `} language="javascript" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Quickstart Guide</h2>
            <p className="text-lg mb-8">
              Follow this step-by-step tutorial to create, list, and buy your first NFT on Algorand using the AlgoVerse SDK.
            </p>

            <Tabs defaultValue="mint" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mint">1. Mint an NFT</TabsTrigger>
                <TabsTrigger value="list">2. List for Sale</TabsTrigger>
                <TabsTrigger value="buy">3. Buy NFT</TabsTrigger>
              </TabsList>
              <TabsContent value="mint" className="p-4 mt-4 border rounded-lg border-border/50">
                <h3 className="text-xl font-semibold mb-4">Creating Your First NFT</h3>
                <p className="mb-4">
                  Minting an NFT is as simple as calling the <code>create()</code> method with your NFT metadata:
                </p>
                <CodeBlock code={mintNFTCode} language="javascript" />
              </TabsContent>
              <TabsContent value="list" className="p-4 mt-4 border rounded-lg border-border/50">
                <h3 className="text-xl font-semibold mb-4">Listing Your NFT</h3>
                <p className="mb-4">
                  Once you've created an NFT, you can list it for sale on the marketplace:
                </p>
                <CodeBlock code={listNFTCode} language="javascript" />
              </TabsContent>
              <TabsContent value="buy" className="p-4 mt-4 border rounded-lg border-border/50">
                <h3 className="text-xl font-semibold mb-4">Buying an NFT</h3>
                <p className="mb-4">
                  Any user can purchase a listed NFT with a simple function call:
                </p>
                <CodeBlock code={buyNFTCode} language="javascript" />
              </TabsContent>
            </Tabs>

            <div className="bg-card-gradient p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What's Happening Under the Hood?</h3>
              <p className="mb-4">
                Behind each of these simple function calls, the SDK is:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Creating, signing, and submitting Algorand transactions</li>
                <li>Managing asset creation, transfers, and escrow accounts</li>
                <li>Handling atomic transfers for secure marketplace operations</li>
                <li>Indexing and tracking NFT metadata on-chain and off-chain</li>
              </ol>
              <p>
                All of this complexity is abstracted away, allowing you to focus on your application logic.
              </p>
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section className="py-16 px-6 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Core Concepts</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-secondary/50 border-border/50">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Algorand Standard Assets (ASAs)</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    ASAs are Algorand's native token framework that enables the creation of fungible and non-fungible tokens directly on Algorand's Layer-1.
                  </p>
                  <p>
                    Our SDK leverages ASAs to create NFTs with configurable properties like reserve, clawback, and freeze addresses to match your application's needs.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-algo-accent p-0" asChild>
                    <a href="https://developer.algorand.org/docs/get-details/asa/" target="_blank" rel="noopener noreferrer">
                      Learn more about ASAs
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-secondary/50 border-border/50">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Atomic Transfers</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Atomic transfers group multiple transactions together, ensuring they either all succeed or all fail.
                  </p>
                  <p>
                    This is crucial for marketplace operations where we need to ensure that payment and NFT exchange occur simultaneously without any possibility of one succeeding without the other.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-algo-accent p-0" asChild>
                    <a href="https://developer.algorand.org/docs/get-details/atomic_transfers/" target="_blank" rel="noopener noreferrer">
                      Learn more about Atomic Transfers
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-secondary/50 border-border/50">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Smart Contracts</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    While you don't need to write smart contracts to use our SDK, understanding how they work can be helpful.
                  </p>
                  <p>
                    The SDK uses escrow accounts managed by smart contracts to facilitate secure marketplace transactions, ensuring that NFTs are only transferred when payment is received.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-algo-accent p-0" asChild>
                    <a href="https://developer.algorand.org/docs/get-details/dapps/smart-contracts/" target="_blank" rel="noopener noreferrer">
                      Learn more about Smart Contracts
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-secondary/50 border-border/50">
                <CardHeader>
                  <h3 className="text-xl font-semibold">NFT Metadata Standards</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Algorand NFTs follow the ARC-3 or ARC-69 standards for metadata, which define how information about the NFT is stored and accessed.
                  </p>
                  <p>
                    Our SDK supports both standards, allowing you to create NFTs that are compatible with the broader Algorand ecosystem of wallets, marketplaces, and galleries.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-algo-accent p-0" asChild>
                    <a href="https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md" target="_blank" rel="noopener noreferrer">
                      ARC-3 Standard Documentation
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Wallet Integration */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Wallet Integration</h2>
            <p className="text-lg mb-8">
              Connect your application to Algorand wallets to enable users to seamlessly interact with your NFT marketplace.
            </p>

            <Card className="mb-10">
              <CardHeader>
                <h3 className="text-xl font-semibold">Connecting to Pera Wallet</h3>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The AlgoVerse SDK integrates with popular Algorand wallets like Pera Wallet:
                </p>
                <CodeBlock code={walletConnectCode} language="javascript" />
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-algo-accent p-0" asChild>
                  <a href="https://developer.perawallet.app/docs/connect/getting-started/" target="_blank" rel="noopener noreferrer">
                    Pera Wallet Documentation
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <img src="/placeholder.svg" alt="Pera Wallet" className="w-16 h-16 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Pera Wallet</h4>
                <p className="text-sm text-muted-foreground mb-4">Official Algorand Mobile Wallet</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://perawallet.app/" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </Card>

              <Card className="text-center p-6">
                <img src="/placeholder.svg" alt="MyAlgo Wallet" className="w-16 h-16 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">MyAlgo Wallet</h4>
                <p className="text-sm text-muted-foreground mb-4">Web-based Algorand Wallet</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://wallet.myalgo.com/" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </Card>

              <Card className="text-center p-6">
                <img src="/placeholder.svg" alt="Defly Wallet" className="w-16 h-16 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Defly Wallet</h4>
                <p className="text-sm text-muted-foreground mb-4">Advanced Trading Features</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://defly.app/" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-card-gradient text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Building?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our developer community and start creating amazing NFT experiences on Algorand with AlgoVerse SDK.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-algo-primary hover:bg-algo-primary/80">
                <GitFork className="h-5 w-5 mr-2" />
                View on GitHub
              </Button>
              <Button size="lg" variant="outline">
                <FileCode className="h-5 w-5 mr-2" />
                Read Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SDK;
