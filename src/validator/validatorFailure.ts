export class ValidatorFailure {
    public name: string;
    public value: any;
    public errorMessage: string;

    constructor (value: any, paramName: string, errorMessage: string) {
        this.value = value;
        this.name = paramName;
        this.errorMessage = errorMessage;
    }
}