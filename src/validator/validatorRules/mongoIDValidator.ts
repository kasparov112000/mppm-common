import { ValidatorFailure } from '../validatorFailure';
import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';
import * as mongodb from 'mongodb';

function isMongoIDCompare<T extends string>(input: T) {
    return (String)(new mongodb.ObjectId(input)) === input;
}

/**
 * Validates that 'input' is a MongoDB ID
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class IsMongoID<T extends string> extends ValidatorRule<T> {
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (isMongoIDCompare) {
            return priorResult;
        }
        
        const errMsg = `${paramName} (${input}) is invalid MongoDB ID`;
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }    
}

/**
 * Validates that 'input' is not a MongoDB ID
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class NotMongoID<T extends string> extends ValidatorRule<T> {
    validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult {
        if (!isMongoIDCompare) {
            return priorResult;
        }
        
        const errMsg = `${paramName} (${input}) is a valid MongoDB ID`;
        priorResult.setInvalid(new ValidatorFailure(input, paramName, errMsg));
        return priorResult;
    }    
}