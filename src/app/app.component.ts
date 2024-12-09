import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarbonFootprintComponent} from "./components/carbon-footprint/carbon-footprint.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarbonFootprintComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carbon-footprint';
}
