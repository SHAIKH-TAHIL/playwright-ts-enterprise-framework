import { test as base} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { CommonFunctions } from "../utils/commonFunctions";

type CustomFixtures = {
    loginPage: LoginPage;
    commonFunctions: CommonFunctions;
}

export const test = base.extend<CustomFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    },
    commonFunctions: async ({page}, use) => {
        await use(new CommonFunctions(page))
    }
});

export { expect } from "@playwright/test";