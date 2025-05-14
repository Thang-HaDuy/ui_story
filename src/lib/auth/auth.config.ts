import { CredentialsSignin } from '@auth/core/errors';

export class CustomError extends CredentialsSignin {
    constructor(message: string) {
        super();
        this.code = message;
    }
}
