import { ValidatorFailure } from './validatorFailure';
import { ValidatorResult } from './validatorResult';

export abstract class ValidatorRule<T> {
    protected _input: T;
    protected _paramName: string;
    protected _validatorResult: ValidatorResult;
    protected _customErrMessage: string;
  
    public ruleName: string;
  
    constructor(customErrMessage = '') {
      this._customErrMessage = customErrMessage;
    }
  
    abstract validate(input: T, paramName: string, priorResult: ValidatorResult): ValidatorResult;
  
    protected setInvalidResult(failure: ValidatorFailure) {
      this._validatorResult.isValid = false;
      this._validatorResult.errors.push(failure);
    }
  
    protected createNewFailure(errorMessage: string): ValidatorFailure {
      const failure = new ValidatorFailure();
      failure.name = this._paramName;
      failure.value = this._input;
  
      if (this._customErrMessage === '') {
        failure.errorMessage = errorMessage;
      } else {
        failure.errorMessage = this._customErrMessage;
      }
  
      return failure;
    }
}