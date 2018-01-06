import {Tabs} from './tabs';
import {Tab} from './tab';

export class Utils {
  private static findAncestorByTagName (element, tagName) {
    tagName = tagName.toUpperCase();
    while ((element = element.parentElement) && element.tagName !== tagName) {}
    return element;
  }

  public static getTabs(element): Tabs {
    const tabsElement = Utils.findAncestorByTagName(element, 'tabs');
    if (!tabsElement) { throw new Error('Parent component tabs not found!'); }
    return tabsElement.tabsModuleGetTabs();
  }

  public static getTab(element): Tab {
    const tabElement = Utils.findAncestorByTagName(element, 'tab');
    if (!tabElement) { throw new Error('Parent component tab not found!'); }
    return tabElement.tabsModuleGetTab();
  }
}
