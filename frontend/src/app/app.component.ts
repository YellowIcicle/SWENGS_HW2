import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';
import {LogoutComponent} from './logout/logout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  title = 'frontend';

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
