import { LoginWorkflowInterface } from "../../interfaces/loginWorkflow.interface";

export const LoginWorkFlowTestData: LoginWorkflowInterface = {
    validCredentials: {
        username: "standard_user",
        password: "secret_sauce"
    },
    invalidCredentials: {
        username: "invalid_un",
        password: "invalid_pass"
    },
    lockedOutUserCredentials: {
        username: "locked_out_user",
        password: "secret_sauce"
    }
}

export default LoginWorkFlowTestData;