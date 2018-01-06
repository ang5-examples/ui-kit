import { Component, ElementRef, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {Utils} from '../classes/utils';
import {Tab} from '../classes/tab';
import {Tabs} from '../classes/tabs';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {
  private tab: Tab;
  private tabs: Tabs;

  @ViewChild('tabContent') _tabContentTemplate: TemplateRef<any>;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.tabs = Utils.getTabs(this.element.nativeElement);
    this.tab = Utils.getTab(this.element.nativeElement);

    this.tab.isActive$.subscribe(isActive => {
      if (isActive) {
        this.tabs.displayTabContent(this._tabContentTemplate);
      }
    });
  }
}
