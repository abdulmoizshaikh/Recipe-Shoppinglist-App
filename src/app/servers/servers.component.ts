import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //select by element name
  // selector: '[app-servers]', //select by attribute name
  selector: '.app-servers', //select by class name

  templateUrl: './servers.component.html',
  //   template:`<app-server></app-server>
  // <app-server></app-server>`,

  // styleUrls: ['./servers.component.css']
  styles: [`
  .white{
    color:white;
  }`]
})

export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = ''
  serverCreated: boolean = false;
  // servers: Array = ['test Server', 'test server2'];
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.log.push(new Date())
    // this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
