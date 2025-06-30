import { test } from '@playwright/test';
import { chromium, firefox } from 'playwright';

test('Launch Red Bus in Edge', async () => {
  const browser1 = await chromium.launch({ channel: 'msedge', headless: false });
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();

  await page1.goto("https://www.redbus.in/");
  const pageTitle1 = await page1.title();
  const currentUrl1 = page1.url();

  console.log('--- Red Bus (Edge) ---');
  console.log('Title:', pageTitle1);
  console.log('URL:', currentUrl1);

  await page1.waitForTimeout(5000);
  await browser1.close();
});

test('Launch Flipkart in Chrome', async () => {
  //const browser2 = await firefox.launch({ headless: false });->getting failed,so tried in chrome
  const browser2 = await chromium.launch({ channel: 'chrome', headless: false });
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();

  await page2.goto("https://www.flipkart.com/");
  const pageTitle2 = await page2.title();
  const currentUrl2 = page2.url();

  console.log('--- Flipkart (chrome) ---');
  console.log('Title:', pageTitle2);
  console.log('URL:', currentUrl2);

  await page2.waitForTimeout(4000);
  await browser2.close();
});
