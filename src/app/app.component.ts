import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
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

  // onSubmit(form: HTMLFormElement) {
  //   console.log('Submitted');
  //   console.log(form);
  // }
  // onSubmit(form: NgForm) {
  //   console.log('Submitted');
  //   console.log(form);
  // }
  // @ViewChild('formRef') signupForm: NgForm;
  // defaultQuestion = 'pet';
  // answer = '';
  // genders = ['male', 'female'];
  // user = {
  //   username: '',
  //   email: '',
  //   secretquestion: '',
  //   answer: '',
  //   gender: '',
  // };
  // submitted = false;

  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //This setvalue method resets all value since all form values need to be provided compulsory
  // this.signupForm.setValue({
  //   userData: {
  //     username: suggestedName,
  //     email: '',
  //   },
  //   secret: 'pet',
  //   questionAnswer: '',
  //   gender: 'male',
  // });

  //pathvalue is used to set part of form
  //Setvalue to set entire form
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName,
  //     },
  //   });
  // }

  // onSubmit() {
  //   // console.log('Submitted');
  //   // console.log(this.signupForm);
  //   this.submitted = true;
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secretquestion = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.questionAnswer;
  //   this.user.gender = this.signupForm.value.gender;
  // }

  // onReset() {
  //   this.signupForm.reset();
  //   this.submitted = false;
  // }

  //----------------------Reactive Approach--------------------------------------------//

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // here we are using bind(this) because this function will be called from angular and it does not know to call from this file
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmail.bind(this)
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    //this triggers on every value change
    //this.signupForm.valueChanges.subscribe((value) => console.log(value));
    //This triggers on status change like valid invalid pending etc of form
    this.signupForm.statusChanges.subscribe((status) => console.log(status));

    //Sets value to entire form
    this.signupForm.setValue({
      userData: {
        username: 'Abhi',
        email: 'Abhi@test.com',
      },
      gender: 'male',
      hobbies: [],
    });
    //Sets value to part of form
    this.signupForm.patchValue({
      userData: {
        username: 'Anna',
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);

    //this will reset on click of submit
    //this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  //here {[s:string]:boolean} is the JS object that should be returned. i.e key of type string and value of boolean
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) != -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
