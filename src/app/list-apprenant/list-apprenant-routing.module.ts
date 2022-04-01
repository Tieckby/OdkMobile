import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListApprenantPage } from './list-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: ListApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListApprenantPageRoutingModule {}
