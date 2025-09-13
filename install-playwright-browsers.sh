#!/bin/bash
# Script to install Playwright browsers

echo "Installing Playwright browsers..."
npx playwright install chromium firefox webkit
echo "Playwright browsers installed successfully!"