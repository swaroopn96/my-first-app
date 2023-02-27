// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
//   preserveWhitespaces: true,
// })
// export class HomeComponent implements OnInit {
//   constructor(private router: Router, private authService: AuthService) {}

//   ngOnInit() {}

//   OnLoadServer(id: number) {
//     //some calculation
//     this.router.navigate(['/servers', id, 'edit'], {
//       queryParams: { allowEdit: '1' },
//       fragment: 'loading',
//     });
//   }

//   onLogin() {
//     this.authService.login();
//   }

//   onLogout() {
//     this.authService.logout();
//   }
// }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    //Fires even every 1 sec
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });
    this.firstObsSubscription = customIntervalObservable.subscribe((data) => {
      //It says that when the next method in observer is called log the data
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
