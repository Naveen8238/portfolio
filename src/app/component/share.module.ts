import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../component/profile/profile.component';
import { ItemComponent } from '../component/item/item.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ItemComponent,ProfileComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
exports:[ItemComponent,ProfileComponent],
})
export class ShareModule {}