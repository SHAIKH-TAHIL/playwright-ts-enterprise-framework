import { expect, Page } from "@playwright/test";
import { CommonFunctions } from "../utils/commonFunctions";

export class LoginPage {

    private page: Page;
    private commonFunctions: CommonFunctions;

    constructor (page: Page) {
        this.page = page;
        this.commonFunctions = new CommonFunctions(this.page);
    }

    // Locators
    private readonly PAGE_HEADER_TEXT = "//div[@class='login_logo']";
    private readonly USERNAME_INPUT_FIELD = "//input[@id='user-name']";
    private readonly PASSWORD_INPUT_FIELD = "//input[@id='password']";
    private readonly LOGIN_BUTTON = "//input[@id='login-button']";
    private readonly LOGIN_ERROR_MSG_CONTAINER = "//div[@id='login_button_container']//div[contains(@class, 'error-message-container')]";
    private readonly LOGIN_ERROR_MSG_CONTAINER_CLOSE_BTN = "//button[@data-test='error-button']";

    // Getters for all the locators
    get pageHeaderText () {
        return this.page.locator(this.PAGE_HEADER_TEXT);
    }

    get userNameInputField () {
        return this.page.locator(this.USERNAME_INPUT_FIELD);
    }

    get passwordInputField () {
        return this.page.locator(this.PASSWORD_INPUT_FIELD);
    }

    get loginButton () {
        return this.page.locator(this.LOGIN_BUTTON);
    }

    get loginErrorMsgContainer () {
        return this.page.locator(this.LOGIN_ERROR_MSG_CONTAINER);
    }

    get loginErrorMsgContainerCloseBtn () {
        return this.page.locator(this.LOGIN_ERROR_MSG_CONTAINER_CLOSE_BTN);
    }

    // Page Actions
    async verifyPageHeader (expectedText: string) {
        await expect(this.pageHeaderText).toHaveText(expectedText);
    }

    async enterUserName (username: string) {
        await this.userNameInputField.fill(username);
    }

    async enterPassword (password: string) {
        await this.passwordInputField.fill(password);
    }

    async clickLoginButton () {
        await this.loginButton.click();
    }

    async login (username: string, password: string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async verifyLoginErrorMessage (expectedErrorMessage: string, partialMatch: boolean = false) {
        await this.commonFunctions.verifyTextOfAnElement(this.loginErrorMsgContainer, expectedErrorMessage, partialMatch);
    }

    async closeErrorMsgContainer () {
        await this.loginErrorMsgContainerCloseBtn.click();
    }

    async verifyErrorMsgIsNotVisible () {
        await expect(this.loginErrorMsgContainer).toBeHidden();
    }

    async verifyErrorMessageRemoval () {
        await this.closeErrorMsgContainer();
        await this.verifyErrorMsgIsNotVisible();
    }
}