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

    /**
     * @returns the locator for the page header text element
     */
    get pageHeaderText () {
        return this.page.locator(this.PAGE_HEADER_TEXT);
    }

    /**
     * @return the locator for the username input field
     */
    get userNameInputField () {
        return this.page.locator(this.USERNAME_INPUT_FIELD);
    }

    /**
     * @return the locator for the password input field
     */
    get passwordInputField () {
        return this.page.locator(this.PASSWORD_INPUT_FIELD);
    }

    /**
     * @return the locator for the login button
     */
    get loginButton () {
        return this.page.locator(this.LOGIN_BUTTON);
    }

    /**
     * @return the locator for the login error message container
     */
    get loginErrorMsgContainer () {
        return this.page.locator(this.LOGIN_ERROR_MSG_CONTAINER);
    }

    /**
     * @return the locator for the login error message container close button
     */
    get loginErrorMsgContainerCloseBtn () {
        return this.page.locator(this.LOGIN_ERROR_MSG_CONTAINER_CLOSE_BTN);
    }

    /**
     * @description Verifies that the page header text matches the expected text.
     * @param expectedText The expected text to compare against the page header text.
     */
    async verifyPageHeader (expectedText: string) {
        await expect(this.pageHeaderText).toHaveText(expectedText);
    }

    /**
     * @description Enters the provided username into the username input field.
     * @param username The username to be entered in the input field.
     */
    async enterUserName (username: string) {
        await this.userNameInputField.fill(username);
    }

    /**
     * @description Enters the provided password into the password input field.
     * @param password The password to be entered in the input field.
     */
    async enterPassword (password: string) {
        await this.passwordInputField.fill(password);
    }

    /**
     * @description Clicks the login button to submit the login form.
     */
    async clickLoginButton () {
        await this.loginButton.click();
    }

    /**
     * @description Performs the login action by entering the provided username and password, and then clicking the login button.
     * @param username The username to be entered in the input field.
     * @param password The password to be entered in the input field.
     */
    async login (username: string, password: string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    /**
     * @description Verifies that the login error message displayed on the UI matches the expected error message.
     * @param expectedErrorMessage The expected error message to compare against the actual error message displayed on the UI.
     * @param partialMatch If true, checks if the actual error message contains the expected error message; otherwise, checks for an exact match.
     */
    async verifyLoginErrorMessage (expectedErrorMessage: string, partialMatch: boolean = false) {
        await this.commonFunctions.verifyTextOfAnElement(this.loginErrorMsgContainer, expectedErrorMessage, partialMatch);
    }

    /**
     * @description Clicks the close button on the login error message container to close it.
     */
    async closeErrorMsgContainer () {
        await this.loginErrorMsgContainerCloseBtn.click();
    }

    /**
     * @description Verifies that the login error message container is not visible on the UI.
     */
    async verifyErrorMsgIsNotVisible () {
        await expect(this.loginErrorMsgContainer).toHaveText("");
    }

    /**
     * @description Closes the login error message container and verifies that it is no longer visible on the UI.
     */
    async verifyErrorMessageRemoval () {
        await this.closeErrorMsgContainer();
        await this.verifyErrorMsgIsNotVisible();
    }
}