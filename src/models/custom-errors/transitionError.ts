import { TransitionResult } from '../../stateMachine/transitionResult';

export default class TransitionError extends Error {
    public readonly transitionResult: TransitionResult<any>;
    
    constructor(message: string, transitionResult: TransitionResult<any>) {
        super(message);
        this.transitionResult = transitionResult;
    }
}