import { expect, Locator, Page } from "@playwright/test";

export class CommonFunctions {
    private page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    /**
     * @description Verifies that the current page URL matches the expected URL.
     * @param expectedUrl The expected URL to compare against the current page URL.
     */
    async verifyPageUrl (expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    /**
     * @description Verifies that the text of a given element matches the expected text.
     * @param locator The Playwright Locator for the element to verify.
     * @param expectedText The expected text to compare against the element's text.
     * @param partialMatch If true, checks if the element's text contains the expected text; otherwise, checks for an exact match.
     */
    async verifyTextOfAnElement (locator: Locator, expectedText: string, partialMatch: boolean = false) {
        if (partialMatch) {
            await expect(locator).toContainText(expectedText);
        } else {
            await expect(locator).toHaveText(expectedText);
        }
    }
}