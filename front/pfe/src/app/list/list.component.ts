import { PfeService } from './../service/pfe.service';
import { Pfe } from './../models/Pfe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id: number;
  pfes: Pfe[];

  constructor(private pfeService: PfeService,
              private actiRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actiRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      if (isNaN(this.id)) {
        this.fetchAll();
      } else {
        this.fetchByType(this.id);
      }
    });
  }

  fetchByType(id: number) {
    this.pfeService.getByType(id).subscribe(
      res => {
        this.pfes = res;
      },
      err => {console.log('pfes error!!'); }
    );
  }

  fetchAll() {
    this.pfeService.getAllPfes().subscribe(
      res => {
        this.pfes = res;
      },
      err => {console.log('pfes all error!!'); }
    );
  }

  delete(p: Pfe) {
    const index = this.pfes.indexOf(p);
    this.pfeService.delete(p.id).subscribe(
      res => {
        this.pfes.splice(index, 1);
        window.location.reload();
      },
      err => {console.log('delete error!!'); }
    );
  }

}
