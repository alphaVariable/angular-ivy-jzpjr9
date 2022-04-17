import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-playground',
  templateUrl: './observable-playground.component.html',
  styleUrls: ['./observable-playground.component.css'],
})
export class ObservablePlaygroundComponent implements OnInit, OnDestroy {


  constructor() {}

  ngOnInit(): void {
  }
  ngOnDestroy() {
    console.log('destroyed');
  }
}
