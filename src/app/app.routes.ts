import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserdemoComponent } from './components/userdemo/userdemo.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'employees', component: EmployeeComponent},
    { path: 'products', component: ProductsComponent },
    { path: 'productdetails/:id', component: ProductDetailsComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent }
];
