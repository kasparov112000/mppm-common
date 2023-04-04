import * as _ from 'lodash';
import ValidatorError from '../models/custom-errors/validatorError';
import { ValidatorRule } from './validatorRule';
import { ValidatorResult } from './validatorResult';
import { ValidatorFailure } from './validatorFailure';

export class ValidatorOptions {
  public message?: any;
  public status?: number;
  public errorResponseObject?: any;
  public throwOnFail?: boolean = true;
}

class Validate<T> {
  private _component: string;
  private _input: T;
  private _paramName: string;

  private _rules: ValidatorRule<T>[];

  public validatorResult: ValidatorResult;

  constructor(input: T, paramName: string, component: string) {
    this._input = input;
    this._paramName = paramName;
    this._component = component;
    this.validatorResult = new ValidatorResult();
  }

  public addRules (rules: ValidatorRule<T>[]) {
    this._rules.push(...rules);
    return this;
  }

  public validate() {
    this._rules.forEach(rule => {
      try {
        this.validatorResult = rule.validate(this._input, this._paramName, this.validatorResult);
      } catch (err) {
        const errorMessage = `${rule.constructor.name} threw an error: ${err.message}`;
        const failure = new ValidatorFailure(this._input, this._paramName, errorMessage);
        this.validatorResult.setInvalid(failure);
      }
    });

    return this;
  }

  public validateAndThrow () {
    this.validate();

    if (!this.validatorResult.isValid) {
      throw new ValidatorError(this._component, `${this._paramName} has thrown one or more validation errors`, this.validatorResult.errors);
    }

    return this;
  }
}

export class Validator {
  private _component: string;

  constructor(component: string) {
    this._component = component;
  }

  public rulesFor<T>(input: T, paramName: string) {
    return new Validate<T>(input, paramName, this._component);
  }
}
