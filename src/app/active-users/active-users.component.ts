import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  //@Input() users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();
  users: string[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.userService.setToInactive(id);
  }
}
