import { loadConfig } from "../config/config";
import { LoginErrorMessage } from "../constants/loginUiConstants";
import { ROUTES } from "../constants/routes";
import {test} from "../fixtures/customTestFixtures";
import { LoginWorkflowInterface } from "../interfaces/loginWorkflow.interface";

test.describe("Regression test to verify the Login Functionality", async () => {

    const suite = "loginWorkflow";
    const testdata: LoginWorkflowInterface = loadConfig(suite);
    const validCreds = testdata.validCredentials;
    const invalidCreds = testdata.invalidCredentials;
    const lockedOutCreds = testdata.lockedOutUserCredentials;

    test.beforeEach("Navigate to the Login Page", async ({ page }) => {
        await page.goto(ROUTES.login);
    });

    test("Verify the Login functionality with valid credentials", async ({ loginPage, commonFunctions }) => {
        await loginPage.login(validCreds.username, validCreds.password);
        await commonFunctions.verifyPageUrl(ROUTES.inventory);
    });

    test("Verify the Login functionality with partial valid credentials", async ({ loginPage }) => {
        await test.step("Verify the Login with valid username and invalid password", async () => {
            await loginPage.login(validCreds.username, invalidCreds.password);
            await loginPage.verifyLoginErrorMessage(LoginErrorMessage.invalidCredentials, true);
            await loginPage.verifyErrorMessageRemoval();
        });

        await test.step("Verify the Login with invalid username and valid password", async () => {
            await loginPage.login(invalidCreds.username, validCreds.password);
            await loginPage.verifyLoginErrorMessage(LoginErrorMessage.invalidCredentials, true);
        });
    });

    test("Verify the Login functionality with invalid credentials", async ({ loginPage }) => {
        await loginPage.login(invalidCreds.username, invalidCreds.password);
        await loginPage.verifyLoginErrorMessage(LoginErrorMessage.invalidCredentials, true);
    });

    test("Verify the Login functionality with a locked out user credentials", async ({ loginPage }) => {
        await loginPage.login(lockedOutCreds.username, lockedOutCreds.password);
        await loginPage.verifyLoginErrorMessage(LoginErrorMessage.lockedOutUser, true);
        await loginPage.verifyErrorMessageRemoval();
    });
});