import { test, expect } from '@playwright/test';

test('homepage visual test', async ({ page }) => {
  await page.goto('https://diego-helium.github.io/aem-and-storybook/?path=/story/components-card--vertical');
  await page.waitForTimeout(2000);
  await expect(page).toHaveScreenshot('homepage-lfs.png');
});
