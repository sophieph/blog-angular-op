import { Component, Input, OnInit } from '@angular/core';
import { Appareil } from '../../model/interface/appareil'
import { AppareilService } from '../../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  @Input() appareils: Appareil[];

  constructor(private appareilService: AppareilService) {
    this.appareils = [];
   }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onOnAll(): void {
    this.appareilService.switchOnAll();
  }

  onOffAll(): void {
    this.appareilService.switchOffAll();
  }
  
  

}
