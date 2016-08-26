import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div ng2-collapsable
      selected="js"
      selected-index-class="selected"
      selected-contents-class="selected">
      <div index="html">HTML</div>
      <div contents="html">HTML {{foo}}</div>
      
      <div index="js">Javascript</div>
      <div contents="js">Javascript {{bar}}</div>
      
      <div index="css">Css</div>
      <div contents="css">Style Sheet</div>
    </div>
  `,
  styles: [`
  `]
})
export class AppComponent {
  foo = 'foo';
  bar = 'bar';
}
