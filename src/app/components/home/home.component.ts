import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public error?: string | null;
  public form!: FormGroup;
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("nom@campus-eni.fr", [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.login();
  }

  ngAfterContentChecked(): void {
    if (this.route.snapshot.queryParamMap.has('error')) {
      this.error = this.route.snapshot.queryParamMap.get('error');
    }
  }

  public login() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    if (username && password) {
      this.userService.login(username);
      this.goToSummary();
    } else {
      this.error = 'Veuillez remplir tous les champs';
    }
  }


  public goToSummary() {
    this.router.navigate(['summary']);
  }
}
