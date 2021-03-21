import { NgModule } from '@angular/core';
import {MdcButtonModule, MdcTabBarModule} from '@angular-mdc/web';

@NgModule({
  exports: [MdcButtonModule, MdcTabBarModule]
})
export class MaterialModule { }
