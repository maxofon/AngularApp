import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../../../shared/services/alert.service';
import {User} from '../../../shared/interfaces/User';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'users-dashboard-page',
  templateUrl: './users-dashboard-page.component.html',
  styleUrls: ['./users-dashboard-page.component.scss']
})
export class UsersDashboardPageComponent implements OnInit {

  users: User[] = []
  pSub: Subscription
  dSub: Subscription

  constructor(
      private alert: AlertService,
      private userService: UserService
  ) { }

  ngOnInit(): void {
    this.pSub = this.userService.getAll().subscribe(users => {
      this.users = users
    })

  }

  ngOnDestroy(): void {
    this.pSub.unsubscribe();
    if (this.dSub) {
      this.dSub.unsubscribe();
    }

  }

  remove(user: User): void {
    this.dSub = this.userService.remove(user.id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
      this.alert.danger(`Пользователь ${user.email} был удален`);
    },(error) => {
      this.alert.danger(`Нельзя удалить пользователя ${user.email}`)
    })
  }

}
