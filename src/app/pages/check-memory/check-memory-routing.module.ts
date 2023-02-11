import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckMemoryPage } from './check-memory.page';

const routes: Routes = [
  {
    path: '',
    component: CheckMemoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckMemoryPageRoutingModule {}
