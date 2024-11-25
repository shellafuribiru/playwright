import { test, expect } from '@playwright/test';

test('test11', async ({ page }) => {
  await page.goto('https://www.tiket.com/pesawat');
  await page.getByTestId('clickable-departure-input').locator('div').click();
  await page.getByRole('heading', { name: 'Pilih Kota atau Bandara' }).click();
  await page.getByPlaceholder('Masukkan nama kota atau').click();
});