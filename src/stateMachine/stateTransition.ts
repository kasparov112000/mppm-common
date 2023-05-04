export class StateTransition<T> {
    state: T;
    transitions: T[];

    constructor(state: T, transitions: T[]) {
        this.state = state;
        this.transitions = transitions;
    }

    public isTransitionValid(transitionState: T) {
        return this.transitions.includes(transitionState);
    }
}