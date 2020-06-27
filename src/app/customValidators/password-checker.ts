import { FormGroup } from "@angular/forms";


export function PasswordChecker(
    controlName: string, 
    compareControlName: string
) {
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confirmedPassword = formGroup.controls[compareControlName];

        if(password.value !== confirmedPassword.value){
            confirmedPassword.setErrors({mustMatch: true});
        } else {
            confirmedPassword.setErrors(null);
        }
    };
}