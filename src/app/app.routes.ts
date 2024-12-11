import {Routes} from '@angular/router';
import {SummaryComponent} from "./components/summary/summary.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {userGuard} from "./guards/user.guard";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'summary', component: SummaryComponent, canActivate: [userGuard]},
  {path: 'profile/:username', component: ProfileComponent, canActivate: [userGuard]}
];
