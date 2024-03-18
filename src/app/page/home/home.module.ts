import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ItemComponent } from '../../component/item/item.component';
import { ShareModule } from 'src/app/component/share.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  exports:[ItemComponent]
})
export class HomePageModule {}
