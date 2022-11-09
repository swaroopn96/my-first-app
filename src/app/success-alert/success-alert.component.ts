import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>Success alert works</p>',
  styles: [
    `
      p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid red;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
