import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {BannerComponent} from '../../components/banner/banner.component';
import {CommonComponentModule} from '../../components/common-component/common-component.module';
import {DatePipe} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommonComponentModule,
        HomePageRoutingModule
    ],
    providers:[
        DatePipe
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
