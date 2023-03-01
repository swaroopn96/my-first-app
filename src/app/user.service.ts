import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserServices {
  //activatedEmitter = new EventEmitter<boolean>();
  //using subject
  activatedEmitter = new Subject<boolean>();
}
