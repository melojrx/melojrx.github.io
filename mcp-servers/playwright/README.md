# Playwright MCP Server for Portfolio Testing

This MCP server provides tools for testing your portfolio website using Playwright browser automation.

## Features

- Test portfolio homepage for correct title and theme toggle functionality
- Take screenshots of your portfolio site
- Close browser instances when done

## Tools Available

1. `test_portfolio_homepage` - Tests the portfolio homepage for:
   - Correct page title
   - Theme toggle button existence
   - Initial theme (should be dark)
   - Theme toggle functionality

2. `screenshot_portfolio` - Takes a screenshot of the portfolio site

3. `close_browser` - Closes the browser instance

## Setup

1. The MCP server is already configured in `.qwen/settings.json`
2. Make sure your portfolio is running on `http://localhost:8080`
3. Start the Qwen Code CLI

## Usage

Once configured, you can use the tools directly in Qwen Code:

```
/test_portfolio_homepage --url="http://localhost:8080"
```

or

```
/screenshot_portfolio --url="http://localhost:8080" --fullPage=true
```

## Customization

You can modify the `portfolio-test-server.js` file to add more testing capabilities or customize the existing tests.