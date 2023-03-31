import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';

function isBetweenCompare<T extends Number> (input: T, min: T, max: T) {
    return (input >= min && input <= max);
}

/**
 * Validates that 'input' is between 'min' and 'max' (inclusive)
 * 
 * @param {T extends Number} input - Parameter to validate
 * @param {T extends Number} min - The minimum compared value
 * @param {T extends Number} max - The maximum compared value
 * @returns {ValidatorResult} Validator Result object
 */
export class IsBetween<T extends Number> extends ValidatorRule<T> {
    protected _min: T;
    protected _max: T;

    constructor(min: T, max: T, customErrMessage = '') {
        super(customErrMessage);

        this._min = min;
        this._max = max;
    }

    validate(): ValidatorResult {
        if (isBetweenCompare(this._input, this._min, this._max)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} (${this._input}) is not between ${this._min} & ${this._max}`));
        return this._validatorResult;
    }    
}

/**
 * Validates that 'input' is not between 'min' and 'max' (inclusive)
 * 
 * @param {T extends Number} input - Parameter to validate
 * @param {T extends Number} min - The minimum compared value
 * @param {T extends Number} max - The maximum compared value
 * @returns {ValidatorResult} Validator Result object
 */
export class NotBetween<T extends Number> extends IsBetween<T> {
    validate(): ValidatorResult {
        if (!isBetweenCompare(this._input, this._min, this._max)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} (${this._input}) is between ${this._min} & ${this._max}`));
        return this._validatorResult;
    }    
}