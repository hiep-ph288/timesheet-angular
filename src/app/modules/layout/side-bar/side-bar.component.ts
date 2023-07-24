import { AuthService } from './../../auth/auth-service/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  isShowButtonLogout: boolean = false;
  isClickButtonLogout: boolean = true;

  category = [
    {
      icon: 'home',
      content: 'Home',
      href: '/app/main/home',
    },
    {
      icon: 'group_work',
      content: 'Admin',
      href: '#',
    },
    {
      icon: 'assessment',
      content: 'Projects',
      href: '/app/main/projects',
    },
    {
      icon: 'alarm',
      content: 'My timesheets',
      href: '#',
    },
    {
      icon: 'date_range',
      content: 'Timesheets',
      href: '#',
    },
    {
      icon: 'supervised_user_circle',
      content: 'Timesheets monitoring',
      href: '#',
    },
    {
      icon: 'event_busy',
      content: 'My leave days / onsite',
      href: '#',
    },
    {
      icon: 'rule',
      content: 'Manage team working calendar',
      href: '#',
    },
    {
      icon: 'groups',
      content: 'Team working calendar',
      href: '#',
    },
    {
      icon: 'date_range',
      content: 'Setting off days',
      href: '#',
    },
    {
      icon: 'date_range',
      content: 'Overtime settings',
      href: '#',
    },
    {
      icon: 'date_range',
      content: 'My working time',
      href: '#',
    },
    {
      icon: 'access_time',
      content: 'Manage working times',
      href: '#',
    },
    {
      icon: 'description',
      content: 'Report',
      href: '#',
    },
    {
      icon: 'rate_review',
      content: 'Review Interns',
      href: '#',
    },
  ];
  constructor(private authService: AuthService) {}
  ngOnInit(): void {}

  handleToggleLogout() {
    this.isShowButtonLogout = !this.isShowButtonLogout;
    this.isClickButtonLogout = true;
  }
  handleLogout() {
    this.authService.onLogout();
  }
}
