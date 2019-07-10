import { Injectable } from '@angular/core';

import { Employee } from '../interfaces/employee.interface';

@Injectable()
export class UserInfoService {

  get currentUser(): Employee {
    return {
      id: 3,
      name: 'Walter',
      lastname: 'Nelson',
      email: 'walter.nelson@hussa.rs'
    };
  }

}
