import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtSecurityService {

  constructor(private http:HttpClient) { }

  public generateToken(request:any):Observable<any> {
    return this.http.post("http://localhost:8080/login",request,{responseType:'text' as 'json'});
  }

  public getSpecialToken(request:any){
  let tokenStr = 'Bearer ' + request;

  const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get("http://localhost:8080/getSpecialToken", {headers, responseType:'text'});
  }
}
