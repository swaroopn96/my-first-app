import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  // allowNewServer = false;
  // serverCreationStatus = 'No Server was created!';
  // serverName = '';
  // userName = '';
  // serverCreated = false;
  // servers = ['Testserver', 'Testserver 2'];
  // showContent = false;
  // log = [];

  // constructor() {
  //   //This will set allowNewServer to true after 2000ms
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 2000);
  // }

  // ngOnInit(): void {}

  // onCreateServer() {
  //   this.serverCreated = true;
  //   this.serverCreationStatus =
  //     'Server was Created! Name is ' + this.serverName;
  //   this.servers.push(this.serverName);
  // }

  // //event is of type Event
  // onUpdateServerName(event: Event) {
  //   //console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  // onToggleDetails() {
  //   this.showContent = !this.showContent;
  //   // this.log.push(this.log.length + 1);
  //   this.log.push(new Date());
  //}

  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //using obsolute path
    //this.router.navigate(['/servers']);
    //using relative path
    //here its working expected because navigate does not know in which path currently in hence it navigates properly unlike routerLink
    //this.router.navigate(['servers']);
    //Here we are telling angular to navigate from the relative route hence app breaks
    //this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
