import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import {NguiCollapsableComponent} from "./collapsable.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NguiCollapsableComponent],
  exports: [NguiCollapsableComponent]
})
export class NguiCollapsableModule {}
