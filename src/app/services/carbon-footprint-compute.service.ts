import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  private travels: any[];

  constructor() {
    this.travels = [
      {distanceKm: 50, consumptionPer100km: 5, quantityCo2: 5.75},
      {distanceKm: 150, consumptionPer100km: 6, quantityCo2: 20.7},
      {distanceKm: 250, consumptionPer100km: 7, quantityCo2: 40.25},
      {distanceKm: 350, consumptionPer100km: 8, quantityCo2: 64.4},
      {distanceKm: 450, consumptionPer100km: 9, quantityCo2: 93.15}
    ]
  }

  public getTravels() {
    return this.travels;
  }

  public addTravel(travel: any) {
    this.travels.push(travel);
  }

  public getResumeTravels() {
    let totalDistance = 0;
    let averageConsumption = 0;
    let totalQuantityCo2 = 0;

    for (const travel of this.travels) {
      totalDistance += travel.distanceKm;
      averageConsumption += travel.consumptionPer100km * travel.distanceKm;
      totalQuantityCo2 += travel.quantityCo2;
    }

    return {
      "totalDistance": totalDistance,
      "averageConsumption": averageConsumption / totalDistance,
      "totalQuantityCo2": totalQuantityCo2
    };
  }
}
