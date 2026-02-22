import { Page } from "@playwright/test";


export class InventoryPage {
    private page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    // Locators
    private readonly HAMBURGER_MENU_ICON = "";
    private readonly PRODUCT_CONTAINER = "";
    private readonly PRODUCT_TITLE_TEXT = "";
    private readonly PRODUCT_SORT_DROPDOWN = "";

    /**
     * @return the locator for the hamburger menu icon
     */
    get hamburgerMenuIcon () {
        return this.page.locator(this.HAMBURGER_MENU_ICON);
    }

    /**
     * @return the locator for the product container element
     */
    get productContainer () {
        return this.page.locator(this.PRODUCT_CONTAINER);
    }

    /**
     * @return the locator for the product title text element
     */
    get productTitleText () {
        return this.page.locator(this.PRODUCT_TITLE_TEXT);
    }

    /**
     * @return the locator for the product sort dropdown element
     */
    get productSortDropdown () {
        return this.page.locator(this.PRODUCT_SORT_DROPDOWN);
    }
}