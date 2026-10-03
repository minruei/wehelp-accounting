import { test, expect } from '@playwright/test'

test('新增和刪除紀錄，小計會跟著變', async ({ page }) => {
  // 從首頁進記帳頁
  await page.goto('/')
  await page.getByText('點此開始').click()
  await expect(page).toHaveURL(/\/accounting$/)
  await expect(page.getByText('小計：48100')).toBeVisible()

  // 新增一筆收入 500
  await page.getByRole('combobox').selectOption('income')
  await page.getByPlaceholder('金額').fill('500')
  await page.getByPlaceholder('說明').fill('統一發票中獎')
  await page.getByText('新增紀錄').click()
  await expect(page.getByText('小計：48600')).toBeVisible()

  // 刪掉吃大餐 -1200
  await page.getByRole('listitem').filter({ hasText: '吃大餐' }).getByText('刪除').click()
  await expect(page.getByText('吃大餐')).toHaveCount(0)
  await expect(page.getByText('小計：49800')).toBeVisible()
})
