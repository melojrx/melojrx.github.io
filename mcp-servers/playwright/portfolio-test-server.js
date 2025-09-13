import { McpServer } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { chromium } from 'playwright-core';

// Create the MCP server
const server = new McpServer({
  name: 'portfolio-test-mcp-server',
  version: '1.0.0'
});

// Store browser instances
let browser = null;
let page = null;

// Register a tool to test the portfolio site
server.registerTool(
  'test_portfolio_homepage',
  {
    description: 'Test the portfolio homepage for correct title and theme toggle',
    parameters: z.object({
      url: z.string().url().default('http://localhost:8080')
    })
  },
  async (params) => {
    const { url } = params;
    
    try {
      // Launch browser if not already launched
      if (!browser) {
        browser = await chromium.launch({ headless: true });
      }
      
      const context = await browser.newContext();
      page = await context.newPage();
      await page.goto(url);
      
      // Test 1: Check page title
      const title = await page.title();
      const hasPortfolioInTitle = title.includes('Portfólio') || title.includes('Portfolio');
      
      // Test 2: Check for theme toggle button
      const themeToggleExists = await page.isVisible('button[aria-label="Alternar tema"]');
      
      // Test 3: Check initial theme (should be dark)
      const hasDarkClass = await page.evaluate(() => document.documentElement.classList.contains('dark'));
      
      // Test 4: Click theme toggle and check if it changes
      let themeChanged = false;
      if (themeToggleExists) {
        const initialTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
        await page.click('button[aria-label="Alternar tema"]');
        await page.waitForTimeout(500); // Wait for transition
        const newTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
        themeChanged = initialTheme !== newTheme;
      }
      
      return {
        content: [{
          type: 'text',
          text: `Portfolio Test Results:
1. Page title check: ${hasPortfolioInTitle ? 'PASS' : 'FAIL'} (Title: "${title}")
2. Theme toggle exists: ${themeToggleExists ? 'PASS' : 'FAIL'}
3. Initial theme is dark: ${hasDarkClass ? 'PASS' : 'FAIL'}
4. Theme toggle works: ${themeChanged ? 'PASS' : 'FAIL'}`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: 'text',
          text: `Error testing portfolio: ${error.message}`
        }]
      };
    }
  }
);

// Register a tool to take a screenshot of the portfolio
server.registerTool(
  'screenshot_portfolio',
  {
    description: 'Take a screenshot of the portfolio site',
    parameters: z.object({
      url: z.string().url().default('http://localhost:8080'),
      fullPage: z.boolean().default(false)
    })
  },
  async (params) => {
    const { url, fullPage } = params;
    
    try {
      // Launch browser if not already launched
      if (!browser) {
        browser = await chromium.launch({ headless: true });
      }
      
      const context = await browser.newContext();
      page = await context.newPage();
      await page.goto(url);
      
      const screenshot = await page.screenshot({ fullPage });
      const base64Image = screenshot.toString('base64');
      
      return {
        content: [
          {
            type: 'text',
            text: `Screenshot of ${url} taken successfully`
          },
          {
            type: 'image',
            data: base64Image,
            mimeType: 'image/png'
          }
        ]
      };
    } catch (error) {
      return {
        content: [{
          type: 'text',
          text: `Error taking screenshot: ${error.message}`
        }]
      };
    }
  }
);

// Register a tool to close the browser
server.registerTool(
  'close_browser',
  {
    description: 'Close the browser instance',
    parameters: z.object({})
  },
  async () => {
    if (browser) {
      await browser.close();
      browser = null;
      page = null;
    }
    
    return {
      content: [{
        type: 'text',
        text: 'Browser closed successfully'
      }]
    };
  }
);

// Connect the server to stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);

console.log('Portfolio Test MCP server started');