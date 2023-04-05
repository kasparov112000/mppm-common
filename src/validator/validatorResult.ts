import { ValidatorFailure } from './validatorFailure';

export class ValidatorResult {
    public isValid: boolean;
    public errors: ValidatorFailure[];

    constructor (isValid = true) {
        this.isValid = isValid;
        this.errors = [];
    }

    /**
     * Sets this result object as invalid (isValid = false) and adds the Failure object to the errors list
     * 
     * @param {ValidatorFailure} failure Failure object that contains the input, name, and error messages to add to this result 
     */
    public setInvalid(failure: ValidatorFailure) {
        this.isValid = false;
        this.errors.push(failure);
    }
}