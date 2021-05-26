import { Injectable } from '@angular/core';
import { Appareil } from '../model/interface/appareil'

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  date = new Date;

  appareils: Appareil[] = [
    {id: 1, name: "Machine à laver", status: "on", created_at: this.date},
    {id: 2, name: "Micro-ondes", status: "off", created_at: this.date},
    {id: 3, name: "Sécheuse", status: "on", created_at: this.date},
    {id: 3, name: "Four", status: "off", created_at: this.date}
  ]

  constructor() { }

  switchOnAll(): void {
    for(let appareil of this.appareils) {
      appareil.status = 'on';
    }
  }

  switchOffAll() : void {
    for(let appareil of this.appareils) {
      appareil.status = 'off';
    }
  }
}
