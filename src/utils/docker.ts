import { spawn } from 'child_process';
import * as path from 'path';

export function runDockerCompose(args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    // We assume the docker-compose.yml is packed in the ../docker directory relative to the CLI built file
    const dockerDir = path.resolve(__dirname, '../../docker');
    
    console.log(`Executing: docker-compose ${args.join(' ')} (in ${dockerDir})`);
    
    const dockerProcess = spawn('docker-compose', args, {
      cwd: dockerDir,
      stdio: 'inherit',
    });

    dockerProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`docker-compose exited with code ${code}`));
      }
    });

    dockerProcess.on('error', (err) => {
      reject(new Error(`Failed to start docker-compose: ${err.message}`));
    });
  });
}
