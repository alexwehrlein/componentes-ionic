import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmenPage } from './segmen.page';

const routes: Routes = [
  {
    path: '',
    component: SegmenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmenPageRoutingModule {}
