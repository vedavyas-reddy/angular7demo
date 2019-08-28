//balance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { BalanceComponent } from './balance.component';
import { Page404balanceComponent } from './page404balance/page404balance.component';
import { AuthService } from 'src/app/auth.service';
import { AuthGuard } from 'src/app/auth-guard.service';


@NgModule({
  declarations: [
    BalanceComponent,
    CasualComponent,
    EarnedComponent,
    Page404balanceComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ],
  providers:[AuthService,AuthGuard]
})
export class BalanceModule { }
