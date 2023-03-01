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
import { filter, interval, map, Observable, Subscription } from 'rxjs';

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
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });
    // list of operators can be found here https://www.learnrxjs.io/learn-rxjs/operators
    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 2;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        //It says that when the next method in observer is called log the data
        error: (error) => {
          console.log(error);
          alert(error.message);
        },
        complete: () => {
          console.log('Completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
