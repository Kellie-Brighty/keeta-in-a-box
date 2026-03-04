"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fundAddress = fundAddress;
const keetanet_client_1 = __importDefault(require("@keetanetwork/keetanet-client"));
// In a real local devnet, this would be a known private key configured
// in the genesis.json or local-node.config.json that starts with a balance.
// For now, we stub it with a generic testing key.
const DEVNET_GENESIS_SEED = '4EBDA05AE05AE05AE05AE05AE05AE05AE05AE05AE05AE05AE05AE05AE05AE05A';
async function fundAddress(targetAddress) {
    // Account.fromSeed requires an index
    const genesisAccount = keetanet_client_1.default.lib.Account.fromSeed(DEVNET_GENESIS_SEED, 0);
    // Connect to the local docker instance mimicking KeetaNet Client definitions
    const client = new keetanet_client_1.default.Client([{
            key: genesisAccount,
            endpoints: {
                api: 'https://localhost:8443',
                p2p: 'https://localhost:443'
            }
        }]);
    console.log(`📡 Connecting to local Keeta node...`);
    // Initialize the user client
    const userClient = new keetanet_client_1.default.UserClient({
        client,
        signer: genesisAccount,
        account: genesisAccount,
        network: 0n, // Local devnet uses 0n by default if not mapped otherwise
        networkAlias: 'dev' // 'local' is not in the type alias, dev is
    });
    console.log('✍️  Constructing funding transaction...');
    try {
        // Generate the base token address required by send
        const baseAddresses = keetanet_client_1.default.lib.Account.generateBaseAddresses(0n);
        // We attempt to send 100M tokens to the target. 
        // userClient.send requires (to, amount, token)
        const result = await userClient.send(targetAddress, 100_000_000, baseAddresses.baseToken.publicKeyString.toString());
        if (result.publish) {
            console.log(`🎉 Success! Address funded.`);
        }
        else {
            console.error('❌ Failed to publish funding block to local node.');
        }
    }
    catch (error) {
        console.error(`❌ Funding failed: ${error.message}`);
        console.error('Did you remember to run `keeta-devnet up` first?');
    }
}
