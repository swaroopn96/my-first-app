import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';
//import { AccountsService } from './accounts.service';
//import { LoggingService } from './logging.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponents } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';

//Declaring routes here and it says when users path is reached it should load userscomponent
const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Registers Routes for our application
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CounterService, ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
