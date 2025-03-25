import { test, expect } from '@playwright/test';

const pageUrl = 'https://diego-helium.github.io/aem-and-storybook/iframe.html?viewMode=story&id=';

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
});

test('homepage visual test', async ({ page }) => {
  await page.goto(`${pageUrl}components-card--vertical`);
  await page.waitForTimeout(2000);
  await expect(page).toHaveScreenshot('homepage.png');
});
