import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { FlowData } from '../flow-data.model';

@Injectable({
  providedIn: 'root'
})
export class FlowDataService {

  constructor(private http:HttpClient) { }

  dailyData(): Observable<any>{
    let tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',tokenStr);
    return this.http.get<FlowData[]>("http://localhost:8080/home",{headers});
  }
}
