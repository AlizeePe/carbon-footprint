import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public error?: string | null;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngAfterContentChecked(): void {
    if (this.route.snapshot.queryParamMap.has('error')) {
      this.error = this.route.snapshot.queryParamMap.get('error');
    }
  }

  public login() {
    this.userService.login('Jean');
    this.goToSummary();
  }

  public goToSummary() {
    this.router.navigate(['summary']);
  }
}
