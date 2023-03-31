import { ValidatorFailure } from './validatorFailure';

export class ValidatorResult {
    public isValid: boolean;
    public errors: ValidatorFailure[];
}