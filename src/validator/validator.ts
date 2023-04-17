import * as _ from 'lodash';
import ValidatorError from '../models/custom-errors/validatorError';
import { ValidatorResult } from './validatorResult';
import { ValidatorFailure } from './validatorFailure';
import { ValidatorParameter } from './validatorParameter';
import ValidatorHttpError from '../models/custom-errors/validatorHTTPError';
import { httpStatusCode } from '../http/httpStatusCodes';

export class Validator {
  private _component: string;

  constructor(component: string) {
    this._component = component;
  }

  /**
   * Validates an Array of ValidatorParameters (FIFO) and outputs a ValidatorResult object.  The optional priorResult can be provided.
   * 
   * @param {ValidatorParameter<any>[]} validatorParameters - Parameters to be validated
   * @param {ValidatorResult} priorResult (Optional) - If provided, will update this object with errors and isvalid status instead of creating a new result object
   * @returns {ValidatorResult} 
   */
  public validate(validatorParameters: ValidatorParameter<any>[], priorResult: ValidatorResult = null): ValidatorResult {
    if (priorResult === null) {
      priorResult = new ValidatorResult();
    }

    let validatorResult = priorResult;

    validatorParameters.forEach(validatorParameter => {
      validatorParameter.rules.forEach(rule => {
        try {
          validatorResult = rule.validate(validatorParameter.input, validatorParameter.paramName, validatorResult);
        } catch (err) {
          const errMsg = `${rule.constructor.name} threw an error: ${err.message}`;
          const failure = new ValidatorFailure(validatorParameter.input, validatorParameter.paramName, errMsg);
          validatorResult.setInvalid(failure);
        }
      })
    });

    return validatorResult;
  }

  /**
   * Validates an Array of ValidatorParameters (FIFO) and outputs a ValidatorResult object or throws an error after validation is complete.  The optional priorResult can be provided.
   * 
   * @param {ValidatorParameter<any>[]} validatorParameters - Parameters to be validated
   * @param {ValidatorResult} priorResult (Optional) - If provided, will update this object with errors and isvalid status instead of creating a new result object
   * @returns {ValidatorResult} 
   */
  public validateAndThrow(validatorParameters: ValidatorParameter<any>[], priorResult: ValidatorResult = null, httpStatus = httpStatusCode.BadRequest) {
    const validatorResult = this.validate(validatorParameters, priorResult);

    if (!validatorResult.isValid) {
      const paramNames = validatorParameters.map(vp => vp.paramName).toString();
      throw new ValidatorHttpError(this._component, httpStatus, `One or more of the following parameters failed to validate: ${paramNames}`, validatorResult.errors);
    }
  }
}
