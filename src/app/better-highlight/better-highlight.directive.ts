import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  //this binds the property style to color assigned
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // ngOnInit() {
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     'background-color',
  //     'blue'
  //   );
  // }

  //HostListener listens to event specified inside i.e mouseenter /leave etc
  //here mouseenter is the event and mouseover is the method it triggers
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );

    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = 'transparent';
  }
}
