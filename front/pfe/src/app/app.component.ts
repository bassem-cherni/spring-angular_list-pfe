import { PfeService } from './service/pfe.service';
import { TypeService } from './service/type.service';
import { TypePfe } from './models/TypePfe';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pfe';
  types: TypePfe[];
  count: number;
  search: string;

  constructor(private typeService: TypeService,
              private pfeService: PfeService,
              private route: Router) { }

  ngOnInit() {
    this.allTypes();
    this.pfeCount();
  }

  allTypes() {
    this.typeService.getAllTypes().subscribe(
      res => {
        this.types = res;
      },
      err => {console.log('types error!!'); }
    );
  }

  pfeCount() {
    this.pfeService.getCount().subscribe(
      res => {
        this.count = res;
      },
      err => {console.log('count error!!'); }
    );
  }

  doSearch() {
    this.route.navigate(['search/' + this.search]);
  }
}
