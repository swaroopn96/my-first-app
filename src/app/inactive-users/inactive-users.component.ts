import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  //@Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  users: string[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.userService.setToActive(id);
  }
}
