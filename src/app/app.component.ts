import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  //   styles: [
  //     `
  //       h3 {
  //         color: dodgerblue;
  //       }
  //     `,
  //   ],
})
export class AppComponent {
  // title = 'my-app';
  // name = 'Swaroop';
  // servers = [];

  // onAddServer() {
  //   this.servers.push('Another Server');
  // }

  // onRemoveServer(id: number) {
  //   // const position = id + 1;
  //   const position = id;
  //   // splice Removes element from the given position
  //   this.servers.splice(position, 1);
  // }

  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
