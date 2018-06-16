import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() start: number;
  @Output() numberChanged = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {}

  count(){
    this.start++;
    this.numberChanged.emit('current state is ' + this.start);
  }

  reset(n: number){
    this.start = n;
    this.numberChanged.emit('Restart counter');
  }
}
