#!/usr/bin/env node

// Simple test script to verify the Playwright MCP server is working

const { spawn } = require('child_process');
const path = require('path');

// Start the MCP server
const serverPath = path.join(__dirname, 'mcp-servers', 'playwright', 'server.js');
const server = spawn('node', [serverPath]);

console.log('Starting Playwright MCP server...');

server.stdout.on('data', (data) => {
  console.log(`[SERVER] ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`[ERROR] ${data}`);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

// Give the server a moment to start
setTimeout(() => {
  console.log('Server should be running now. You can test it with Qwen Code.');
  console.log('Press Ctrl+C to stop the server.');
}, 2000);

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  server.kill();
  process.exit(0);
});