import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  ionicForm: FormGroup;

  constructor(private _userService:UserService,
              public formBuilder: FormBuilder) {

    this.ionicForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.email]],
    })
  }

  ngOnInit() {
  }

  register(){
    this._userService.register(
        // request params
        this.ionicForm.value,
        // callback
        (res) => {
          console.log(res)
        }, {loadingStart: true}
    );
  }
}
