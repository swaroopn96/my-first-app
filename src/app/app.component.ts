import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserServices } from './user.service';
//import { AccountsService } from './accounts.service';
//import { CounterService } from './counter.service';
//import { UserService } from './users.service';

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
  //providers: [UserService],
})
//export class AppComponent implements OnDestroy {
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
  // accounts: { name: string; status: string }[] = [];
  // constructor(private accountsService: AccountsService) {}
  // ngOnInit(): void {
  //   this.accounts = this.accountsService.accounts;
  // }
  //----------------------------------------------------------------------
  // activeUsers = ['Ram', 'Ajay'];
  // inactiveUsers = ['Ravi', 'Guru'];
  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }
  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
  //constructor(private userService: UserService) {}
  // onSetToInactive(id: number) {
  //   this.userService.setToInactive(id);
  // }
  // onSetToActive(id: number) {
  //   this.userService.setToActive(id);
  // }
  // constructor(private userServices: UserServices) {}
  // userActivated = false;
  // private activatedSub: Subscription;
  // ngOnInit() {
  //   this.activatedSub = this.userServices.activatedEmitter.subscribe(
  //     (didActivate) => {
  //       this.userActivated = didActivate;
  //     }
  //   );
  // }
  // ngOnDestroy(): void {
  //   this.activatedSub.unsubscribe();
  // }
  //--------------------------------------------------------------------

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: HTMLFormElement) {
  //   console.log('Submitted');
  //   console.log(form);
  // }
  // onSubmit(form: NgForm) {
  //   console.log('Submitted');
  //   console.log(form);
  // }
  @ViewChild('formRef') ngForm;
  defaultQuestion = 'pet';
  answer = '';
  onSubmit() {
    console.log('Submitted');
    console.log(this.ngForm);
  }
}
