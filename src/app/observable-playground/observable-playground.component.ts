import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-playground',
  templateUrl: './observable-playground.component.html',
  styleUrls: ['./observable-playground.component.css'],
})
export class ObservablePlaygroundComponent implements OnInit, OnDestroy {
  constructor() {
    const observable$ = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });
    observable$.subscribe(
      (value) => console.log(value),
      (error) => console.log(error),
      () => console.log('completed')
    );
  }

  ngOnInit(): void { }
  
  ngOnDestroy(): void { }
}
