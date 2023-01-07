import { Content } from '@angular/compiler/src/render3/r3_ast';
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation none will make styling global instead of specific to component
  //If its changed to Emulated then its specific to component not global
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Used @Input decorator to access this element outside this component i.e in app component
  //srvElement is the alias name to bind property
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {
    console.log('Constructor called!');
  }
  // Only called when input element changes. If value referencing to same object chage is not detected and for primitive types its shown
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit Called!');
    console.log('TextContent:' + this.header.nativeElement.textContent);
    console.log(
      'TextContent of paragraph:' + this.paragraph.nativeElement.textContent
    );
  }

  //Since we are in development mode its called twice since angular has extra detection cycle
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log(
      'TextContent of paragraph:' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('TextContent:' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewInit called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
