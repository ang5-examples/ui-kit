import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {Utils} from '../classes/utils';
import {Tabs} from '../classes/tabs';
import {Tab} from '../classes/tab';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnDestroy {

  private tabs: Tabs;
  private tab: Tab;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.tabs = Utils.getTabs(this.element.nativeElement);

    const tab = new Tab();
    this.element.nativeElement.tabsModuleGetTab = function() {
      this.tab = tab;
      return this.tab;
    };

    this.tabs.add(tab);
    this.tab = tab;
  }

  ngOnDestroy() {
    this.tabs.remove(this.tab);
  }
}
