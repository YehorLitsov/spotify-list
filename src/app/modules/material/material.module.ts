import { NgModule } from '@angular/core';
import {MdcButtonModule, MDCDataTableModule, MdcIconButtonModule} from '@angular-mdc/web';

@NgModule({
  exports: [MdcButtonModule, MdcIconButtonModule, MDCDataTableModule]
})
export class MaterialModule { }
