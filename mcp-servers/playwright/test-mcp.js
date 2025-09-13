import { spawn } from 'child_process';
import { createInterface } from 'readline';

// Spawn the MCP server process
const serverProcess = spawn('pnpm', ['exec', 'node', 'portfolio-test-server.js'], {
  cwd: './mcp-servers/playwright'
});

// Create readline interface for communication
const rl = createInterface({
  input: serverProcess.stdout,
  output: serverProcess.stdin
});

// Handle server output
serverProcess.stdout.on('data', (data) => {
  console.log(`Server output: ${data}`);
});

// Handle server errors
serverProcess.stderr.on('data', (data) => {
  console.error(`Server error: ${data}`);
});

// Handle server exit
serverProcess.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

// Send initialization message
setTimeout(() => {
  const initMessage = {
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2024-08-07",
      capabilities: {},
      clientInfo: {
        name: "test-client",
        version: "1.0.0"
      }
    }
  };
  
  serverProcess.stdin.write(JSON.stringify(initMessage) + '\n');
}, 1000);

// Send tool list request
setTimeout(() => {
  const toolListMessage = {
    jsonrpc: "2.0",
    id: 2,
    method: "tools/list"
  };
  
  serverProcess.stdin.write(JSON.stringify(toolListMessage) + '\n');
}, 2000);

// Close the server after 5 seconds
setTimeout(() => {
  serverProcess.kill();
}, 5000);