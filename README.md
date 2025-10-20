# 🚀 Scaffold-Lisk: Complete Web3 DApp Suite

A comprehensive Web3 application suite built on the Lisk Sepolia testnet, featuring multiple challenges and real-world DeFi applications including DEX, NFT marketplace, gasless transactions, price oracles, and more.

## 📋 Table of Contents

- [Overview](#overview)
- [Challenges Implemented](#challenges-implemented)
- [Smart Contracts](#smart-contracts)
- [Frontend Features](#frontend-features)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Development](#development)
- [Contributing](#contributing)

## 🎯 Overview

This project implements multiple Web3 challenges and real-world applications on the Lisk blockchain:

- **💱 Decentralized Exchange (DEX)** - Automated Market Maker with token swapping and liquidity provision
- **🛒 NFT Marketplace** - Complete NFT minting, buying, selling, and listing platform
- **⛽ Gasless Transactions** - ERC-4337 Smart Wallets with sponsored gas fees
- **🔮 Price Oracle Integration** - Real-time cryptocurrency price feeds via RedStone
- **☕ Buy Me A Coffee** - Donation platform with memo system
- **🔍 Block Explorer** - Transaction and address inspection tools
- **🐛 Debug Interface** - Direct smart contract interaction
- **📊 Event Monitoring** - Real-time blockchain event tracking

## 🏆 Challenges Implemented

### 1. 💱 DEX Challenge - Automated Market Maker
**Location**: `/dex`

**Smart Contracts**:
- `SimpleDEX.sol` - AMM with constant product formula (x * y = k)
- `MyToken.sol` - ERC20 token (MTK) with 18 decimals
- `SimpleUSDC.sol` - Mock stablecoin (sUSDC) with 6 decimals

**Features**:
- Token swapping with real-time price quotes
- Liquidity provision and management
- 0.3% trading fees distributed to LPs
- ReentrancyGuard protection
- Pool statistics and user share tracking

### 2. 🛒 NFT Marketplace Challenge
**Location**: `/marketplace`

**Smart Contracts**:
- `MyNFT.sol` - ERC721 NFT collection
- `NFTMarketplace.sol` - Trading platform for NFTs

**Features**:
- NFT minting with metadata
- Marketplace listing and delisting
- Buy/sell functionality with ETH
- Approval system for secure trading
- Live USD price display via oracle integration

### 3. ⛽ Gasless Transactions Challenge
**Location**: `/gasless`

**Technology**: ERC-4337 Account Abstraction

**Features**:
- Smart wallet creation and management
- Sponsored gas transactions
- Thirdweb integration for wallet abstraction
- Zero gas fee user experience

### 4. 🔮 Price Oracle Challenge
**Location**: `/oracle`

**Technology**: RedStone Finance Oracle

**Features**:
- Real-time ETH and BTC price feeds
- RedStone data service integration
- Live price updates every 30 seconds
- USD price conversion for NFTs

### 5. ☕ Buy Me A Coffee Challenge
**Smart Contract**: `BuyMeACoffee.sol`

**Features**:
- Coffee donation system (0.0001 ETH per coffee)
- Memo system with user messages
- Twitter handle integration
- Owner withdrawal functionality
- Memo management (remove/modify)

### 6. 🔍 Block Explorer Challenge
**Location**: `/blockexplorer`

**Features**:
- Address inspection and analysis
- Transaction hash lookup
- Contract interaction tabs
- Storage and logs examination
- Pagination and search functionality

### 7. 🐛 Debug Interface Challenge
**Location**: `/debug`

**Features**:
- Direct smart contract interaction
- Read/write function testing
- Contract variable inspection
- Transaction receipt display
- Inheritance tooltips

### 8. 📊 Event Monitoring Challenge
**Location**: `/events`

**Features**:
- Real-time token transfer events
- NFT transfer event tracking
- Event filtering and pagination
- Live updates with WebSocket connection
- Transaction hash linking

## 📜 Smart Contracts

### DEX Contracts

#### **SimpleDEX** (`SimpleDEX.sol`)
```solidity
contract SimpleDEX {
    function addLiquidity(uint256 amountA, uint256 amountB) external;
    function removeLiquidity(uint256 liquidityAmount) external;
    function swap(address tokenIn, uint256 amountIn) external;
    function getSwapAmount(address tokenIn, uint256 amountIn) external view;
    function getReserves() external view;
    function getUserLiquidity(address user) external view;
}
```
**Features**: AMM with constant product formula, 0.3% fees, ReentrancyGuard

#### **MyToken** (`MyToken.sol`)
```solidity
contract MyToken is ERC20 {
    constructor() ERC20("My Token", "MTK");
    function mint(address to, uint256 amount) external;
}
```
**Features**: ERC20 token with 18 decimals, public minting for testing

#### **SimpleUSDC** (`SimpleUSDC.sol`)
```solidity
contract SimpleUSDC is ERC20 {
    constructor() ERC20("Simple USDC", "sUSDC");
    function mint(address to, uint256 amount) external;
    function decimals() public pure override returns (uint8);
}
```
**Features**: Mock stablecoin with 6 decimals (like real USDC)

### NFT Contracts

#### **MyNFT** (`MyNFT.sol`)
```solidity
contract MyNFT is ERC721 {
    function mint(address to, string memory tokenURI) external;
    function setApprovalForAll(address operator, bool approved) external;
}
```
**Features**: ERC721 NFT collection with metadata support

#### **NFTMarketplace** (`NFTMarketplace.sol`)
```solidity
contract NFTMarketplace {
    function listItem(uint256 tokenId, uint256 price) external;
    function buyItem(uint256 tokenId) external payable;
    function cancelListing(uint256 tokenId) external;
    function getListing(uint256 tokenId) external view;
}
```
**Features**: NFT trading platform with listing management

### Utility Contracts

#### **BuyMeACoffee** (`BuyMeACoffee.sol`)
```solidity
contract BuyMeACoffee {
    function buyCoffee(uint numCoffees, string calldata userName, 
                      string calldata twitterHandle, string calldata message) external payable;
    function withdrawTips() external;
    function getMemos() external view returns (Memo[] memory);
}
```
**Features**: Donation system with memo functionality

#### **YourContract** (`YourContract.sol`)
```solidity
contract YourContract {
    function setGreeting(string memory _newGreeting) public payable;
    function withdraw() public;
}
```
**Features**: Basic contract with greeting functionality and premium features

#### **PriceFeed** (`PriceFeed.sol`)
```solidity
contract PriceFeed {
    function getEthPrice() external view returns (uint256);
    function getBtcPrice() external view returns (uint256);
}
```
**Features**: RedStone oracle integration for price feeds

## 🎨 Frontend Features

### Page Structure

#### **Homepage** (`/`)
- **TokenBalance** - Display user token balances
- **TokenTransfer** - Token transfer functionality
- **NFTCollection** - NFT collection overview

#### **DEX Interface** (`/dex`)
- **SwapPanel** - Token swapping with real-time quotes
- **LiquidityPanel** - Add/remove liquidity management
- Tab-based navigation
- Real-time pool statistics

#### **NFT Marketplace** (`/marketplace`)
- **MarketplaceGrid** - Grid layout of available NFTs
- **NFTCard** - Individual NFT display and actions
- Mint, buy, sell, list functionality
- Approval management system

#### **Gasless Transactions** (`/gasless`)
- **SmartWalletDemo** - ERC-4337 smart wallet interface
- Thirdweb integration
- Gasless transaction demos

#### **Price Oracle** (`/oracle`)
- **PriceDisplay** - Live ETH and BTC price feeds
- RedStone oracle integration
- Real-time price updates

#### **Block Explorer** (`/blockexplorer`)
- **AddressComponent** - Address inspection
- **TransactionHash** - Transaction lookup
- **ContractTabs** - Contract interaction
- Search and pagination

#### **Debug Interface** (`/debug`)
- **DebugContracts** - Contract interaction panel
- **ContractUI** - Function testing interface
- Read/write method execution
- Variable inspection

#### **Event Monitoring** (`/events`)
- Real-time event tracking
- Token and NFT transfer events
- Event filtering and pagination
- Transaction hash linking

### UI/UX Features
- **DaisyUI Components** - Modern, accessible design system
- **Responsive Layout** - Mobile-first responsive design
- **Dark/Light Theme** - Automatic theme switching
- **Loading States** - Smooth loading indicators
- **Error Handling** - Comprehensive error management
- **Real-time Updates** - Live data synchronization
- **Wallet Integration** - MetaMask and WalletConnect support

## 🚀 Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Git
- MetaMask or compatible wallet
- Lisk Sepolia testnet access

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/Abidoyesimze/LiskSea.git
cd scaffold-lisk
```

2. **Install dependencies**
```bash
# Install root dependencies
yarn install

# Install package dependencies
cd packages/hardhat && yarn install
cd ../nextjs && yarn install
```

3. **Environment Setup**
```bash
# Copy environment files
cp packages/hardhat/.env.example packages/hardhat/.env
cp packages/nextjs/.env.example packages/nextjs/.env

# Configure your environment variables
# Add your private key and RPC URLs to .env files
```

4. **Start development servers**
```bash
# Terminal 1: Start Hardhat node (local development)
cd packages/hardhat
yarn chain

# Terminal 2: Deploy contracts (local)
yarn deploy

# Terminal 3: Start frontend
cd packages/nextjs
yarn start
```

## 🚀 Deployment

### Deploy to Lisk Sepolia

1. **Configure network**
```bash
cd packages/hardhat
```

2. **Deploy all contracts**
```bash
npx hardhat deploy --network liskSepolia
```

3. **Verify contracts** (optional)
```bash
npx hardhat verify --network liskSepolia <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

### Contract Addresses (Lisk Sepolia)
```
MyToken: 0x673A3608D854F64ABe6E9557C180F97348FA5E66
SimpleUSDC: 0xc4674F7599614607Ba326843cadDFC3841D456a8
SimpleDEX: 0x279DBdCD8aA85Bc40E1f834B1ee3ABb447A81b04
MyNFT: [DEPLOYED_ADDRESS]
NFTMarketplace: 0xDBeeafC114f7982F0eaAd4B48D632b2E78856A7C
YourContract: [DEPLOYED_ADDRESS]
BuyMeACoffee: [DEPLOYED_ADDRESS]
```

### Network Configuration
- **Network**: Lisk Sepolia Testnet
- **Chain ID**: 4202
- **RPC URL**: https://rpc.sepolia-api.lisk.com
- **Explorer**: https://sepolia-blockscout.lisk.com

## 📖 Usage Guide

### Getting Started

1. **Connect Wallet**
   - Install MetaMask
   - Add Lisk Sepolia network (Chain ID: 4202)
   - Connect to the application

2. **Get Test Tokens**
   - Use the Debug interface to mint test tokens
   - Or use faucet if available

### DEX Operations

#### **Token Swapping** (`/dex`)
1. Navigate to DEX page
2. Select "Swap" tab
3. Enter amount to swap
4. Approve token if needed
5. Execute swap transaction

#### **Liquidity Management** (`/dex`)
1. Select "Liquidity" tab
2. Enter amounts for both tokens
3. Approve tokens for DEX contract
4. Add liquidity to earn fees

### NFT Marketplace (`/marketplace`)

#### **Minting NFTs**
1. Connect wallet
2. Use mint function to create NFTs
3. Set metadata URI

#### **Trading NFTs**
1. Approve marketplace for your NFTs
2. List NFTs for sale with price
3. Buy/sell NFTs with ETH
4. Cancel listings when needed

### Gasless Transactions (`/gasless`)
1. Connect with Thirdweb Smart Wallet
2. Create gasless transactions
3. Enjoy zero gas fees!

### Price Oracle (`/oracle`)
1. View live ETH and BTC prices
2. Prices update every 30 seconds
3. Powered by RedStone Oracle

### Block Explorer (`/blockexplorer`)
1. Search addresses or transaction hashes
2. View contract details and interactions
3. Inspect storage and logs

### Debug Interface (`/debug`)
1. Select deployed contracts
2. Call read/write functions directly
3. Test contract interactions
4. View contract state

### Event Monitoring (`/events`)
1. View real-time blockchain events
2. Track token and NFT transfers
3. Monitor contract interactions

## 🧪 Testing

### Smart Contract Tests
```bash
cd packages/hardhat
yarn test
```

### Frontend Development
```bash
cd packages/nextjs
yarn dev
```

### Integration Testing
1. Deploy contracts to Lisk Sepolia
2. Test all user flows
3. Verify contract interactions
4. Check event emissions

## 📁 Project Structure

```
scaffold-lisk/
├── packages/
│   ├── hardhat/                 # Smart contracts
│   │   ├── contracts/           # Solidity contracts
│   │   │   ├── SimpleDEX.sol    # AMM DEX contract
│   │   │   ├── MyToken.sol      # ERC20 token
│   │   │   ├── SimpleUSDC.sol   # Mock stablecoin
│   │   │   ├── MyNFT.sol        # ERC721 NFT contract
│   │   │   ├── NFTMarketplace.sol # NFT trading platform
│   │   │   ├── BuyMeACoffee.sol # Donation contract
│   │   │   ├── YourContract.sol # Basic contract
│   │   │   └── PriceFeed.sol    # Oracle integration
│   │   ├── deploy/              # Deployment scripts
│   │   ├── test/                # Contract tests
│   │   └── hardhat.config.ts    # Hardhat configuration
│   └── nextjs/                  # Frontend application
│       ├── app/                 # Next.js app directory
│       │   ├── dex/             # DEX interface
│       │   ├── marketplace/     # NFT marketplace
│       │   ├── gasless/         # Gasless transactions
│       │   ├── oracle/          # Price feeds
│       │   ├── blockexplorer/   # Block explorer
│       │   ├── debug/           # Debug interface
│       │   ├── events/          # Event monitoring
│       │   └── page.tsx         # Homepage
│       ├── components/          # React components
│       │   └── example-ui/      # UI components
│       ├── contracts/           # Contract ABIs and addresses
│       ├── hooks/               # Custom React hooks
│       └── utils/               # Utility functions
├── docs/                        # Documentation
├── .github/                     # GitHub workflows
└── README.md                    # This file
```

## 🛠️ Technologies Used

### Smart Contracts
- **Solidity** ^0.8.0 - Smart contract language
- **OpenZeppelin** - Standard contract libraries
- **Hardhat** - Development framework
- **TypeScript** - Type safety

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript interface for Ethereum
- **Thirdweb** - Web3 SDK for smart wallets

### Blockchain & Web3
- **Lisk Sepolia** - Test network
- **MetaMask** - Wallet integration
- **WalletConnect** - Multi-wallet support
- **ERC-4337** - Account abstraction
- **RedStone Finance** - Oracle price feeds

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Pre-commit linting
- **Yarn** - Package manager

## 🚀 Development

### Local Development
```bash
# Start local blockchain
yarn chain

# Deploy contracts locally
yarn deploy

# Start frontend
yarn start

# Run tests
yarn test
```

### Production Build
```bash
# Build frontend
cd packages/nextjs
yarn build

# Deploy to production
yarn deploy:lisk
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation
- Follow conventional commits
- Ensure all tests pass

## 🎯 Challenge Completion Status

This implementation successfully completes multiple Web3 challenges:

✅ **DEX Challenge** - Automated Market Maker with token swapping  
✅ **NFT Marketplace** - Complete NFT minting and trading platform  
✅ **Gasless Transactions** - ERC-4337 Smart Wallets implementation  
✅ **Price Oracle Integration** - RedStone Finance oracle feeds  
✅ **Block Explorer** - Transaction and address inspection tools  
✅ **Debug Interface** - Direct smart contract interaction  
✅ **Event Monitoring** - Real-time blockchain event tracking  
✅ **Donation Platform** - Buy Me A Coffee implementation  
✅ **Deployment** - Live on Lisk Sepolia testnet  
✅ **Testing** - Comprehensive test coverage  
✅ **Documentation** - Complete project documentation  

## 📞 Support

For support, questions, or contributions:
- Create an issue on GitHub
- Contact the development team
- Join the Lisk community

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for the Lisk ecosystem and Web3 community**