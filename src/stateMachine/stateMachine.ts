import TransitionError from '../models/custom-errors/transitionError';
import { ILanguageProperty } from '../models/ilanguageProperty';
import { StateTransition } from './stateTransition';
import { TransitionResult } from './transitionResult';

export class StateMachine<T> {
    public validTransitions: StateTransition<T>[] = [];
    public transitionError: TransitionError;
    
    public async transition(fromState: T, toState: T, callbackFn: () => any, inValidTransitionCallBack?: () => any): Promise<TransitionResult<T>> {
      const result: TransitionResult<T> = {
        fromState: fromState,
        toState: toState,
        isSuccessful: false
      }

      let isValidTransition = false;
      const transition = this.validTransitions.find(v => v.state === fromState);
      
      if(transition !== undefined) {
        isValidTransition = transition.isTransitionValid(toState);
      }

      if (!isValidTransition) {
        if(inValidTransitionCallBack) { 
          await inValidTransitionCallBack();
          throw new TransitionError(this.transitionError.message, this.transitionError.transitionResult, this.transitionError.text, this.transitionError.code);
        }
        else {
          throw new TransitionError(`Invalid State Transition: Cannot update a transition from ${fromState} to ${toState}`, result);
        }
      }

      await callbackFn();

      return result;
    }
}