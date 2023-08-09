import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestMagicLinkComponent } from './features/authentication/request-magic-link/request-magic-link.component';
import { AuthenticationComponent } from './features/authentication/authentication.component';
import { AccessGrantedComponent } from './features/access-granted/access-granted.component';
import { AuthGuard } from './general/guards/auth-guard';

const routes: Routes = [
  { path: '', component: RequestMagicLinkComponent},
  { path: 'authentication', component: AuthenticationComponent},
  { path: 'access-granted', component: AccessGrantedComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
