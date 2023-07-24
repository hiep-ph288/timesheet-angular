import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth-service/service-auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/modules/projects/services/notification.service';
import { DialogAlertComponent } from 'src/app/shared/components/dialog-modal/dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faLock = faLock;

  hide: boolean = true;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private notification: NotificationService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userNameOrEmailAddress: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.authService.userLogin(this.loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.result.accessToken);
        this.router.navigate(['/app/main/']);
      },
      (dataError) => {
        this.notification.showError('dataError.error.error.details');
        this.dialog.open(DialogAlertComponent, {
          data: {
            title: 'Login failed!',
            icon: 'cancel',
            message: 'dataError.error.error.details',
          },
        });
      }
    );
  }
}
