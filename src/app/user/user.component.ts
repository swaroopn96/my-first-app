import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserServices } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponents implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private userServices: UserServices
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }
  onActivate() {
    this.userServices.activatedEmitter.next(true);
  }
}
