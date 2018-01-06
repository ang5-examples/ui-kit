import { Component, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';
import {Utils} from '../classes/utils';
import {Tab} from '../classes/tab';
import {Tabs} from '../classes/tabs';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.css']
})
export class TabTitleComponent implements OnInit {
  private tabs: Tabs;
  private tab: Tab;
  @HostBinding('class.active') isActiveTab = false;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.tabs = Utils.getTabs(this.element.nativeElement);
    this.tab = Utils.getTab(this.element.nativeElement);

    this.tab.isActive$.subscribe(isActive => { this.isActiveTab = isActive; });
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    this.tabs.selectTab(this.tab);
  }
}
