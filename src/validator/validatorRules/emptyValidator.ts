import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';
import * as _ from 'lodash';

function isEmptyCompare<T>(input: T | string) {
    if (typeof input === 'string') {
        input = input.trim();
    } else if (typeof input === 'number' || typeof input === 'boolean') {
        return false;
    }

    return _.isEmpty(input);
}

/**
 * Validates that 'input' is Empty
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
export class IsEmpty<T> extends ValidatorRule<T | string> {
    validate(): ValidatorResult {
        if (isEmptyCompare(this._input)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} is empty`));
        return this._validatorResult;
    }    
}

/**
 * Validates that 'input' is not Empty
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class NotEmpty<T> extends ValidatorRule<T | string> {
    validate(): ValidatorResult {
        if (!isEmptyCompare(this._input)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} is empty`));
        return this._validatorResult;
    }    
}