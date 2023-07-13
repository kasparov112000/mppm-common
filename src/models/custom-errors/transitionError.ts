import { TransitionResult } from '../../stateMachine/transitionResult';
import { ILanguageProperty } from '../ilanguageProperty';

export default class TransitionError extends Error {
    public readonly transitionResult: TransitionResult<any>;
    public readonly messageLanguage: ILanguageProperty;
    public readonly errorCode: Number;
    
    constructor(message: string, transitionResult: TransitionResult<any>, messageLanguage?: ILanguageProperty, errorCode?: Number) {
        super(message);
        this.transitionResult = transitionResult;
        this.messageLanguage = messageLanguage;
        this.errorCode = errorCode;        
    }
}