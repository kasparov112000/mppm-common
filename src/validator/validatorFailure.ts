export class ValidatorFailure {
    public input: any;
    public name: string;
    public errorMessage: string;

    constructor (input: any, paramName: string, errorMessage: string) {
        this.input = input;
        this.name = paramName;
        this.errorMessage = errorMessage;
    }
}