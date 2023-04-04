import { ValidatorFailure } from '../validatorFailure';
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
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (!isNullCompare<T>(input)) {
            return priorResult;
        }
        
        const errMsg = `${paramName} is null or undefined`;
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }    
}

/**
 * Validates that 'input' is null or undefined
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class IsNull<T> extends ValidatorRule<T> {
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (isNullCompare<T>(input)) {
            return priorResult;
        }
        
        const errMsg = `${paramName} is not null or undefined`;
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }
}