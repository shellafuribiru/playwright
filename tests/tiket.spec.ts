import { test, expect } from '@playwright/test';
import exp from 'constants';
import { ADDRGETNETWORKPARAMS } from 'dns';

test('tiket', async ({ page }) => {
  await page.goto('https://www.tiket.com/');
// Ambil elemen <h1> dengan teks "Cek Tiket Pesawat"
  const menu_pesawat = page.locator('//p[contains(text(), "Pesawat")]');
  
 // Tunggu hingga elemen terlihat
  await expect(menu_pesawat).toBeVisible();

  // click menu pesawat
  await (menu_pesawat).click({force : true});
  await expect(page.locator('text="Cek Harga Tiket Pesawat Online Murah dan Promo Hari Ini"')).toBeVisible();

  // klik bandara awal
  await page.getByTestId('clickable-departure-input').locator('div').click({force : true});

  
  // //validate modal

  await expect(page.getByText('Pilih Kota atau Bandara')).toBeVisible();


  // //masukkan nama kota
  await page.locator('//input[@placeholder="Masukkan nama kota dan bandara"]').fill("Jakarta");
  await page.locator('.List_title__cGXOr Text_text__20xjq Text_size_b1__btSxJ Text_weight_bold__spV33').click();
});

