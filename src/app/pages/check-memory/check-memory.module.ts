import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckMemoryPageRoutingModule } from './check-memory-routing.module';

import { CheckMemoryPage } from './check-memory.page';
import {CommonComponentModule} from '../../components/common-component/common-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonComponentModule,
    CheckMemoryPageRoutingModule
  ],
  declarations: [CheckMemoryPage]
})
export class CheckMemoryPageModule {}
