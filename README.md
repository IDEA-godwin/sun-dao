# SunDAO Documentation

## Overview

SunDAO is a decentralized autonomous organization (DAO) that leverages blockchain technology to democratize access to renewable energy investments. By tokenizing real-world solar assets into NFTs on the Gnosis chain, SunDAO allows contributors to earn yield on their crypto investments while supporting sustainable energy projects. This platform fosters financial inclusion by enabling anyone to participate with minimal capital, while offering steady returns protected from market volatility.

### Core Components

1. **Contributors**
   - **Who They Are**: Individuals or entities seeking to earn yield through sustainable energy projects.
   - **Role**: Contributors deposit stablecoins (e.g., USDT) into SunDAO’s dApp, receiving SunCoin (SCN) tokens in a 1:1 ratio initially. This ratio adjusts over time as SCN tokens are bought back and burned, reflecting the portfolio's evolving value.

2. **SCN Tokens**
   - **Representation**: SCN tokens represent a contributor’s stake in SunDAO's pool and the yield tied to solar assets' performance.
   - **Dynamic Ratio**: Initially pegged 1:1 with the stablecoin, the SCN-to-stablecoin ratio adjusts as profits are distributed and tokens are burned.

3. **Tokenized Solar Assets**
   - **NFT Integration**: Each solar project is tokenized into an NFT on the Gnosis chain, representing ownership and revenue rights.

### How SunDAO Works

1. **Investment**: Contributors deposit stablecoins into the dApp and receive SCN tokens at a 1:1 ratio.
2. **Asset Acquisition**: SunDAO acquires solar projects, represented by NFTs on the Gnosis chain.
3. **Revenue Collection**: Solar assets generate revenue, stored in the corresponding NFT wallets.
4. **Yield Distribution**: Revenue is used to buy back SCN tokens, dynamically adjusting the mint ratio and increasing the token’s value.

### Portfolio Growth and Expansion

- As more solar projects are onboarded, SunDAO's portfolio grows, increasing yield potential and expanding the investment base.
- Other DAOs can leverage SunDAO’s framework for their own renewable energy projects.

### Security Measures

- **Smart Contract Audits**: All contracts are rigorously audited.
- **Decentralized Validation**: A network of validators ensures profitable and compliant projects are onboarded.
- **Multi-Signature Wallets**: Managed through multi-signature wallets for enhanced security.
- **Cross-Chain Security**: Cross-chain protocols secure revenue transfers between Gnosis and Lisk chains.

### Blockchain Architecture

- **Gnosis Chain**: Hosts NFTs representing solar assets with efficient, low-cost transactions.
- **Lisk Chain**: Manages stablecoin deposits, SCN issuance, and yield distribution.
- **Interoperability**: Cross-chain communication ensures robust asset management and yield flow.

### Key Features

- **Financial Inclusion**: Minimal capital entry for broader participation.
- **Sustainable Returns**: Yield through real-world solar projects.
- **Blockchain Transparency**: NFTs and smart contracts ensure transparent and decentralized asset management.

### Conclusion

SunDAO redefines renewable energy investments, combining blockchain with real-world assets to offer inclusive, sustainable returns. Join us to participate in a decentralized movement for a greener financial future.

[Live App](https://sun-dao-frontend.vercel.app/)

---

## Open Source Approach

The application was built using Next.js.

### Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing by modifying `app/page.tsx`. The page auto-updates as you edit.

This project uses `next/font` to automatically optimize and load Inter, a custom Google Font.

### Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Interactive Next.js Tutorial](https://nextjs.org/learn) - Start your Next.js journey.
- [Next.js GitHub](https://github.com/vercel/next.js) - Contribute to the project.

### Deployment

The easiest way to deploy this app is via Vercel. Follow the [Next.js deployment documentation](https://vercel.com/docs/concepts/next.js/overview).

---

## Smart Contract Details

### Asset-Backed ERC20 Token — SunCoin

This smart contract implements an ERC20 token using the ERC4626 standard. The token supply adjusts based on the underlying asset pool's value.

#### Features

- ERC20 compliant.
- Implements ERC4626 tokenized vault standard.
- Minting based on asset-to-token ratio.
- Yield used for buyback and burn to maintain value.

### Contract Address

- **0xC0E51FdF86a8c9a960Bc0aE40FBBEcB6dcd024d2**

### GitHub Repository

- [Sun Tokens GitHub Repo](https://github.com/IDEA-godwin/sun-tokens)

### Contract Functions

- `mint(uint256 amount)`: Mints new tokens based on the current asset-to-token ratio.
- `deposit(uint256 amount)`: Deposits funds and mints tokens based on the ratio.
- `burn(address owner, uint256 amount)`: Uses yield to buy back and destroy tokens.

### Getting Started

#### Prerequisites

- Foundry
- Solidity ^0.8.0

#### Installation

```bash
git clone https://github.com/yourusername/asset-backed-token.git
cd asset-backed-token
forge install
```

Compile the contract:

```bash
forge build
```

### Contact

For any inquiries, reach out to: **godsdelightjude@gmail.com**