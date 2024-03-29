import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // It says angular to provide LoggingService
  //providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  //It tells angular we need LoggingService
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    //Here we are listening to event
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    //console.log('A server status changed, new status: ' + accountStatus);

    //This is not the better way of accessing service
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);

    this.accountsService.addAccount(accountName, accountStatus);

    //this.loggingService.logStatusChange(accountStatus);
  }

  ngOnInit(): void {}
}
