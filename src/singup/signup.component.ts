import { Component } from "@angular/core";

@Component({
    selector: "signup",
    templateUrl: "./signup.component.html"
})

export class SignupComponent {
contactMetods = [
    {id: 1, name:'Anshul'},
    {id: 2, name:'yogesh'},
]


    name = "Anshul";
    log(x){
        console.log(x);
    }

    Submit(x){
        console.log(x);
    }
}