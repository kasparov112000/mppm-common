import { ValidatorFailure } from '../../validator/validatorFailure';

export default class ValidatorError extends Error {
    public readonly component: string;
    public readonly validatorFailures: ValidatorFailure[];
    
    constructor(component: string, message: string, validatorFailures: ValidatorFailure[]) {
        super(message);
        this.component = component;
        this.validatorFailures = validatorFailures;
    }
}