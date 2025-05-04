# 🧱 Algoverse (Algorand NFT Marketplace & Listing SDK)

A developer-friendly TypeScript SDK that enables creators and builders to **mint**, **list**, and **sell NFTs** on the **Algorand blockchain** using Layer-1 primitives (ASAs, smart contracts, and atomic transfers). 

This SDK abstracts away the blockchain complexity and lets developers integrate NFT marketplace logic into any frontend with simple function calls — no deep blockchain knowledge needed.

---

## 🧩 Key Features

- 🔷 **Create NFTs (ASAs)** with ARC-3 or ARC-69 metadata  
- 🧾 **Deploy marketplace smart contracts** (stateful ASC1 + stateless escrow logic)
- 🛍️ **List NFTs for sale** by escrowing them into secure logic signature accounts  
- 🤝 **Buy NFTs** using atomic groups of Algos + asset transfers  
- 🔐 **Supports wallet integrations** (Pera Wallet, WalletConnect — BYO Wallet UX)  
- 🧪 **Built-in testing support** using AlgoKit LocalNet and TypeScript-based testing tools

---

## 🧠 Project Architecture

```
algorand-nft-listing-sdk/
├── contracts/     # Smart contract source code (TS or TEAL)
├── src/           # TypeScript SDK modules (AssetService, MarketplaceService, etc.)
├── example-frontend/ # Demo frontend app (React/Next.js + Wallet integration)
├── test/          # Unit and integration tests
├── scripts/       # Deploy/compile scripts
└── README.md      # You're here
```

---

## ⚙️ How It Works

### 🔨 1. **Create an NFT (ASA)**  
Creates an Algorand Standard Asset with:
- Total supply = 1  
- Metadata from ARC-3 / ARC-69  
- `clawback` and `freeze` set to escrow logic sig  

### 🧾 2. **Deploy a marketplace contract (stateful)**  
Stores:
- NFT ASA ID  
- Listing price  
- Seller address  
- Status (`active`, `cancelled`, etc.)

### 🛡️ 3. **Generate escrow contract (stateless)**  
This logic sig:
- Controls the NFT via clawback/freeze  
- Only allows transfers as part of an atomic purchase group  

### 💰 4. **List an NFT for sale**  
Seller locks the NFT in escrow and sets price via app call  
The NFT is now securely listed

### 🛒 5. **Buy NFT using an atomic group**  
Buyer signs and submits:
- App call to `buy_nft`  
- Payment transaction to seller  
- ASA transfer from escrow logic sig  
✅ All must succeed, or none do

---

## 🚀 Quick Start

### 1️⃣ Prerequisites

- Node.js (v18+)
- AlgoKit CLI (https://github.com/algorandfoundation/algokit-cli)
- Docker (for running localnet)
- Git

### 2️⃣ Install dependencies

```bash
git clone https://github.com/your-org/algorand-nft-listing-sdk.git
cd algorand-nft-listing-sdk
npm install
```

### 3️⃣ Start local Algorand node

```bash
algokit localnet start
```

### 4️⃣ Run the dev frontend

```bash
cd example-frontend
npm install
npm run dev
```

## 🧪 Testing the SDK

Run unit tests:

```bash
npm run test
```

Testnet or mainnet can be used by configuring algodClient in config.ts.

## 🧰 SDK Usage Example

```typescript
import { AssetService, MarketplaceService } from 'algorand-nft-listing-sdk';

// Create an NFT
const asaId = await AssetService.createNFT({
  creatorAddr: myAddress,
  metadataURL: 'ipfs://Qm...',
  name: 'FounderNFT',
  unitName: 'FNDR',
  decimals: 0,
});

// Deploy smart contracts
const appId = await MarketplaceService.deployMarketplace({ asaId });

// List NFT for sale
await MarketplaceService.makeSellOffer({
  appId,
  price: 1_000_000, // in microAlgos
  sellerAddr: myAddress,
});

// Generate buy group
const txns = await MarketplaceService.buyNFT({ appId, buyerAddr: buyer });

// Sign & send via your wallet
await wallet.signAndSend(txns);
```

## 🧠 Concepts

| Concept | Description |
|---------|-------------|
| ASA | Native Algorand token used as NFT (1 supply, 0 decimals) |
| Stateful App | Holds listing info and validates offers |
| Stateless TEAL | Escrow logic that secures NFT transfer |
| Atomic Transfer | Ensures Algos and NFT change hands together |

## 🌐 Wallet Integration

We support unsigned transaction generation, so you can use:

- Pera Wallet
- WalletConnect
- MyAlgo Connect

Example wallet code available in example-frontend/.

## 📄 Standards Followed

✅ ARC-3 / ARC-69 (NFT metadata)

✅ TEAL v6+ stateless programs

✅ Atomic transfer groups

✅ Algorand Smart Contract ABI

Originally created for Algorand Hack-Series, 2025.

*Coming soon: Mint NFT, List for Sale, Buy Flow screenshots*
