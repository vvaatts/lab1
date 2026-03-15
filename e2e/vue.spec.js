import { test, expect } from '@playwright/test';

test('Відвідування головної сторінки та перевірка заголовків (MVP)', async ({ page }) => {
  // Користувач заходить на головну сторінку
  await page.goto('/');

  // Перевіряємо, чи бачить користувач головний заголовок
  await expect(page.locator('h1')).toHaveText('UniDone');

  // Перевіряємо, чи є правильний підзаголовок
  await expect(page.locator('h2')).toHaveText('Student Deadline Manager');
});