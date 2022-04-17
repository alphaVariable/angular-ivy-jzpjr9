import { Component, VERSION } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major + '.' + VERSION.minor;

  constructor() {
    // const observable$ = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    // });
    // observable$.subscribe(
    //   (value) => console.log(value),
    //   (error) => console.log(error),
    //   () => console.log('completed')
    // );
  }
}
