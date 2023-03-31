import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';

function isGreaterThanOrEqualCompare<T extends Number> (input: T, value: T) {
    return (input >= value);
}

/**
 * Validates that 'input' is greater than or equal to a value
 * 
 * @param {T} input - Parameter to validate
 * @param {T} value - Parameter to test against
 * @returns {ValidatorResult} Validator Result object
 */
 export class IsGreaterThanOrEqual<T extends Number> extends ValidatorRule<T> {
    protected _value: T;

    validate(): ValidatorResult {
        if (isGreaterThanOrEqualCompare(this._input, this._value)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} (${this._input}) is not greater than or equal to ${this._value}`));
        return this._validatorResult;
    }    
}

/**
 * Validates that 'input' is not greater than or equal to a value
 * 
 * @param {T} input - Parameter to validate
 * @param {T} value - Parameter to test against
 * @returns {ValidatorResult} Validator Result object
 */
 export class NotGreaterThanOrEqual<T extends Number> extends IsGreaterThanOrEqual<T> {
    validate(): ValidatorResult {
        if (!isGreaterThanOrEqualCompare(this._input, this._value)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} (${this._input}) is greater than or equal to ${this._value}`));
        return this._validatorResult;
    }    
}