import TransitionError from '../models/custom-errors/transitionError';
import { StateTransition } from './stateTransition';
import { TransitionResult } from './transitionResult';

export class StateMachine<T> {
    public validTransitions: StateTransition<T>[] = [];

    public async transition(fromState: T, toState: T, callbackFn: () => any): Promise<TransitionResult<T>> {
      const result: TransitionResult<T> = {
        fromState: fromState,
        toState: toState,
        isSuccessful: false
      }

      if (fromState !== toState) {
        const isValidTransition = this.validTransitions.find(v => v.state === fromState).isTransitionValid(toState) ?? false;
        if (!isValidTransition) {
          throw new TransitionError(`Invalid State Transition: Cannot update a transition from ${fromState} to ${toState}`, result);
        }
      }

      await callbackFn();

      return result;
    }
}