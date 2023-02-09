import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  // Here whenever the condition changes it executes the method
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // It creates view in this container
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private tempRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
