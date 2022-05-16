import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtSecurityService {

  constructor(private http:HttpClient) { }

  public generateToken(request:any){
    return this.http.post("http://localhost:8080/login",request,{responseType:'text' as 'json'});
  }

  public getSpecialToken(request:any){
  let tokenStr = 'Bearer ' + sessionStorage.getItem("token");
  console.log(tokenStr);
  const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post("http://localhost:8080/getSpecialToken",request, {headers, responseType:'text' as 'json'});
  }
}
