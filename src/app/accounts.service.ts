import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

//Added injectable to inject the other service
//Also we add this where we want to inject service
//@Injectable()
@Injectable({ providedIn: 'root' })
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.logginService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
  constructor(private logginService: LoggingService) {}
}
