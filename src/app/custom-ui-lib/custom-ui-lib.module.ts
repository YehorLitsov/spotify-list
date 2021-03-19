import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import {MdcButtonModule} from '@angular-mdc/web';
import {MaterialModule} from './components/modules/material/material.module';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [ButtonComponent]
})
export class CustomUiLibModule { }
