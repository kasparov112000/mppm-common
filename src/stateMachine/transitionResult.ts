export type TransitionResult<T> = {
    fromState: T;
    toState: T;
    isSuccessful: boolean;
}