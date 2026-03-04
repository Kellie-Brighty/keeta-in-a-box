#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const docker_1 = require("./utils/docker");
const program = new commander_1.Command();
program
    .name('keeta-devnet')
    .description('A zero-config local development environment for the Keeta Network')
    .version('1.0.0');
program
    .command('up')
    .description('Start the local Keeta Network node and fund the genesis accounts')
    .action(async () => {
    console.log('🔄 Starting Keeta-in-a-Box local devnet...');
    try {
        await (0, docker_1.runDockerCompose)(['up', '-d']);
        console.log('✅ Keeta devnet is running on localhost:8443!');
    }
    catch (err) {
        console.error('❌ Failed to start Keeta devnet:', err);
        process.exit(1);
    }
});
program
    .command('down')
    .description('Stop the local Keeta Network node and clear data')
    .action(async () => {
    console.log('🛑 Stopping local Keeta devnet...');
    try {
        // Use -v to prune volumes so we get a fresh state next time
        await (0, docker_1.runDockerCompose)(['down', '-v']);
        console.log('✅ Keeta devnet stopped and data cleared.');
    }
    catch (err) {
        console.error('❌ Failed to stop Keeta devnet:', err);
        process.exit(1);
    }
});
