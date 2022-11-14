import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {catchError, EMPTY, map, Observable, of, Subject, take, takeWhile, tap} from "rxjs";
import {NasdaqModel} from "../models/nasdaq.model";

@Component({
  selector: 'app-add-numbers',
  templateUrl: './add-numbers.component.html',
  styleUrls: ['./add-numbers.component.css']
})
export class AddNumbersComponent implements OnInit {
  numberInput: string
  result = 0;

  subject = new Subject<string>();


  constructor() {
    this.numberInput = ""

    this.subject.pipe(
      map(item => this.castNumber(item) * this.castNumber(item)),
      take(5),
      catchError(err => {
        console.warn(err);
        return of(0);
      })
    ).subscribe(x => this.result += Number(x)
    )
  }

  castNumber(num: string) {
    let number = Number(num)
    if(Number.isNaN(number)){
      throw Error("Not a number")
    }
    return number;
  }

  ngOnInit(): void {
  }

  addNumber() {
    this.subject.next(this.numberInput)
  }
}
