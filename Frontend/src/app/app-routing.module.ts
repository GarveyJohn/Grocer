import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { EmployeeEditProfileComponent } from './employee-edit-profile/employee-edit-profile.component';
import { EmployeeHomePageComponent } from './employee-home-page/employee-home-page.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { EmployeeUnblockUsersComponent } from './employee-unblock-users/employee-unblock-users.component';
import { EmployeeUpdateStatusComponent } from './employee-update-status/employee-update-status.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserDeleteItemsComponent } from './user-delete-items/user-delete-items.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { UserSelectItemsComponent } from './user-select-items/user-select-items.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component'
import { UserUpdateItemsComponent } from './user-update-items/user-update-items.component';
import { UserViewCartComponent } from './user-view-cart/user-view-cart.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

const routes: Routes = [
  {path:"mainLogin",component:MainLoginComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"",redirectTo:"mainLogin",pathMatch:"prefix"},
  {path:"adminHomePage",component:HomePageComponent},
  {path:"addEmployee",component:AddEmployeeComponent},
  {path:"addProduct",component:AddProductsComponent},
  {path:"deleteEmployee",component:DeleteEmployeeComponent},
  {path:"deleteProduct",component:DeleteProductsComponent},
  {path:"generateReports",component:GenerateReportsComponent},
  {path:"updateProduct",component:UpdateProductsComponent},
  {path:"viewRequest",component:ViewRequestsComponent},
  {path:"employeeLogin",component:EmployeeLoginComponent},
  {path:"employeeHomePage",component:EmployeeHomePageComponent},
  {path:"employeeEditProfile",component:EmployeeEditProfileComponent},
  {path:"employeeSendRequest",component:EmployeeSendRequestComponent},
  {path:"employeeUnlockUser",component:EmployeeUnblockUsersComponent},
  {path:"employeeUpdateStatus",component:EmployeeUpdateStatusComponent},
  {path:"userLogin",component:UserLoginComponent},
  {path:"userHomePage",component:UserHomePageComponent},
  {path:"userCheckout",component:UserCheckoutComponent},
  {path:"userDeleteItems",component:UserDeleteItemsComponent},
  {path:"userEditProfile",component:UserEditProfileComponent},
  {path:"userFunds",component:UserFundsComponent},
  {path:"userOrderStatus",component:UserOrderStatusComponent},
  {path:"userSelectItems",component:UserSelectItemsComponent},
  {path:"userSignUp",component:UserSignUpComponent},
  {path:"userUpdateItems",component:UserUpdateItemsComponent},
  {path:"userViewCart",component:UserViewCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
