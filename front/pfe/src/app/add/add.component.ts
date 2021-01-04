import { PfeService } from './../service/pfe.service';
import { Pfe } from './../models/Pfe';
import { Router } from '@angular/router';
import { TypeService } from './../service/type.service';
import { TypePfe } from './../models/TypePfe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  types: TypePfe[];
  pfe: Pfe = new Pfe();

  constructor(private typeService: TypeService,
              private pfeService: PfeService,
              private route: Router) { }

  ngOnInit() {
    this.allTypes();
  }

  allTypes() {
    this.typeService.getAllTypes().subscribe(
      res => {
        this.types = res;
      },
      err => { console.log('types error!!'); }
    );
  }

  save() {
    this.pfeService.add(this.pfe).subscribe(
      res => {
        this.route.navigate(['type']);
      },
      err => { console.log('save error!!'); }
    );
  }

}
