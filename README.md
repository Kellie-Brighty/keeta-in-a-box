# 📦 Keeta-in-a-Box

A zero-config, one-click local development environment for the **Keeta Network**.

> ⚡ _Stop wasting time configuring local nodes, syncing chains, and hunting for test tokens. Start building Keeta Apps instantly._

[![Twitter Follow](https://img.shields.io/twitter/follow/keetanetwork?style=social)](https://twitter.com/keetanetwork)

---

## What is this?

Keeta-in-a-Box solves the biggest developer experience bottleneck in the early Keeta ecosystem: **local testing**.

Instead of dealing with manual node binaries, genesis block configurations, or public testnet faucet wait times, this tool orchestrates a private, standalone Keeta node on your machine via Docker and exposes a CLI to manage it and instantly fund your development wallets.

## Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [Docker & Docker Compose](https://www.docker.com/)

---

## Quickstart

### 1. Install

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/keeta-in-a-box.git
cd keeta-in-a-box
npm install
npm run build
npm link
```

### 2. Start the Devnet

Spin up your local Keeta node with a single command:

```bash
keeta-devnet up
```

_(This pulls the official `keetanetwork/node-rs` image and starts it in standalone Validator mode on `localhost:8443`)_

### 3. Fund your Wallet

Need tokens to test your DApp? Use the CLI to instantly transfer 100M test tokens from the devnet Genesis account to your address:

```bash
keeta-devnet fund <your_keeta_address>
```

### 4. Stop the Devnet

When you're done, safely tear down the environment and clear the ephemeral chain data:

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

## Why I Built This (Building in Public 🚀)

I believe the Keeta Network's 10M TPS DAG architecture is game-changing for real-world assets and high-throughput use cases. But great chains need great Developer Experience (DX). I built `Keeta-in-a-Box` to make onboarding for new devs frictionless.

Let's build the future on Keeta.

_(Open to contributions! Submit a PR or open an issue.)_
