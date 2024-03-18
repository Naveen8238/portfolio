import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItempagePageRoutingModule } from './itempage-routing.module';

import { ItempagePage } from './itempage.page';

import { RouterModule } from '@angular/router';

import { ShareModule } from 'src/app/component/share.module';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    ItempagePageRoutingModule
  ],
  declarations: [ItempagePage],
  exports:[RouterModule]
})
export class ItempagePageModule {}
