import { ValidatorResult } from '../validatorResult';
import { ValidatorRule } from '../validatorRule';
import * as mongodb from 'mongodb';

function isMongoIDCompare<T extends string>(input: T) {
    return (String)(new mongodb.ObjectId(this._input)) === this._input;
}

/**
 * Validates that 'input' is a MongoDB ID
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class IsMongoID<T extends string> extends ValidatorRule<T> {
    validate(): ValidatorResult {
        if (isMongoIDCompare) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} (${this._input}) is invalid MongoDB ID`));
        return this._validatorResult;
    }    
}

/**
 * Validates that 'input' is not a MongoDB ID
 * 
 * @param {T} input - Parameter to validate
 * @returns {ValidatorResult} Validator Result object
 */
 export class NotMongoID<T extends string> extends ValidatorRule<T> {
    validate(): ValidatorResult {
        if (!isMongoIDCompare) {
            return this._validatorResult;
        }
        
        this.setInvalidResult(this.createNewFailure(`${this._paramName} (${this._input}) is a valid MongoDB ID`));
        return this._validatorResult;
    }    
}