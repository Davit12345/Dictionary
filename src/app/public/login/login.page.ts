import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    ionicForm: FormGroup;

  constructor(private _userService:UserService,
              public formBuilder: FormBuilder) {

      this.ionicForm = this.formBuilder.group({
          phone: ['', [Validators.required]],
          password: ['', [Validators.required]],
      })
  }

  ngOnInit() {
  }

  login(){
    this._userService.login(
        // request params
      this.ionicForm.value,
        // callback
        (res) => {
          console.log('ok')
        }, {loadingStart: true}
    );
  }

}
