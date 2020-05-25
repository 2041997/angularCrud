import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent  } from "./app.component";
import { CrudComponent } from "../app/crud/crud.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { Service1Component } from './service1/service1.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',
children:[
  {path:'service1',component:Service1Component}

]},
  {path:'contact',component:ContactComponent},
  {path:'crud',component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
