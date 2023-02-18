import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponents } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  //here pathMath used otherwise angular throws error because all route start with empty and redirects
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  //: is used because anything after / will direct to usercomponent
  //and if we just give id without : it will direct only when id is mentioned in path
  //and not any other thing
  //{ path: 'users/:id/:name', component: UserComponent },
  { path: '', component: HomeComponent },
  {
    path: 'servers',
    canActivate: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponents },
    ],
  },
  { path: 'not-found', component: PageNotFoundComponent },
  // ** means all the path that are not available and it should be placed at end otherwise it redirects always to not found
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  //We want to import this module in the app module hence exporting.
  //Also we wantRouting module to be available when imported this module
  exports: [RouterModule],
})
export class AppRoutingModule {}
