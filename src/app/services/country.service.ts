import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private apiUrl: string = "https://api.worldbank.org/V2/country/";
  private apiFormat: string = "?format=json";

  constructor(private http: HttpClient) {}

  getCountry(country: string): Observable<[]> {
    let api: string = this.apiUrl + country + this.apiFormat;

    return this.http.get<[]>(api);
  }
}
