import { ValidatorFailure } from '../validatorFailure';
import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';

function isEqualCompare<T>(a: T, b: T) {
    return a === b;
}

/**
 * Validates that 'input' is not equal to value
 * 
 * @param {T} input - Parameter to validate
 * @param {T} value - Parameter to test against
 * @returns {ValidatorResult} Validator Result object
 */
export class NotEqual<T> extends ValidatorRule<T> {
    protected _value: T;

    constructor (value: T, customErrMessage = '') {
        super(customErrMessage);
        this._value = value;
    }

    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (!isEqualCompare(input, this._value)) {
            return priorResult;
        }
        
        const errMsg = this.getErrorMessage(`${paramName} (${input}) is equal to ${this._value}`);
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }    
}

/**
 * Validates that 'input' is equal to value
 * 
 * @param {T} input - Parameter to validate
 * @param {T} value - Parameter to test against
 * @returns {ValidatorResult} Validator Result object
 */
 export class IsEqual<T> extends NotEqual<T> {
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (isEqualCompare(input, this._value)) {
            return priorResult;
        }
        
        const errMsg = this.getErrorMessage(`${paramName} (${input}) is not equal to ${this._value}`);
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    } 
}