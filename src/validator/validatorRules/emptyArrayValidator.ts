import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';
import * as _ from 'lodash';

function isEmptyArrayCompare<T>(input: T) {
    if (!Array.isArray(input)) {
        throw new Error(`${input} is not an array`);
    }

    return input.length === 0;
}

/**
 * Validates that 'input' is an empty array
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class IsEmptyArray<T> extends ValidatorRule<T> {
    validate(): ValidatorResult {
        if (isEmptyArrayCompare(this._input)) {
            return this._validatorResult;    
        }

        this.setInvalidResult(this.createNewFailure(`${this._paramName} is not an empty array`));
        return this._validatorResult;
    }
}

/**
 * Validates that 'input' is not an empty array
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class NotEmptyArray<T> extends ValidatorRule<T> {
    validate(): ValidatorResult {
        if (!isEmptyArrayCompare(this._input)) {
            return this._validatorResult;
        }

        this.setInvalidResult(this.createNewFailure(`${this._paramName} is an empty array`));
        return this._validatorResult;
    }
}