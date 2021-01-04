import { ActivatedRoute, ParamMap } from '@angular/router';
import { PfeService } from './../service/pfe.service';
import { Pfe } from './../models/Pfe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  pfes: Pfe[];

  constructor(private pfeService: PfeService,
              private actiRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actiRoute.paramMap.subscribe((params: ParamMap) => {
      this.search = params.get('search');
      this.searchPfe(this.search);
    });
  }

  searchPfe(s: string) {
    this.pfeService.search(s).subscribe(
      res => {
        this.pfes = res;
      },
      err => {console.log('search error!!'); }
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
