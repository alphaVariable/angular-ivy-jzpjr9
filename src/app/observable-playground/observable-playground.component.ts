import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-observable-playground',
  templateUrl: './observable-playground.component.html',
  styleUrls: ['./observable-playground.component.css'],
})
export class ObservablePlaygroundComponent implements OnInit, OnDestroy {
  // create an observable
  // subscribe to it
  // unsubscribe

  observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.complete();
  });

  constructor() {}

  ngOnInit(): void {
    this.observable.subscribe(
      (value) => console.log(value),
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
  ngOnDestroy() {
    console.log('destroyed');
    this.observable.unsubscribe();
  }
}
