import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserdemoComponent } from './components/userdemo/userdemo.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { teacherGuardGuard } from './guards/teacher-guard.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareersComponent,
        children:[
            {path: 'contract', component: ContractJobsComponent},
            {path: 'permanent', component: PermanentJobsComponent}
        ]
     },
    { path: 'employees', component: EmployeeComponent},
    { path: 'products', component: ProductsComponent },
    { path: 'productdetails/:id', component: ProductDetailsComponent },
    {path: 'users', component: UsersComponent, canActivate: [teacherGuardGuard]},
    {path: 'userdetails', component: UserDetailComponent},
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent }
];
