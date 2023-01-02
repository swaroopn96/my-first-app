import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showContent = false;
  log = [];

  constructor() {
    //This will set allowNewServer to true after 2000ms
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was Created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  //event is of type Event
  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails() {
    this.showContent = !this.showContent;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
