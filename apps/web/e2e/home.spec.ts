import { expect, test } from '@playwright/test'

test('home page renders title', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Vue Team Starter' })).toBeVisible()
})

test('theme toggle works', async ({ page }) => {
  await page.goto('/')
  const button = page.getByRole('button', { name: 'Dark mode' })
  await button.click()
  await expect(page.getByRole('button', { name: 'Light mode' })).toBeVisible()
})
