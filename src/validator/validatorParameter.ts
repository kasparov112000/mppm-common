import { ValidatorRule } from './validatorRule';

export class ValidatorParameter<T> {
    private _input: T;
    private _paramName: string;
    private _rules: ValidatorRule<T>[];

    public get input() { return this._input; }
    public get paramName() { return this._paramName; }
    public get rules() { return this._rules; }
  
    constructor(input: T, paramName: string) {
      this._input = input;
      this._paramName = paramName;
      this._rules = [];
    }
  
    /**
     * Adds one or more ValidatorRules to this ValidatorParameter 
     * 
     * @param {ValidatorRule<T>[]} rules List of ValidatorRules to add
     * @returns {void}
     */
    public addRules (rules: ValidatorRule<T>[]) {
      this._rules.push(...rules);
      return this;
    }
  }