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

this is the example of selector by element name
`selector:'app-server'`           
`<app-server></app-server>`

this is the example of selector by attribute name
`selector:'[app-server]'` 
`<div app-servers></div>`

select by class name
`selector: '.app-servers'` 
`<div class="app-servers"></div>`

selector by id and sudo selectors like hover and so on won't work because angular don't support them
you typically you these element selector but their might be some cases where you need to use different selectors


## Data Binding  (4 Forms)
 
the communication between your typescript code (Business Login) and your template(Html) what the user sees

## For Output Data We use

1. String Interpolation `({{data}})`
2. Property Binding `([property]="data")`

e.g here disable is bind through property binding that get update dynamically on the bases of allowNewServer boolean value
`<button class="btn btn-primary" [disabled="!allowNewServer">Add Server</button>`

## For React to user Events We use

3. Event Binding `((event)="expression")`
means execute code when ever event like onClick occurs

e.g of click event binding
`<button class="btn btn-primary" [disabled]="!allowNewServer"(click)="onCreateServer()">Add Server</button>`

passing Data in Event Binding function using `$event` ($event will simply be the data emitted with that event)
e.g of click event binding with data getting in function params
`<input type="text" class="form-control" (input)="onUpdateServerName($event)">`
here input event provide by DOM and it gives some data when emit this "input event" 

## Additional form of data Binding where we combine both the directions 

4. Two-Way-Binding `([(ngModel)]="data")`
where we are able to react events and output somethings at the same time

e.g: `<input type="text" class="form-control" [(ngModel)]="serverName">`
in order to use ngModel in our component we have to import FormsModule from @angular/forms and added into imports array in app.module.ts file

function handler name start with on make sence that it is the event binding hander like onChangeHandler so best practice is to start these function name with "on"

## Directives
 
Directives are Intructions in the DOM!

e.g
@Components are kind of instructions in the DOM Instructing angular to add the  content of comp template and business login in typescript code in this place where we use the selector these are directives but directive with a template