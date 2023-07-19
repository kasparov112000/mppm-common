import { TransitionResult } from '../../stateMachine/transitionResult';
import { ILanguageProperty } from '../ilanguageProperty';
import { IError } from '../ierror';

export default class TransitionError extends Error implements IError {
    public readonly transitionResult: TransitionResult<any>;
    public type: string;
    public code: Number;
    public text: ILanguageProperty;

    constructor(message: string, transitionResult: TransitionResult<any>, text?: ILanguageProperty, code?: Number) {
        super(message);
        this.transitionResult = transitionResult;
        this.text = text;
        this.code = code;        
    }
}