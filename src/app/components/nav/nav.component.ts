import {Component, Input} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  @Input() username!: string | undefined;

  constructor(private userService: UserService, private router: Router) {
  }

  public logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('');
  }
}
