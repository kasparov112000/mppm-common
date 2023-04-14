import { ValidatorFailure } from '../validatorFailure';
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

    constructor (value: T, customErrMessage = '') {
        super(customErrMessage);
        this._value = value;
    }

    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (isGreaterThanOrEqualCompare(input, this._value)) {
            return priorResult;
        }
        
        const errMsg = this.getErrorMessage(`${paramName} (${input}) is not greater than or equal to ${this._value}`);
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
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
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (!isGreaterThanOrEqualCompare(input, this._value)) {
            return priorResult;
        }
        
        const errMsg = this.getErrorMessage(`${paramName} (${input}) is greater than or equal to ${this._value}`);
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }    
}