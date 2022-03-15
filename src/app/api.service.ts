import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  value:any[];

  constructor(private http: HttpClient) { }


  public getJSON(): Observable<any> {
    return this.http.get("./assets/mydata.json");
  }

  public getJSON1(): Observable<any> {
  return this.http.get("./assets/mycontent.json");
  }

}
