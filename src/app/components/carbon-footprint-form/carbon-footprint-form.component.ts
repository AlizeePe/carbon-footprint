import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CarbonFootprintComputeService} from "../../services/carbon-footprint-compute.service";

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.css'
})
export class CarbonFootprintFormComponent implements OnInit {
  public travelForm: FormGroup = new FormGroup({});

  constructor(private carbonFootprintComputeService: CarbonFootprintComputeService) {
  }

  ngOnInit() {
    this.travelForm = new FormGroup({
      distanceKm: new FormControl(null, [Validators.required, Validators.min(1)]),
      consumptionPer100km: new FormControl(null),
      date: new FormControl(null, [Validators.required]),
      type: new FormControl('car', [Validators.pattern("(car|train|plane)"), control => this.travelTypeValidator(control)]),
    })
  }

  public travelTypeValidator(control: AbstractControl) {
    const travelType = control.value;
    if (travelType == 'car') {
      this.travelForm.get('consumptionPer100km')?.setValidators([Validators.required, Validators.min(1)]);
    } else {
      this.travelForm.get('consumptionPer100km')?.clearValidators();
      this.travelForm.get('consumptionPer100km')?.setValue(0);
    }
    this.travelForm.get('consumptionPer100km')?.updateValueAndValidity();
    return null;
  }

  onTravelFormSubmit() {
    if (this.travelForm.valid) {
      this.carbonFootprintComputeService.addTravel(this.travelForm.value);
    }
  }
}

