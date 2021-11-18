import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuyTokenComponent } from './buy-token/buy-token.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { KycApplicationComponent } from './kyc-application/kyc-application.component';
import { MainWindowComponent } from './main-window.component';
import { MyTokenComponent } from './my-token/my-token.component';
import { NewsComponent } from './news/news.component';
import { OdiTokensComponent } from './odi-tokens/odi-tokens.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ActivateguardGuard } from './activateguard.guard';
import { ActivateGuardAdminGuard } from './activate-guard-admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminApplicationApiComponent } from './admin-application-api/admin-application-api.component';
import { AdminICOComponent } from './admin-ico/admin-ico.component';
import { AdminICOSettingComponent } from './admin-icosetting/admin-icosetting.component';
import { AdminKYCComponent } from './admin-kyc/admin-kyc.component';
import { AdminMailingSettingComponent } from './admin-mailing-setting/admin-mailing-setting.component';
import { AdminManageLanguagesComponent } from './admin-manage-languages/admin-manage-languages.component';
import { AdminManagePagesComponent } from './admin-manage-pages/admin-manage-pages.component';
import { AdminPaymentMethodComponent } from './admin-payment-method/admin-payment-method.component';
import { AdminReferalSettingComponent } from './admin-referal-setting/admin-referal-setting.component';
import { AdminTransactionsComponent } from './admin-transactions/admin-transactions.component';
import { AdminUsersListComponent } from './admin-users-list/admin-users-list.component';
import { AdminWebsiteSettingComponent } from './admin-website-setting/admin-website-setting.component';

const routes: Routes = [
{
  path:'about',
  component:AboutComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'odi-tokens',
  component:OdiTokensComponent
},
{
  path:'features',
  component:FeaturesComponent
},
{
  path:'calculator',
  component:CalculatorComponent
},
{
  path:'contact-us',
  component:ContactUsComponent
},
{
  path:'news',
  component:NewsComponent
},
{
  path:'dashboard',
  component:DashboardComponent,
  canActivate:[ActivateguardGuard]
},
{
  path:'buy-token',
  component:BuyTokenComponent,
  canActivate:[ActivateguardGuard]
},
{
  path:'transactions',
  component:TransactionsComponent,
  canActivate:[ActivateguardGuard]
},
{
  path:'profile',
  component:ProfileComponent,
  canActivate:[ActivateguardGuard]
},
{
  path:'my-token',
  component:MyTokenComponent,
  canActivate:[ActivateguardGuard]
},
{
  path:'kyc-application',
  component:KycApplicationComponent,
  canActivate:[ActivateguardGuard]
},

{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'admin/dashboard',
  component:AdminDashboardComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:'admin/setting/application-api',
  component:AdminApplicationApiComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:'admin/ico',
  component:AdminICOComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:'admin/setting/ico',
  component:AdminICOSettingComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:'admin/kyc',
  component:AdminKYCComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:"admin/setting/mailing",
  component:AdminMailingSettingComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:"admin/setting/manage-languages",
  component:AdminManageLanguagesComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:"admin/setting/manage-pages",
  component:AdminManagePagesComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:"admin/setting/payment-method",
  component:AdminPaymentMethodComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{path:"admin/setting/referal",
component:AdminReferalSettingComponent,
canActivate:[ActivateGuardAdminGuard ]
},
{
  path:'admin/transactions',
  component:AdminTransactionsComponent,
  canActivate:[ActivateGuardAdminGuard ]

},
{
  path:"admin/users-list",
  component:AdminUsersListComponent,
  canActivate:[ActivateGuardAdminGuard ]
},
{
  path:"admin/setting/website",
  component:AdminWebsiteSettingComponent,
  canActivate:[ActivateGuardAdminGuard ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainWindowRoutingModule { }
