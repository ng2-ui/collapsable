# ng2-collapsable
Angular2 Accordion Component 

<a href="https://rawgit.com/ng2-ui/ng2-collapsable/master/app/index.html">
  Demo
</a>

## Install

1. install ng2-collapsable

        $ npm install ng2-collapsable --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-collapsable'] = 'node_modules/ng2-collapsable/dist';
        packages['ng2-collapsable'] = { main: 'ng2-collapsable.umd.js', defaultExtension: 'js' }

3. import Ng2Collapsable to your AppModule
        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { Ng2Collapsable } from 'ng2-Collapsable';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2Collapsable],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

## Use it in your template
 
    <ng2-collapsable
      selected="js"
      selected-index-class="selected"
      selected-contents-class="slideDown animated">
      <div index="html">HTML</div>
      <div contents="html">HTML {{1}}</div>
      <div index="js">Javascript</div>
      <div contents="js">Javascript {{1}}</div>
    </ng2-collapsable>
         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you;

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
It’s required to be open-minded and interested in helping others.
You can contribute to the following;

  * Updating README.md
  * Making more and clearer comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 

## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-collapsable.git
    $ cd ng2-collapsable
    $ npm install
    $ npm start

