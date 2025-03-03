import { test } from "@playwright/test"

test("Product age Add To Basket", async ({ page }) => {
    await page.goto("localhost:2221")
    await page.pause()
})