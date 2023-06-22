import { ValidatorFailure } from '../validatorFailure';
import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';

function isDate<T>(input: T) {
    try {
        if (Object.prototype.toString.call(input) !== '[object Date]') {
            return false;
        }

        const date = new Date(input.toString());
        if ([null, undefined].includes(date) || isNaN(date.getTime())) {
            return false;
        }
     
        return true;
    } catch (err) {
        return false;
    }
}

/**
 * Validate that 'input' is a Date
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
export class IsDate<T> extends ValidatorRule<T> {
    public validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (isDate(input)) {
            return priorResult;
        }

        const errMsg = this.getErrorMessage(`${paramName} is not a valid Date`);
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }
}

/**
 * Validates that 'input' is NOT a Date
 * 
 * @param {T} input
 */
export class NotDate<T> extends ValidatorRule<T> {
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (!isDate(input)) {
            return priorResult;
        }

        const errMsg = this.getErrorMessage(`${paramName} is a Date`);
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }
}