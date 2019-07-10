import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';

import { FormSectionBaseComponent } from 'src/app/components/shared/form-section/form-section.component';
import { Employee } from 'src/app/interfaces/employee.interface';
import { HttpService } from 'src/app/services/http.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-form-section-coordinator',
  templateUrl: './form-section-coordinator.component.html',
  styleUrls: [
    './form-section-coordinator.component.scss',
    '../../../../shared/form-section/form-section.component.scss'
  ]
})
export class FormSectionCoordinatorComponent extends FormSectionBaseComponent implements OnInit {

  loggedInUser: Employee;

  users$: Observable<Employee[]>;

  constructor(private httpService: HttpService, private userInfoService: UserInfoService) {
    super();
  }

  ngOnInit() {
    this.loggedInUser = this.userInfoService.currentUser;
    this.users$ = this.httpService.pullJSON<Employee>('employees')
      .pipe(map((users: Employee[]) => users.filter(user => user.id !== this.loggedInUser.id)));
  }

  onCoordinatorChange() {
    const selectedUserId = this.form.controls.coordinator.get('id').value;

    this.users$.pipe(take(1)).subscribe((users: Employee[]) => {
      this.form.controls.coordinator.get('email').setValue(
        users.find(user => user.id === selectedUserId).email
      );
    });
  }
}
