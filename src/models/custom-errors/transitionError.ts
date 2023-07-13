import { TransitionResult } from '../../stateMachine/transitionResult';
import { ILanguageProperty } from '../ilanguageProperty';

export default class TransitionError extends Error {
    public readonly transitionResult: TransitionResult<any>;
    public readonly transitionLanguage: ILanguageProperty;
    public readonly errorCode: Number;
    
    constructor(message: any, transitionResult: TransitionResult<any>, messageLanguage?: ILanguageProperty, errorCode?: Number) {
        super(message);
        this.transitionResult = transitionResult;
        this.transitionLanguage = messageLanguage;
        this.errorCode = errorCode;        
    }
}