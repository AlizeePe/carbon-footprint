import {Component} from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {DecimalPipe, NgClass, NgStyle} from "@angular/common";
import {CarbonFootprintComputeService} from "../../services/carbon-footprint-compute.service";

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    NgClass,
    NgStyle,
    DecimalPipe
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {
  public distanceKm!: number;
  public consumptionPer100km!: number;
  public readonly maxConsumption = 7;
  public readonly minConsumption = 4;
  public travels!: any[];
  public quantityCo2!: number;

  constructor(private carbonFootprintComputeService: CarbonFootprintComputeService) {
  }

  ngOnInit() {
    this.travels = this.carbonFootprintComputeService.getTravels();
    this.calculateDistanceAndAverage();
  }

  public calculateConsumption(distanceKm: number, consumptionPer100km: number) {
    return (consumptionPer100km * distanceKm) / 100;
  }

  public addKm() {
    return this.distanceKm = this.distanceKm + 100;
  }

  public addTravel() {
    const distance = Math.ceil(Math.random() * 1000);
    const consumption = Math.ceil(Math.random() * 10);
    const quantityCo2 = distance * consumption / 100 * 2.3;
    this.carbonFootprintComputeService.addTravel({
      distanceKm: distance,
      consumptionPer100km: consumption,
      quantityCo2: quantityCo2
    });
    this.calculateDistanceAndAverage();
  }

  public calculateDistanceAndAverage() {
    const resume = this.carbonFootprintComputeService.getResumeTravels();
    this.distanceKm = resume.totalDistance;
    this.consumptionPer100km = resume.averageConsumption;
    this.quantityCo2 = resume.totalQuantityCo2;
  }
}
