import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Stock } from "../models/stock";

@Injectable ({
  providedIn: 'root'
})
export class stockService {
  private apiUrl = '/stock';

  constructor(private http: HttpClient) {}

  addstock(formData :FormData ,iduser:string):Observable<any>{

    return this.http.post(`${this.apiUrl}/ajouter/${iduser}`, formData);
  }
}
