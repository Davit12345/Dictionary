import {Component, OnInit} from '@angular/core';
import {StorageProvider} from '../../providers/storage';
import {AddWordComponent} from '../../components/add-word/add-word.component';
import {WordListComponentComponent} from '../../components/word-list-component/word-list-component.component';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-check-memory',
    templateUrl: './check-memory.page.html',
    styleUrls: ['./check-memory.page.scss'],
})
export class CheckMemoryPage implements OnInit {
    step = 'start';
    dictionary_list: any = [];
    true_list: any = [];
    false_list: any = [];
    curent_word_id = 0;
    curent_word: any = null;
    isEn=false;
    constructor(private _storage: StorageProvider, private modalController: ModalController) {

    }


    startGame() {
        this.curent_word_id = 0;
        this.dictionary_list = this._storage.getLiastInStorage();
        this.step = 'game';
        this.true_list = [];
        this.false_list = [];
        this.curent_word = this.dictionary_list[this.curent_word_id];
        this.isEn=false;
    }

    IKnow() {
        this.true_list.unshift(this.curent_word);
        this.checkNextItem();

    }

    INotKnow() {
        this.false_list.unshift(this.curent_word);
        this.checkNextItem();
    }

    checkNextItem() {
        this.isEn=false;
        var lenght = this.dictionary_list.length;
        if (this.curent_word_id == lenght - 1) {
            this.step = 'new-game';
            return;
        }

        this.curent_word_id = this.curent_word_id + 1;
        this.curent_word = this.dictionary_list[this.curent_word_id];
    }

    ngOnInit() {
    }

    async openListComponent(list) {
        const modal = await this.modalController.create({
            component: WordListComponentComponent,
            componentProps: {
                list: JSON.stringify(list)
            },
            cssClass: 'full-component',

        });

        return await modal.present();
    }
    openEn(){
     this.isEn=!this.isEn;
    }
}
