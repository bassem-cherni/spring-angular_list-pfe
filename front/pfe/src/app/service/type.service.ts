import { TypePfe } from './../models/TypePfe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getAllTypes() {
    return this.http.get<TypePfe[]>('http://localhost:8080/rest/listetype');
  }

}
