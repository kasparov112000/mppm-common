import { ValidatorFailure } from '../../validator/validatorFailure';
import ValidatorError from './validatorError';

export default class ValidatorHttpError extends ValidatorError {
    public readonly component: string;
    public readonly status: number;
    public readonly validatorFailures: ValidatorFailure[];
  
    constructor(component: string, status: number, message: string, validatorFailures: ValidatorFailure[]) {
      super(component, message, validatorFailures);
      this.component = component;
      this.status = status;
      this.validatorFailures = validatorFailures;
    }
  }
  