import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //select by element name
  // selector: '[app-servers]', //select by attribute name
  selector: '.app-servers', //select by class name

  templateUrl: './servers.component.html',
  //   template:`<app-server></app-server>
  // <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

}
