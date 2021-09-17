import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { EmployeeHomePageComponent } from './employee-home-page/employee-home-page.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { EmployeeUpdateStatusComponent } from './employee-update-status/employee-update-status.component';
import { EmployeeUnblockUsersComponent } from './employee-unblock-users/employee-unblock-users.component';
import { EmployeeEditProfileComponent } from './employee-edit-profile/employee-edit-profile.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserSelectItemsComponent } from './user-select-items/user-select-items.component';
import { UserDeleteItemsComponent } from './user-delete-items/user-delete-items.component';
import { UserUpdateItemsComponent } from './user-update-items/user-update-items.component';
import { UserViewCartComponent } from './user-view-cart/user-view-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { UserRaiseTicketComponent } from './user-raise-ticket/user-raise-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomePageComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent,
    ViewRequestsComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportsComponent,
    UserLoginComponent,
    EmployeeLoginComponent,
    UserHomePageComponent,
    EmployeeHomePageComponent,
    EmployeeSendRequestComponent,
    EmployeeUpdateStatusComponent,
    EmployeeUnblockUsersComponent,
    EmployeeEditProfileComponent,
    UserSignUpComponent,
    UserSelectItemsComponent,
    UserDeleteItemsComponent,
    UserUpdateItemsComponent,
    UserViewCartComponent,
    UserCheckoutComponent,
    UserOrderStatusComponent,
    UserEditProfileComponent,
    UserFundsComponent,
    MainLoginComponent,
    UserRaiseTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
