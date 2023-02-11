import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-word-list-component',
    templateUrl: './word-list-component.component.html',
    styleUrls: ['./word-list-component.component.scss'],
})
export class WordListComponentComponent implements OnInit {
    @Input() list: any;
    direction_list: any = [];

    constructor(private modalCtrl:ModalController) {
    }

    ngOnInit() {
        this.direction_list = JSON.parse(this.list);
        console.log(this.direction_list)
    }
    close() {
        this.modalCtrl.dismiss();
    }
}
