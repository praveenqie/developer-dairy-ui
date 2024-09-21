import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { ControlCentralComponent } from './control-central/control-central.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NavbarComponent, // Layout component
    children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'chat', component: ChatBoxComponent },
      { path: 'admin', component: ControlCentralComponent, 
        children:[
          {path:'managercourses',component:ManageCourseComponent}
        ]
      },
      { path: '', redirectTo: '/courses', pathMatch: 'full' }
    ]
  }
];
