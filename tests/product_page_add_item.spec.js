import { test } from "@playwright/test"

test("Product age Add To Basket", async ({ page }) => {
    await page.goto("localhost:2221")
    
    const addToBasketButton = page.getByRole('button', { name: 'Add to Basket'}).first()
    await addToBasketButton.waitFor()
    await addToBasketButton.click()
})