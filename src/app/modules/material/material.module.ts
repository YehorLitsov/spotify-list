import { NgModule } from '@angular/core';
import {MdcButtonModule, MDCDataTableModule} from '@angular-mdc/web';

@NgModule({
  exports: [MdcButtonModule, MDCDataTableModule]
})
export class MaterialModule { }
