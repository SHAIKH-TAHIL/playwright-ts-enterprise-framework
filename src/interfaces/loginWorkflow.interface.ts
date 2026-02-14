import { UserCredentials } from "./userCreds.interface";

export interface LoginWorkflowInterface {
    validCredentials: UserCredentials;
    invalidCredentials: UserCredentials;
    lockedOutUserCredentials: UserCredentials;
}