import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';

import { TestComponent } from './test/test.component';
export const appRoutes: Routes =[
    {path: 'register',component:RegisterComponent},
    {path: 'test', component:TestComponent},
    {path: '',redirectTo:'/register', pathMatch:'full'}
];