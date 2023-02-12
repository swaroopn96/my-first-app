import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

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
  //providers: [AccountsService],
})
export class AppComponent implements OnInit {
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
  // serverElements = [
  //   { type: 'server', name: 'Testserver', content: 'Just a test!' },
  // ];
  // onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent,
  //   });
  // }
  // onBlueprintAdded(blueprintData: {
  //   serverName: string;
  //   serverContent: string;
  // }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent,
  //   });
  // }
  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed';
  // }
  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }

  //------------------------------------------------------------------

  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];

  // onGameStarted(lastNumber: number) {
  //   if (lastNumber % 2 === 0) this.evenNumbers.push(lastNumber);
  //   else this.oddNumbers.push(lastNumber);
  // }

  // numbers = [1, 2, 3, 4, 5];
  // oddNumbers = [1, 3, 5];
  // evenNumbers = [2, 4];
  // onlyOdd = false;
  // value = 5;

  //------------------------------------------------------------------
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active',
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive',
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown',
  //   },
  // ];

  // onAccountAdded(newAccount: { name: string; status: string }) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: { id: number; newStatus: string }) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

  //-------------------------------------------------------------------

  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
