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
    switch(travel.type) {
      case 'car':
        travel.quantityCo2 = Math.ceil((travel.distanceKm * travel.consumptionPer100km) / 100 * 2.3);
        break;
      case 'train':
        travel.quantityCo2 = Math.ceil(travel.distanceKm * 0.03);
        break;
      case 'plane':
        travel.quantityCo2 = Math.ceil(travel.distanceKm * 0.2)
    }
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
