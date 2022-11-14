import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NasdaqModel} from "../models/nasdaq.model";

@Injectable({
  providedIn: 'root',
})
export class NasdaqService {

  private serverUrl = 'http://localhost:3000/stocks?q=';

  constructor(private httpClient: HttpClient) {
  }

  getStocks(searchText: string): Observable<NasdaqModel[]> {
    console.log("Calling NASDAQ backend")
    return this.httpClient.get<NasdaqModel[]>(this.serverUrl + searchText);
  }

}
