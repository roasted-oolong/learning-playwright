import { test, expect } from "@playwright/test"

test("Product age Add To Basket", async ({ page }) => {
    await page.goto("/")
    
    const addToBasketButton = page.locator('[data-qa="product-button"]').first()
    const basketCounter = page.locator('[data-qa="header-basket-count"]')

    //Before action
    await addToBasketButton.waitFor()
    await expect(addToBasketButton).toHaveText("Add to Basket")
    await expect(basketCounter).toHaveText("0")

    //After action
    await addToBasketButton.click()
    await expect(addToBasketButton).toHaveText("Remove from Basket")
    await expect(basketCounter).toHaveText("1")

    //Nav
    const checkOutLink = page.getByRole('link', { name: 'Checkout' })
    await checkOutLink.waitFor()
    await checkOutLink.click()
    await page.waitForURL("/basket")
})