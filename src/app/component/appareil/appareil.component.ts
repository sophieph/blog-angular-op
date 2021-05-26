import { Component, Input, OnInit } from '@angular/core';
import { Appareil } from '../../model/interface/appareil'

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareil!: Appareil;
  
  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareil.status;
  }

}
