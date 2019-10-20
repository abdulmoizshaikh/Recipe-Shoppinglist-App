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
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
