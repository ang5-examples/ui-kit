import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {IfViewportSizeService, ViewPortSize} from './if-viewport-size.service';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective implements OnInit, OnDestroy {
  private _ifViewPortSize: ViewPortSize;
  private currentViewportSize$: Subscription;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private ifViewPortSizeService: IfViewportSizeService
  ) { }

  ngOnInit() {
    this.currentViewportSize$ = this.ifViewPortSizeService.currentViewportSize$.subscribe((size: ViewPortSize) => {
      if (size === this._ifViewPortSize) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }

  ngOnDestroy() {
    this.currentViewportSize$.unsubscribe();
  }

  @Input()
  set ifViewportSize(size: ViewPortSize) {
    this._ifViewPortSize = size;
  }
}
