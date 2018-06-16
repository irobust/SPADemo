import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { Product } from '../model/product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  message: string;
  @ViewChild(CounterComponent) counter: CounterComponent; 

  constructor() { }
  ngOnInit() {}

  update(e){
    this.message = e;
  }

  reset(){
    this.counter.reset(100);
  }
}
