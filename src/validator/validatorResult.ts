import { ValidatorFailure } from './validatorFailure';

export class ValidatorResult {
    public isValid: boolean;
    public errors: ValidatorFailure[];

    constructor (isValid = true) {
        this.isValid = isValid;
        this.errors = [];
    }

    public setInvalid(failure: ValidatorFailure) {
        this.isValid = false;
        this.errors.push(failure);
    }
}