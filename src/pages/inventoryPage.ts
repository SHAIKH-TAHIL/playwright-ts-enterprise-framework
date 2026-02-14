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

    // Getters for all the Locators
    get hamburgerMenuIcon () {
        return this.page.locator(this.HAMBURGER_MENU_ICON);
    }

    get productContainer () {
        return this.page.locator(this.PRODUCT_CONTAINER);
    }

    get productTitleText () {
        return this.page.locator(this.PRODUCT_TITLE_TEXT);
    }

    get productSortDropdown () {
        return this.page.locator(this.PRODUCT_SORT_DROPDOWN);
    }

}