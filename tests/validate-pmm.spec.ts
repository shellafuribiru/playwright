import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('akses-pmm', async ({ page }) => {
  await page.goto('https://guru.kemdikbud.go.id/');
  
  //validasi button pmm
  await expect(page.locator('[data-testid="landing-open-pmm-button"]')).toBeVisible();
  await page.click('text="Buka PMM"');
  await expect(page.locator('[data-testid="login-button"]')).toBeVisible();
  await page.goto('https://guru.kemdikbud.go.id/');

 // validasi banner section
  await expect(page.locator('text="PMM meningkatkan kualitas kompetensi pendidik di Indonesia"')).toBeVisible();
  const btn_yutub = '//button[contains(text(), "Video kilas balik PMM")]';
  await expect(page.locator(btn_yutub)).toBeVisible();
  await page.click(btn_yutub);
  const media_player = '//iframe[@title="YouTube video player"]'; 
  await expect(page.locator(media_player)).toBeVisible();
  await page.waitForSelector('.PopupVideo_closeButton__aeAfu', { state: 'visible', timeout: 150000 });
  await page.click('.PopupVideo_closeButton__aeAfu', { timeout: 150000 });
  const btn_kenali_pmm = '//button[contains(text(), "Kenali PMM selengkapnya")]';
  await expect(page.locator(btn_kenali_pmm)).toBeVisible();
  await page.click(btn_kenali_pmm);
  await page.waitForSelector('text="Materi terpilih untuk mendukung kontribusi Anda di sekolah"', { state: 'visible', timeout: 150000 });

  //validasi kumpulan dokumen
  await page.click('text="Pahami Merdeka Belajar dan Kurikulum Merdeka"');
  await page.waitForSelector('[data-testid="login-button"]' , {state : 'visible', timeout : 5000});

  //back to halaman landing page pmm
  await page.goto('https://guru.kemdikbud.go.id/');

  await page.locator('text="Pengembangan diri"').scrollIntoViewIfNeeded();

  //validasi product pelatihan mandiri
  await page
    .getByRole("button", { name: "Cek Pelatihan Mandiri" })
    .click({ delay: 200 });
  await expect(page).toHaveURL(
    "https://guru.kemdikbud.go.id/login?from=/pelatihan-mandiri"
  );
  await expect(page.locator('[data-testid="login-button"]')).toBeVisible();

  //back to halaman landing page pmm
  await page.goto('https://guru.kemdikbud.go.id/');
});