import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('/');

  // Expect the page to have the correct title
  await expect(page).toHaveTitle(/Portfolio/);
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check if main navigation elements are present
  const homeLink = page.getByRole('link', { name: 'Home' });
  const aboutLink = page.getByRole('link', { name: 'About' });
  const projectsLink = page.getByRole('link', { name: 'Projects' });
  const contactLink = page.getByRole('link', { name: 'Contact' });
  
  // These expectations will depend on your actual navigation structure
  // await expect(homeLink).toBeVisible();
  // await expect(aboutLink).toBeVisible();
  // await expect(projectsLink).toBeVisible();
  // await expect(contactLink).toBeVisible();
});

test('dark mode toggle works', async ({ page }) => {
  await page.goto('/');
  
  // Check if dark mode toggle exists
  // const darkModeToggle = page.getByRole('button', { name: 'Toggle theme' });
  // await expect(darkModeToggle).toBeVisible();
  
  // Add actual test implementation based on your theme implementation
});