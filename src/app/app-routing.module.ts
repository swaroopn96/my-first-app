import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
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
    //canActivate: [AuthGuard],
    //This works only for children
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
      //server stores the output from ServerResolver before the component loads
      {
        path: ':id',
        component: ServerComponents,
        resolve: { server: ServerResolver },
      },
    ],
  },
  //{ path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' },
  },
  // ** means all the path that are not available and it should be placed at end otherwise it redirects always to not found
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  //imports: [RouterModule.forRoot(appRoutes)],
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  //We want to import this module in the app module hence exporting.
  //Also we wantRouting module to be available when imported this module
  exports: [RouterModule],
})
export class AppRoutingModule {}
