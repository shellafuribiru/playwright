import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tiket.com/');
  await page.getByLabel('Pesawat').click();
  await page.goto('https://www.tiket.com/pesawat');
  await page.getByRole('heading', { name: 'Cek Harga Tiket Pesawat Online Murah dan Promo Hari Ini' }).click();
});