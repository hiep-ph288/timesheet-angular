import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ButtonComponent } from './components/button/button.component';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DialogAlertComponent } from './components/dialog-modal/dialog-alert/dialog-alert.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ProcessComponent } from './components/process/process.component';
import { PercentComponent } from './components/percent/percent.component';
@NgModule({
  declarations: [
    ButtonComponent,
    LoadingComponent,
    DialogModalComponent,
    DialogAlertComponent,
    DatePickerComponent,
    ProcessComponent,
    PercentComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonToggleModule,
    RouterModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  exports: [
    DialogModalComponent,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonToggleModule,
    RouterModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    ButtonComponent,
    DialogAlertComponent,
    LoadingComponent,
    DatePickerComponent,
    ProcessComponent,
    PercentComponent,
  ],
})
export class ShareModule {}
