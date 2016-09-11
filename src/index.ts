import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';
import { Ng2CollapsableComponent} from "./ng2-collapsable.component";

export {
  Ng2CollapsableComponent
};

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [Ng2CollapsableComponent],
  exports: [Ng2CollapsableComponent]
})
export class Ng2CollapsableModule {}
