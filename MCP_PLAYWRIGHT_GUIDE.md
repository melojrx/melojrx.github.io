# Playwright MCP Server Configuration for Qwen Code

## Overview

This document provides a complete guide for configuring and using a Playwright MCP server with Qwen Code to automate browser testing of your portfolio website.

## What is an MCP Server?

An MCP (Model Context Protocol) server is an application that exposes tools and resources to the Qwen Code CLI through the Model Context Protocol, allowing it to interact with external systems and data sources. In this case, we've created a Playwright MCP server that allows Qwen Code to control browsers for testing your portfolio website.

## Features of the Playwright MCP Server

The Playwright MCP server provides the following capabilities:

1. **Portfolio Homepage Testing**: Automatically test your portfolio homepage for:
   - Correct page title
   - Theme toggle button existence
   - Initial theme (should be dark)
   - Theme toggle functionality

2. **Portfolio Screenshots**: Take screenshots of your portfolio site for visual verification

3. **Browser Management**: Properly manage browser instances and clean up resources

## Prerequisites

1. Playwright is already installed in your project
2. MCP SDK is installed (`@modelcontextprotocol/sdk`)
3. Your portfolio site is running (default: http://localhost:8080)

## Configuration

The Playwright MCP server is configured in `.qwen/settings.json`:

```json
{
  "mcpServers": {
    "portfolio-test": {
      "command": "pnpm",
      "args": ["exec", "node", "portfolio-test-server.js"],
      "cwd": "./mcp-servers/playwright",
      "trust": true
    }
  }
}
```

This configuration tells Qwen Code:
- How to start the server (`command` and `args`)
- Where to find the server files (`cwd`)
- To trust the server and bypass confirmation prompts (`trust`)

## Available Tools

The Playwright MCP server exposes three tools:

### 1. `test_portfolio_homepage`

Tests the portfolio homepage for various functionality.

**Parameters:**
- `url` (string, optional): The URL to test (defaults to "http://localhost:8080")

**Usage in Qwen Code:**
```
/test_portfolio_homepage --url="http://localhost:8080"
```

### 2. `screenshot_portfolio`

Takes a screenshot of the portfolio site.

**Parameters:**
- `url` (string, optional): The URL to screenshot (defaults to "http://localhost:8080")
- `fullPage` (boolean, optional): Whether to capture the full page (defaults to false)

**Usage in Qwen Code:**
```
/screenshot_portfolio --url="http://localhost:8080" --fullPage=true
```

### 3. `close_browser`

Closes the browser instance.

**Parameters:**
- None

**Usage in Qwen Code:**
```
/close_browser
```

## Benefits

Using the Playwright MCP server with Qwen Code provides several advantages:

1. **Automated Testing**: Automatically verify that your portfolio site works correctly
2. **Visual Verification**: Capture screenshots to visually confirm your site looks as expected
3. **Theme Testing**: Ensure your dark/light mode toggle works correctly
4. **Integration**: Seamless integration with Qwen Code's powerful AI capabilities
5. **Extensibility**: Easy to add more testing capabilities as needed

## Customization

You can customize the Playwright MCP server by modifying the `mcp-servers/playwright/portfolio-test-server.js` file. Some ideas for extensions:

1. Add more specific element testing
2. Test form submissions
3. Verify responsive design across different viewport sizes
4. Test accessibility features
5. Add performance testing capabilities

## Troubleshooting

If you encounter issues with the Playwright MCP server:

1. **Server not starting**: Ensure all dependencies are installed with `pnpm install` in the `mcp-servers/playwright` directory
2. **Tools not appearing**: Check that the configuration in `.qwen/settings.json` is correct
3. **Browser not launching**: Ensure Playwright browsers are installed with `npx playwright install`
4. **Permission issues**: Make sure the server files have appropriate permissions

## Conclusion

The Playwright MCP server provides a powerful way to automate browser testing of your portfolio website directly from Qwen Code. By leveraging Playwright's robust browser automation capabilities and MCP's standardized protocol, you can ensure your portfolio works correctly across different browsers and scenarios while taking advantage of Qwen Code's AI-powered development tools.