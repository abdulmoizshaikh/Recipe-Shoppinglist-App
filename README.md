# LearnAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Few Usefull commands to know in angular

Run `ng new app-name` cmd to create angular project using cli

Run `ng serve` to start or compile your project like npm start in react then goto localhost:4200 to check your server runing.

Run `ng serve --open` to compile and open your project automatically in the browser.

## Generate your component by cli using command line

Run `ng generate component comp-name` to generate folder of component with necessary component files this will create folder in your app folder by default and through manually you have to import and add in app.module.ts declaration but through cmd line its add automatically into app.module file

Run `ng g c comp-name` through shortcut command which do the same as above command.


## Angular Concepts
 
You have to add template in your component either is inline template or external using templateURL but you have atleast one type type of template in your component on the other hand selector and styleURLs dont have to be present in order to run or compile component they are optional

here in styleUrls: ['./app.component.css'] it takes array of styles so that's now we can add multiple styles in stylesURL array separated by commas

Selector name must be unique for a component so it can not override other file etc

Selectors are not limited to select by element name but selector can be just like in css you can select element by attribut so selector can be select by attribute 

selector:'app-server'           this is the example of selector by element name

selector:'[app-server]'         this is the example of selector by attribute name
<!-- <div app-servers></div> -->
 
  
selector: '.app-servers', //select by class name
<div class="app-servers"></div>
