import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
