# ng2-collapsable
Angular2 Accordion Component 

<a href="https://ng2-ui.github.io/#/ng2-collapsable">
  Demo
</a>

## Install

1. install ng2-collapsable

        $ npm install ng2-collapsable --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-collapsable'] = 'node_modules/ng2-collapsable'
        packages['ng2-collapsable'] = { main: 'dist/index.js', defaultExtension: 'js']

## Use it in your code

Import directives and add `ng2-collapsable` to your component

        import { Ng2CollapsableComponent} from 'ng2-collapsable';

        @Component({
          selector: 'my-app',
          directives: [Ng2CollapsableComponent],
          template: `
            <ng2-collapsable
              selected="js"
              selected-index-class="selected"
              selected-contents-class="slideDown animated">
              <div index="html">HTML</div>
              <div contents="html">HTML {{1}}</div>
              <div index="js">Javascript</div>
              <div contents="js">Javascript {{1}}</div>
            </ng2-collapsable>
          `
        })

## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-collapsable.git
    $ cd ng2-collapsable
    $ npm install
    $ npm start

