import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../../../service/appareil.service';
import { Appareil } from '../../../model/interface/appareil'

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  appareil!: Appareil;
  name!: string;
  status!: string;
  id!: number;


  constructor(private appareilService: AppareilService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = id;
    // this.appareil = this.appareilService.getAppareilById(+id).name ;
    // this.name = this.appareilService.getAppareilById(+id)?.name;
    // this.status = this.appareilService.getAppareilById(+id)?.status;

  }

}
