import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Platform} from '@ionic/angular';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // static serverUrl = "http://192.168.0.107:85/api/";
  static serverUrl = "http://localhost:81/api/";



  private headers: any = {
    'Content-Type': 'application/json'
  };

  // get lang() {
  //   return TranslateConfigService.language.currentLang;
  // }

  private headers_with_token: any;

  private isDesktop: boolean;

  private static sessionId: string = "";

  constructor(
      private http: HTTP, // for http requests
      private pc_http: HttpClient,
      private platform: Platform,
      // public network: Network,
      // private loadingProvider: PopoverProvider, //for loading
      // private popoverProvider:PopoverProvider,
  ) {
    this.checkPlatform();
  }

  /** r_function
   *
   */

  async post(endpoint: string, body: any, config: { loadingStart?: boolean, loadingEnd?: boolean }) {

    // if (this.network.type === 'none') {
    //   this.checkNetwork();
    //   return;
    // }
    localStorage.setItem('network',null)
console.log(body)
    // if (config.loadingStart)
    //   await this.loadingProvider.start(null, PopoverType.LOADING);

    let currentToken = localStorage.getItem('currentToken');

    if (body == null)
      body = {};

    //  request headers
    this.headers_with_token = {
      'Content-Type': 'application/json',
      'token': currentToken
    };

    let requestHeaders = this.headers;
    if (currentToken) {
      requestHeaders = this.headers_with_token;
    }
    requestHeaders.language = 'en';

    const apiCall = () => new Promise(
        (resolve, reject) => {

          if (this.isDesktop) {
            requestHeaders = {headers: new HttpHeaders(requestHeaders)};
            const request = this.pc_http.post(
                ApiService.serverUrl + endpoint,
                body,
                requestHeaders
            )
                .subscribe(
                    ((response: any) => {
                      if (config.loadingEnd)
                        // this.loadingProvider.end(PopoverType.LOADING).then(() => {
                          resolve(response);
                        // });
                      else
                        resolve(response);
                    }),
                    (err => {
                      // if (PopoverProvider.isLoading)
                      //   this.loadingProvider.end(PopoverType.LOADING).then(() => {
                      reject(err);
                      throw new Error();
                      // })
                      //   else {
                      //     reject(err);
                      //     throw new Error();
                      //   }
                      // })
                    }));
          } else {

            const request = this.http.post(
                ApiService.serverUrl + endpoint,
                body,
                requestHeaders
            ).then(response => {
              // if (config.loadingEnd)
              //   this.loadingProvider.end(PopoverType.LOADING).then(() => {
                  resolve(response);
                // });
              // else
              //   resolve(response);
            })
                .catch(err => {
                  // if (PopoverProvider.isLoading)
                  //   this.loadingProvider.end(PopoverType.LOADING).then(() => {
                      reject(err);
                      throw new Error();
                  //   })
                  // else {
                  //   reject(err);
                  //   throw new Error();
                  // }
                })

          }
        }
    );

    return apiCall;
  }

  private checkPlatform() {

    this.isDesktop = (this.platform.is("desktop") || this.platform.is("pwa"));
    //
    // // DEVELOPMENT
    this.isDesktop = this.isDesktop || (this.platform.is("android") || this.platform.is("ios"));
    // // DEVELOPMENT-END
  }

  checkNetwork() {
  //   var currentNetWorkCase=localStorage.getItem('network')
  //   if(!currentNetWorkCase){
  //     localStorage.setItem('network','falid')
  //     this.popoverProvider.start(null,NetworkComponent);
  //
  //   }
  //   this.popoverProvider.start(null,NetworkComponent);
  //
  }


}
