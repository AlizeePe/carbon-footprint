import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {UserService} from "../../services/user.service";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public username?: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.username = this.userService.getUsername();
  }

  public getUsername(): string {
    return this.userService.getUsername();
  }
}
