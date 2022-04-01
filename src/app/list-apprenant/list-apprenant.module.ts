import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListApprenantPageRoutingModule } from './list-apprenant-routing.module';

import { ListApprenantPage } from './list-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListApprenantPageRoutingModule
  ],
  declarations: [ListApprenantPage]
})
export class ListApprenantPageModule {}
