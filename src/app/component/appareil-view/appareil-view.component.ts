import { Component, Input, OnInit } from '@angular/core';
import { Appareil } from '../../model/interface/appareil'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  date = new Date;
  @Input()
  appareils: Appareil[] = [
    {id: 1, name: "Machine à laver", status: "on", created_at: this.date},
    {id: 2, name: "Micro-ondes", status: "off", created_at: this.date},
    {id: 3, name: "Sécheuse", status: "on", created_at: this.date}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
