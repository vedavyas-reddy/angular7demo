//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
// import { ApplyComponent } from './leaves/apply/apply.component';
// import { BalanceComponent } from './leaves/balance/balance.component';
// import { Page404leavesComponent } from './leaves/page404leaves/page404leaves.component';
// import { CasualComponent } from './leaves/balance/casual/casual.component';
// import { EarnedComponent } from './leaves/balance/earned/earned.component';
// import { Page404balanceComponent } from './leaves/balance/page404balance/page404balance.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    DashboardComponent,
    Page404Component,
    ProfileComponent,
    // ApplyComponent,
    // BalanceComponent,
    // Page404leavesComponent,
    // CasualComponent,
    // EarnedComponent,
    // Page404balanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
