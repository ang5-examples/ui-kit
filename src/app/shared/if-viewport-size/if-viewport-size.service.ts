import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

export enum ViewPortSize {
  small = 'small',
  medium  = 'medium',
  large = 'large'
}

export interface IConfig {
  medium: number;
  large: number;
}

export class IfViewportSizeConfig implements IConfig {
  constructor(private config: IConfig) {}
  get medium() { return this.config.medium; }
  get large() { return this.config.large; }
}

@Injectable()
export class IfViewportSizeService {
  private _currentViewportSize$: BehaviorSubject<ViewPortSize>;
  constructor(private config: IfViewportSizeConfig) {
    this._detectViewPortSize();
    window.addEventListener('resize', this._detectViewPortSize.bind(this));
  }

  get currentViewportSize$() {
    return this._currentViewportSize$.distinctUntilChanged();
  }

  private _detectViewPortSize() {
    const width = document.body.clientWidth;

    let viewportSize = ViewPortSize.small;
    if (this.config.medium <= width && width < this.config.large) { viewportSize = ViewPortSize.medium; }
    if (this.config.large <= width) { viewportSize = ViewPortSize.large; }

    if (!this._currentViewportSize$) {
      this._currentViewportSize$ = new BehaviorSubject<ViewPortSize>(viewportSize);
    } else {
      this._currentViewportSize$.next(viewportSize);
    }
  }
}
