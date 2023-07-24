import { AuthInterceptor } from './core/interceptors/auth.interceptor.spec';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { ProjectComponent } from './modules/layout/project/project.component';
import { SideBarComponent } from './modules/layout/side-bar/side-bar.component';
import { ShareModule } from './shared/share.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectModule } from './modules/projects/project.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './modules/projects/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    SideBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ShareModule,
    FontAwesomeModule,
    ProjectModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
