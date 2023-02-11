import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PublicViewComponent} from '../public-view/public-view.component';
import {IonicModule} from '@ionic/angular';
import {AddWordComponent} from '../add-word/add-word.component';
import {WordListComponentComponent} from '../word-list-component/word-list-component.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PublicViewComponent,
        AddWordComponent,
        WordListComponentComponent,
    ],
    exports:      [
        CommonModule,
        FormsModule,
        PublicViewComponent,
        AddWordComponent,
        WordListComponentComponent,

    ],
    entryComponents: [
        PublicViewComponent,
        AddWordComponent,
        WordListComponentComponent
    ],
})
export class CommonComponentModule { }
