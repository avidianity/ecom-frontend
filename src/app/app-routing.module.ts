import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent as CategoryIndexComponent } from './categories/index/index.component';
import { FormComponent as CategoryFormComponent } from './categories/form/form.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: HomeComponent,
        children: [
            { path: 'categories', component: CategoryIndexComponent },
            { path: 'categories/add', component: CategoryFormComponent },
            {
                path: 'categories/edit',
                component: CategoryFormComponent,
            },
        ],
    },
    {
        path: '**',
        component: FourZeroFourComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
