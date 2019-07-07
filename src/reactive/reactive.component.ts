import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
    selector: "reactive",
    templateUrl: "./reactive.component.html"
})

export class ReactiveComponent {

    form = new FormGroup({
        account : new FormGroup({
        username : new FormControl('', [Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique),
        password : new FormControl('', Validators.required)
    }),
    topics: new FormArray([])

    });

    get username(){
        return this.form.get('account.username');
    }
    get password(){
        return this.form.get('account.password');
    }

    get topics(){
        return this.form.get('topics') as FormArray;
    }

    addTopic(topic:HTMLInputElement){
        console.log(topic.value);
        this.topics.push(new FormControl(topic.value));
        topic.value = ''; 
    }
    removeTopic(topic: FormControl){
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }

    login(){
        console.log(this.form.value);
         this.form.setErrors({
                invalidLogin: true
            });
    }

}
