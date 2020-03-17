import {FormGroup} from '@angular/forms';

export class MyValidators {
    static confirmPassword(group: FormGroup) {
        let pass = group.get('password').value;
        let confirmPass = group.get('confirmPassword').value;

        return pass === confirmPass ? null : { notEqual: true }
    }
}
