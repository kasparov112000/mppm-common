import { ValidatorFailure } from './validatorFailure';
import { ValidatorResult } from './validatorResult';

export abstract class ValidatorRule<T> {
    protected _customErrMessage: string;
  
    public ruleName: string;
  
    constructor(customErrMessage = '') {
      this._customErrMessage = customErrMessage;
    }
  
    public abstract validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult;
  
    // protected setInvalidResult(failure: ValidatorFailure) {
    //   this._validatorResult.isValid = false;
    //   this._validatorResult.errors.push(failure);
    // }
  
    protected createNewFailure(value: any, name: string, errorMessage: string): ValidatorFailure {
      let errMsg = errorMessage;

      if (this._customErrMessage !== '') {
        errMsg = this._customErrMessage;
      }
      
      const failure = new ValidatorFailure(value, name, errMsg);
      return failure;
    }
}