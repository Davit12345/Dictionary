import {Injectable} from '@angular/core';

export interface UserInterface {
    id: string;
    phone: string;
    email: string;
    name: number;
    surname: number;
    token: number;
}

@Injectable()
export class User {
    constructor() {}

     public static checkToken(){
        if(localStorage.getItem('currentToken')){
            return true;
        }
        return false;
     }

    // customerById(id: string): Observable<Customer> {
    //     return this._http.get('/api/customer/' + id).map(rsp => rsp.json());
    // }
}
