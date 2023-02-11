import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {CallService} from './call.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CallService{

  constructor(protected api:ApiService) {
       super(api)
  }




  async login(data: object,callback: Function,loadingConfig){
    await super.call("users/login",data,callback,loadingConfig);
  }
  async register(data: object,callback: Function,loadingConfig){
    await super.call("users/register",data,callback,loadingConfig);
  }

}
