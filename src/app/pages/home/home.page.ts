import {Component, OnInit} from '@angular/core';
import {AddWordComponent} from '../../components/add-word/add-word.component';
import {ModalController} from '@ionic/angular';
import {StorageProvider} from '../../providers/storage';
import {DatePipe} from '@angular/common';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
    public dictionary_list: Array<any>;

    constructor(public modalController: ModalController,
                public _storage: StorageProvider,
                private tts: TextToSpeech,
                private datepipe: DatePipe) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.dictionary_list = this._storage.getLiastInStorage();
    }

    async addNewWord() {

        const modal = await this.modalController.create({
            component: AddWordComponent,
            cssClass: 'add-word',

        });
        modal.onDidDismiss().then((result) => {
            if (result.data == 'ok') {
                this.dictionary_list = this._storage.getLiastInStorage();
                console.log(this.dictionary_list);
            }

        });
        return await modal.present();
    }

   async updateItem(i,item) {
        const modal = await this.modalController.create({
            component: AddWordComponent,
            componentProps:{
                item: item,
                type:'update',
                index:i
            },
            cssClass: 'add-word',

        });
        modal.onDidDismiss().then((result) => {
            if (result.data == 'ok') {
                this.dictionary_list = this._storage.getLiastInStorage();
                console.log(this.dictionary_list);
            }

        });
        return await modal.present();
    }

    async removeItem(i) {
        this.dictionary_list = await this._storage.hide(i);

    }

    async hide(i) {
        this.dictionary_list = await this._storage.remove(i);


    }

    listen(en) {
        try {
            this.tts.speak(en)
                .then(() => console.log('Success'))
                .catch((reason: any) => console.log(reason));
         /*   this.speechkit.tts(en, 'ENG-GBR', 'Serena').then(
                (msg) => {
                    alert(msg);
                },
                (err) => {
                    alert(JSON.stringify(err));
                }
            );*/
        } catch (e) {
            alert('in the catch');
        }
    }

    isFirstItem(i) {
        if (i != 0) {
            var date = this.dictionary_list[i]['create_date'];
            let latest_date = this.datepipe.transform(this.dictionary_list[i - 1]['create_date'], 'dd/MM/yyyy');
            let current_date = this.datepipe.transform(this.dictionary_list[i]['create_date'], 'dd/MM/yyyy');
            if (latest_date == current_date) {
                return false;
            }
        }
        return true;
    }
}
