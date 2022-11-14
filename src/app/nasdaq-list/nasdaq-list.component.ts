import { Component, OnInit } from '@angular/core';
import {debounce, debounceTime, EMPTY, map, Observable, of, Subject, switchMap, tap} from "rxjs";
import {NasdaqModel} from "../models/nasdaq.model";
import {NasdaqService} from "../services/nasdaq-service";

@Component({
  selector: 'app-nasdaq-list',
  templateUrl: './nasdaq-list.component.html',
  styleUrls: ['./nasdaq-list.component.css']
})
export class NasdaqListComponent implements OnInit {

  results$: Observable<NasdaqModel[]>;

  subject = new Subject()

  constructor(private nasdaqService: NasdaqService) {
    //this.results$ = this.nasdaqService.getStocks("")

    this.results$ = this.subject.pipe(
      tap(console.log),
      debounceTime(500),
      switchMap(searchText => this.nasdaqService.getStocks(searchText as string))
    );

  }

  search(evt: Event) {
    const searchText = (evt.target as HTMLInputElement).value
    //this.results$ = this.nasdaqService.getStocks(searchText)
    this.subject.next(searchText)
  }

  ngOnInit(): void {
    //this.results$ = this.nasdaqService.getStocks("")
  }

}
