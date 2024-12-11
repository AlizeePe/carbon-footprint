import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";

export const userGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);

  if (userService.isAuthenticated()) {
    return true;
  } else {
    router.navigate([''], {queryParams: {error: "Veuillez vous connecter"}})
    return false;
  }
}
