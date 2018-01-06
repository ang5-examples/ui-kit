import { Tab } from './tab';
import { TemplateRef, ViewContainerRef } from '@angular/core';

export class Tabs {
  private tabs: Tab[] = [];

  constructor(private tabContentContainer: ViewContainerRef) { }

  public add(tab: Tab) {
    this.tabs.push(tab);
    this._detectActive();
  }

  public remove(tab: Tab) {
    this.tabs = this.tabs.filter(tab2 => tab2 !== tab);
    this._detectActive();
  }

  private _detectActive() {
    if (!this.tabs.some(tabService => tabService.isActive)) {
      if (this.tabs[0]) {
        this.tabs[0].isActive = true;
      }
    }
  }

  public selectTab(tab: Tab) {
    this.tabs.forEach(tab2 => { tab2.isActive = false; });
    tab.isActive = true;
  }

  public displayTabContent(tabContentTemplate: TemplateRef<any>) {
    this.tabContentContainer.clear();
    this.tabContentContainer.createEmbeddedView(tabContentTemplate);
  }
}
