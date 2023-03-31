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

    validate(): ValidatorResult {
        if (!isEqualCompare(this._input, this._value)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} (${this._input}) is equal to ${this._value}`));
        return this._validatorResult;
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
    validate(): ValidatorResult {
        if (isEqualCompare(this._input, this._value)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} (${this._input}) is not equal to ${this._value}`));
        return this._validatorResult;
    } 
}