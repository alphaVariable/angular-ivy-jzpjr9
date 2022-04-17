import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-playground',
  templateUrl: './observable-playground.component.html',
  styleUrls: ['./observable-playground.component.css']
})
export class ObservablePlaygroundComponent implements OnInit, OnDestroy {
// create an observable
// subscribe to it
// unsubscribe

  observable = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
  });
  
  constructor() { }

  ngOnInit(): void {
    this.observable.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('completed')
    );    
  }
  ngOnDestroy() {
    console.log('destroyed');
    this.observable.unsubscribe();
  }

}
