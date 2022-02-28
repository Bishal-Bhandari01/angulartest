import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { ReactiveformComponent } from './form/reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { NocontentfoundComponent } from './http/nocontentfound/nocontentfound.component';
import { TableComponent } from './table/table.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserComponent } from './user/user.component';
import { UsereditComponent } from './useredit/useredit.component';
// import { UserserviceService } from './userservice.service';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: '',
        component: HomeComponent
      },
      // {
      //   path: 'another-page',
      //   component: HomeComponent
      // },
      // {
      //   path: 'home/:id',
      //   component: HomeComponent
      // },
      {
        path:'detailview',
        component: DetailviewComponent
      },
      {
        path: 'detailview/:id/class/:id',
        component: DetailviewComponent
      },
      {
        path: 'reactive-form',
        component: ReactiveformComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'template-form',
        component: TemplateFormComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path:'createuser',
        component: CreateuserComponent
      },
      {
        path:'edituser/:id',
        component: UsereditComponent
      },

    ]

  },
  {
    path:'**',component:NocontentfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
