import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{TestComponent} from './test/test.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path: 'test', component:TestComponent},
  {path: '', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
