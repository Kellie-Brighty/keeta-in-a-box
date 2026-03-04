# Keeta-in-a-Box

A local development environment for the Keeta Network.

> _Skip the manual node configuration and testnet faucets. Run a local Keeta node instantly._

[![Twitter Follow](https://img.shields.io/twitter/follow/keetanetwork?style=social)](https://twitter.com/keetanetwork)

---

## What is this?

Setting up a local testing environment for Keeta is currently too manual.

Instead of dealing with node binaries, genesis configurations, or waiting on public testnets, this tool orchestrates a private, standalone Keeta node via Docker. It also exposes a CLI to manage the node and fund your development wallets instantly.

## Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [Docker & Docker Compose](https://www.docker.com/)

---

## Quickstart

### 1. Install

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Kellie-Brighty/keeta-in-a-box.git
cd keeta-in-a-box
npm install
npm run build
npm link
```

### 2. Start the Devnet

Spin up your local Keeta node:

```bash
keeta-devnet up
```

_(This pulls the `keetanetwork/node-rs` image and starts it in standalone Validator mode on `localhost:8443`)_

### 3. Fund your Wallet

Need tokens to test your app? Use the CLI to transfer 100M test tokens from the devnet Genesis account to your address:

```bash
keeta-devnet fund <your_keeta_address>
```

### 4. Stop the Devnet

When you're done testing, you can tear down the environment and clear the chain data:

```bash
keeta-devnet down
```

---

## Using with KeetaNet Client

To point your Keeta SDK to your new local devnet, initialize your client like this:

```typescript
import KeetaNet from "@keetanetwork/keetanet-client";

const client = new KeetaNet.Client([
  {
    endpoints: {
      api: "https://localhost:8443",
      p2p: "https://localhost:443",
    },
  },
]);
```

---

## Why I Built This

I think Keeta Network's architecture is a strong fit for high-throughput use cases, but developers need better tooling to adopt it. I built `Keeta-in-a-Box` to make onboarding for new devs much smoother.

_(Open to contributions! Submit a PR or open an issue.)_
