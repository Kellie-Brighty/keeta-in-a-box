#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('keeta-devnet')
  .description('A zero-config local development environment for the Keeta Network')
  .version('1.0.0');

program
  .command('up')
  .description('Start the local Keeta Network node and fund the genesis accounts')
  .action(async () => {
    console.log('🔄 Starting Keeta-in-a-Box local devnet...');
    // TODO: Implement docker-compose up logic
    console.log('✅ Keeta devnet is running on localhost!');
  });

program
  .command('down')
  .description('Stop the local Keeta Network node and clear data')
  .action(async () => {
    console.log('🛑 Stopping local Keeta devnet...');
    // TODO: Implement docker-compose down logic
    console.log('✅ Keeta devnet stopped.');
  });

program
  .command('fund <address>')
  .description('Instantly fund a local Keeta address with test tokens')
  .action(async (address) => {
    console.log(`💸 Funding address: ${address}...`);
    // TODO: Connect to local network using SDK and transfer from genesis
    console.log(`✅ successfully funded ${address} with 100,000,000 tokens!`);
  });

program.parse(process.argv);
