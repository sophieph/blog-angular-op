import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../../../service/appareil.service';
import { Appareil } from '../../../model/interface/appareil'

@Component({
  selector: 'app-appareil-id',
  templateUrl: './appareil-id.component.html',
  styleUrls: ['./appareil-id.component.scss']
})
export class AppareilIdComponent implements OnInit {

  appareil!: Appareil;
  

  constructor(private appareilService: AppareilService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // this.appareil = this.appareilService.getAppareilById(+id).name ;
  }

}
