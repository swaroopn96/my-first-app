import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  // Used @Input decorator to access this element outside this component i.e in app component
  //srvElement is the alias name to bind property
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
