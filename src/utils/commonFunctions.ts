import { expect, Locator, Page } from "@playwright/test";

export class CommonFunctions {
    private page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    async verifyPageUrl (expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async verifyTextOfAnElement (locator: Locator, expectedText: string, partialMatch: boolean = false) {
        if (partialMatch) {
            await expect(locator).toContainText(expectedText);
        } else {
            await expect(locator).toHaveText(expectedText);
        }
    }
}