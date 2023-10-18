import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn
} from "@angular/forms";

export function fobiddenNameValidatior(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors|null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {forbiddenName : {value: control.value}}: null;
    }
}