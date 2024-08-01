import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null {
        if((control.value as String).indexOf(" ")>=0) {
            return {
                cannotContainSpace :true
            };
        }
        return null;
    }
}