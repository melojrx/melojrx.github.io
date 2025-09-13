import { McpServer } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { chromium, firefox, webkit } from 'playwright-core';

// Create the MCP server
const server = new McpServer({
  name: 'playwright-mcp-server',
  version: '1.0.0'
});

// Store browser instances
const browsers = new Map();
let browserCounter = 0;

// Register a tool to launch a browser
server.registerTool(
  'launch_browser',
  {
    description: 'Launch a browser instance',
    parameters: z.object({
      browserType: z.enum(['chromium', 'firefox', 'webkit']).default('chromium'),
      headless: z.boolean().default(true)
    })
  },
  async (params) => {
    const { browserType, headless } = params;
    
    let browser;
    switch (browserType) {
      case 'chromium':
        browser = await chromium.launch({ headless });
        break;
      case 'firefox':
        browser = await firefox.launch({ headless });
        break;
      case 'webkit':
        browser = await webkit.launch({ headless });
        break;
      default:
        throw new Error(`Unsupported browser type: ${browserType}`);
    }
    
    const browserId = `browser_${++browserCounter}`;
    browsers.set(browserId, browser);
    
    return {
      content: [{
        type: 'text',
        text: `Launched ${browserType} browser with ID: ${browserId}`
      }]
    };
  }
);

// Register a tool to navigate to a URL
server.registerTool(
  'navigate_to_url',
  {
    description: 'Navigate to a URL in a browser instance',
    parameters: z.object({
      browserId: z.string().describe('The ID of the browser instance'),
      url: z.string().url().describe('The URL to navigate to')
    })
  },
  async (params) => {
    const { browserId, url } = params;
    
    const browser = browsers.get(browserId);
    if (!browser) {
      throw new Error(`Browser with ID ${browserId} not found`);
    }
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    
    // Store the page for future operations
    browsers.set(`${browserId}_context`, context);
    browsers.set(`${browserId}_page`, page);
    
    return {
      content: [{
        type: 'text',
        text: `Navigated to ${url} in browser ${browserId}`
      }]
    };
  }
);

// Register a tool to take a screenshot
server.registerTool(
  'take_screenshot',
  {
    description: 'Take a screenshot of the current page',
    parameters: z.object({
      browserId: z.string().describe('The ID of the browser instance'),
      fullPage: z.boolean().default(false)
    })
  },
  async (params) => {
    const { browserId, fullPage } = params;
    
    const page = browsers.get(`${browserId}_page`);
    if (!page) {
      throw new Error(`Page for browser ID ${browserId} not found`);
    }
    
    const screenshot = await page.screenshot({ fullPage });
    const base64Image = screenshot.toString('base64');
    
    return {
      content: [
        {
          type: 'text',
          text: `Screenshot taken for browser ${browserId}`
        },
        {
          type: 'image',
          data: base64Image,
          mimeType: 'image/png'
        }
      ]
    };
  }
);

// Register a tool to close a browser
server.registerTool(
  'close_browser',
  {
    description: 'Close a browser instance',
    parameters: z.object({
      browserId: z.string().describe('The ID of the browser instance to close')
    })
  },
  async (params) => {
    const { browserId } = params;
    
    const browser = browsers.get(browserId);
    if (!browser) {
      throw new Error(`Browser with ID ${browserId} not found`);
    }
    
    await browser.close();
    browsers.delete(browserId);
    browsers.delete(`${browserId}_context`);
    browsers.delete(`${browserId}_page`);
    
    return {
      content: [{
        type: 'text',
        text: `Closed browser ${browserId}`
      }]
    };
  }
);

// Register a tool to get page title
server.registerTool(
  'get_page_title',
  {
    description: 'Get the title of the current page',
    parameters: z.object({
      browserId: z.string().describe('The ID of the browser instance')
    })
  },
  async (params) => {
    const { browserId } = params;
    
    const page = browsers.get(`${browserId}_page`);
    if (!page) {
      throw new Error(`Page for browser ID ${browserId} not found`);
    }
    
    const title = await page.title();
    
    return {
      content: [{
        type: 'text',
        text: `Page title: ${title}`
      }]
    };
  }
);

// Register a tool to get page content
server.registerTool(
  'get_page_content',
  {
    description: 'Get the HTML content of the current page',
    parameters: z.object({
      browserId: z.string().describe('The ID of the browser instance')
    })
  },
  async (params) => {
    const { browserId } = params;
    
    const page = browsers.get(`${browserId}_page`);
    if (!page) {
      throw new Error(`Page for browser ID ${browserId} not found`);
    }
    
    const content = await page.content();
    
    return {
      content: [{
        type: 'text',
        text: `Page content length: ${content.length} characters`
      }]
    };
  }
);

// Connect the server to stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);

console.log('Playwright MCP server started');