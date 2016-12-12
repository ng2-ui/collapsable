import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import {Ng2CollapsableComponent} from "./ng2-collapsable.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [Ng2CollapsableComponent],
  exports: [Ng2CollapsableComponent]
})
export class Ng2CollapsableModule {}
