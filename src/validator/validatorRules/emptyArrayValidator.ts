import { ValidatorFailure } from '../validatorFailure';
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
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (isEmptyArrayCompare(input)) {
            return priorResult;    
        }

        const errMsg = this.getErrorMessage(`${paramName} is not an empty array`);
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }
}

/**
 * Validates that 'input' is not an empty array
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class NotEmptyArray<T> extends ValidatorRule<T> {
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (!isEmptyArrayCompare(input)) {
            return priorResult;
        }

        const errMsg = this.getErrorMessage(`${paramName} is an empty array`);
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }
}