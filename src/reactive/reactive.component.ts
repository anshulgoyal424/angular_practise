import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
    selector: "reactive",
    templateUrl: "./reactive.component.html"
})

export class ReactiveComponent {

    form = new FormGroup({
        username : new FormControl('', [Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique),
        password : new FormControl('', Validators.required)
    });

    get username(){
        return this.form.get('username');
    }
    get password(){
        return this.form.get('password');
    }

}
