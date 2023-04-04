import { ValidatorFailure } from '../validatorFailure';
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

    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (isBetweenCompare(input, this._min, this._max)) {
            return priorResult;
        }

        const errMsg = `${paramName} (${input}) is not between ${this._min} & ${this._max}`;
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
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
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (!isBetweenCompare(input, this._min, this._max)) {
            return priorResult;
        }

        const errMsg = `${paramName} (${input}) is between ${this._min} & ${this._max}`;
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }    
}