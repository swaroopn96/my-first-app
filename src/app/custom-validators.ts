import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static forbiddenUsernames = ['Chris', 'Anna'];
  static forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (CustomValidators.forbiddenUsernames.indexOf(control.value) != -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  static forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
