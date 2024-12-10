import { Component } from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {DecimalPipe, NgClass, NgStyle} from "@angular/common";
import {min} from "rxjs";

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
  public travels! : any[];

  ngOnInit() {
    this.distanceKm = 40;
    this.consumptionPer100km = 50;
    this.travels = [
      { distanceKm: 50,  consumptionPer100km: 5 },
      { distanceKm: 150, consumptionPer100km: 6 },
      { distanceKm: 250, consumptionPer100km: 7 },
      { distanceKm: 350, consumptionPer100km: 8 },
      { distanceKm: 450, consumptionPer100km: 9 }
    ]
    this.calculateDistanceAndAverage();
  }
  public calculateConsumption(distanceKm: number, consumptionPer100km: number){
    return (consumptionPer100km * distanceKm) / 100;
  }

  public addKm(){
    return this.distanceKm = this.distanceKm + 100;
  }

  public addTravel() {
    const distance = Math.floor(Math.random() * 1000);
    const consumption = Math.floor(Math.random() * 10);
    this.travels.push({distanceKm: distance, consumptionPer100km: consumption});
    this.calculateDistanceAndAverage();
  }

  public calculateDistanceAndAverage(){
    let totalDistance = 0;
    let average = 0;
    for(const travel of this.travels){
      totalDistance += travel.distanceKm;
      average += travel.consumptionPer100km;
    }
    this.distanceKm = totalDistance;
    this.consumptionPer100km = average / this.travels.length;
  }
}
