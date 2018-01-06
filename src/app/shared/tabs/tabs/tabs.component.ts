import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {Tabs} from '../classes/tabs';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @ViewChild('tabContentContainer', {read: ViewContainerRef})_tabContentContainer: ViewContainerRef;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const tabs = new Tabs(this._tabContentContainer);
    this.element.nativeElement.tabsModuleGetTabs = function() {
      this.tabs = tabs;
      return this.tabs;
    };
  }

}
