import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {StorageProvider} from '../../providers/storage';
import {ModalController, Platform} from '@ionic/angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';
import {HttpParams, HttpHeaders, HttpClient} from '@angular/common/http';
// import * as abc from 'node_modules/google-translate-api/index.js';
// import { translate } from 'google-translate-api/index.js';


export interface word {
    en: string,
    hy: string,
    en_list: string
    hy_list: string
}

@Component({
    selector: 'app-add-word',
    templateUrl: './add-word.component.html',
    styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent implements OnInit {
    addForm: FormGroup;
    fb: FormBuilder = new FormBuilder();
    matches: String[];
    isRecording = false;
    // type:any=null;

    @Input() item: any;
    @Input() type: any;
    @Input() index: any;

    constructor(public _storage: StorageProvider,
                public modalCtrl: ModalController,
                private speechRecognition: SpeechRecognition,
                private plt: Platform,
                private cd: ChangeDetectorRef,
                public http: HttpClient,
    ) {

/*
       translate('Ik spreek Engels', {to: 'en'}).then(res => {
            console.log(res.text);
            //=> I speak English
            console.log(res.from.language.iso);
            //=> nl
        }).catch(err => {
            console.error(err);
        });
        this.translateDetect('hello')
        this.translate('hello')*/

    }

    ngOnInit() {
        this.addForm = this.fb.group({

            en: [
                this.item?this.item.en:'',
                [Validators.required]
            ],
            hy: [
                this.item?this.item.hy:'',
                [Validators.required]
            ],

        });

    }

    add() {
        if(this.type){
            this._storage.updateWordInStorage(this.index,{en: this.addForm.value.en, hy: this.addForm.value.hy});

            this.modalCtrl.dismiss('ok');
        }  else{
            this._storage.addNewWordInStorage({en: this.addForm.value.en, hy: this.addForm.value.hy});
            this.modalCtrl.dismiss('ok');
        }
    }

    close() {
        this.modalCtrl.dismiss();
    }

    isIos() {
        return this.plt.is('ios');
    }

    stopListening() {
        this.speechRecognition.stopListening().then(() => {
            this.isRecording = false;
        });
    }

    getPermission() {
        this.speechRecognition.hasPermission()
            .then((hasPermission: boolean) => {
                if (!hasPermission) {
                    this.speechRecognition.requestPermission();
                }
            });
    }

    startListening(a = 'en-US') {
        this.getPermission();
        let options = {
            language: 'en-US'
        };
        let optionshy = {
            language: 'hy'
        };

        this.speechRecognition.startListening(a=='hy'?optionshy:options).subscribe(matches => {
            this.matches = matches;
            if (a == 'hy') {
                this.addForm.controls.hy.setValue(matches[0]);
            }else{
                this.addForm.controls.en.setValue(matches[0]);

            }
            this.cd.detectChanges();
        });
        this.isRecording = true;
    }
    test(){

        this.cd.detectChanges();
    }




//     openListen(lang) {
//
//         var options = {
//             language: lang
//         };
//         this.speechRecognition.isRecognitionAvailable()
//             .then((available: boolean) => console.log(available));
//
// // Start the recognition process
//         this.speechRecognition.startListening(options)
//             .subscribe(
//                 (matches: string[]) => {
//                     alert(matches[0])
//                     if(lang=='en-US'){
//                         this.addForm.value.en=matches[0];
//                     }else{
//                         this.addForm.value.hy=matches[0];
//
//                     }
//                 },
//                 (onerror) => alert('error:' + JSON.stringify(onerror))
//             );
//
// // Stop the recognition process (iOS only)
//         this.speechRecognition.stopListening();
//
// // Get the list of supported languages
//         this.speechRecognition.getSupportedLanguages()
//             .then(
//                 (languages: string[]) => {
//                  alert(languages)
//
//                 },
//                 (error) => alert('error:' + JSON.stringify(error))
//             );
//
// // Check permission
//         this.speechRecognition.hasPermission()
//             .then((hasPermission: boolean) => console.log(hasPermission));
//
// // Request permissions
//         this.speechRecognition.requestPermission()
//             .then(
//                 () => console.log('Granted'),
//                 () => console.log('Denied')
//             );
//     }
    ionViewWillEnter() {

    }

/*
    translate(word: string) {
        const params = new HttpParams({
            fromObject: {
                q: 'բարեկամ',
                target: 'en',
                source: 'hy',
            }
        });

        const httpOptions = {
            headers: new HttpHeaders({
                'content-type': 'application/x-www-form-urlencoded',
                'accept-encoding': 'application/gzip',
                /!*   'x-rapidapi-key': '1be25964cfmsh468aa0346426e03p13ca86jsn640dd88ce452',
                   'x-rapidapi-host': 'google-translate1.p.rapidapi.com'*!/
                'x-rapidapi-key': 'cd4662825bmshfb23e36cc668d7fp111f42jsn736f6cc3a9aa',
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
            })
        };

        this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2', params, httpOptions)
            .subscribe(
                (res: any) => {
                    console.log(res);
                },
                err => console.log(err)
            );
    }
*/

    translateDetect(word: string) {
        const params = new HttpParams({
            fromObject: {
                q: 'English is hard, but detectably so',
            }
        });

        const httpOptions = {
            headers: new HttpHeaders({
                'content-type': 'application/x-www-form-urlencoded',
                'accept-encoding': 'application/gzip',
                'x-rapidapi-key': '1be25964cfmsh468aa0346426e03p13ca86jsn640dd88ce452',
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
            })
        };

        this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', params, httpOptions)
            .subscribe(
                (res: any) => {
                    console.log(res);
                },
                err => console.log(err)
            );
    }


    translateGet() {

        const httpOptions = {
            headers: new HttpHeaders({
                'accept-encoding': 'application/gzip',
                'x-rapidapi-key': '1be25964cfmsh468aa0346426e03p13ca86jsn640dd88ce452',
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
            })
        };

        this.http.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', httpOptions)
            .subscribe(
                (res: any) => {
                    console.log(res);
                },
                err => console.log(err)
            );
    }
}
