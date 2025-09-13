const { chromium } = require('playwright-core');

async function testPlaywright() {
  let browser;
  
  try {
    // Try to launch a browser
    console.log('Launching browser...');
    browser = await chromium.launch({ headless: true });
    console.log('Browser launched successfully!');
    
    // Create a new page
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Navigate to a simple page
    console.log('Navigating to example.com...');
    await page.goto('https://example.com');
    
    // Get the title
    const title = await page.title();
    console.log(`Page title: ${title}`);
    
    // Close the browser
    await browser.close();
    console.log('Browser closed successfully!');
    
    console.log('Playwright is working correctly!');
  } catch (error) {
    console.error('Error testing Playwright:', error.message);
    
    if (browser) {
      await browser.close();
    }
  }
}

// Run the test
testPlaywright();