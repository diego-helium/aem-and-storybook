import { test, expect } from '@playwright/test';

const pageUrl = '/iframe.html?viewMode=story&id=';

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
});

test('components-card--vertical', async ({ page }, testInfo) => {
  await page.goto(`${pageUrl}components-card--vertical`);
  await page.waitForTimeout(2000);
  await expect(page).toHaveScreenshot(`${testInfo.title}.png`);
});

test('components-card--no-image', async ({ page }, testInfo) => {
  await page.goto(`${pageUrl}components-card--no-image`);
  await page.waitForTimeout(2000);
  await expect(page).toHaveScreenshot(`${testInfo.title}.png`);
});

