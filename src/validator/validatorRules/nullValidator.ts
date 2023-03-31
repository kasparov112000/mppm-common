import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';

function isNullCompare<T>(input: T) {
    return [null, undefined].includes(input);
}

/**
 * Validates that 'input' is not null or undefined
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class NotNull<T> extends ValidatorRule<T> {
    validate(): ValidatorResult {
        if (!isNullCompare<T>(this._input)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} is null or undefined`));
        return this._validatorResult;
    }    
}

/**
 * Validates that 'input' is null or undefined
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class IsNull<T> extends ValidatorRule<T> {
    validate(): ValidatorResult {
        if (isNullCompare<T>(this._input)) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} is not null or undefined`));
        return this._validatorResult;
    }
}