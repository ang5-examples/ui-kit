import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class Tab {
  private _isActive$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public get isActive$ () {
    return this._isActive$;
  }

  public get isActive() {
    return this._isActive$.getValue();
  }

  public set isActive(val: boolean) {
    this._isActive$.next(val);
  }
}
