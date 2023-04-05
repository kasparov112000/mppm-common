import { ValidatorResult } from './validatorResult';

/**
 * ValidatorRule abstract base class.  Extend from this class to build custom validator rules
 */
export abstract class ValidatorRule<T> {
    protected _customErrMessage: string;
  
    constructor(customErrMessage = '') {
      this._customErrMessage = customErrMessage;
    }
  
    /**
     * Abstract method to validate input against the rule
     * 
     * @param {T} input The input value to be tested
     * @param {string} paramName Human-readable name for the input value
     * @param {ValidatorResult} priorResult Result object to update with possible errors
     */
    public abstract validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult;
}