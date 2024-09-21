import { Component } from '@angular/core';
import { ControlCentralSidebarComponent } from "../control-central-sidebar/control-central-sidebar.component";
import { CommonModule } from '@angular/common'; 
import { RouterModule, RouterOutlet } from '@angular/router';
import { ManageCourseComponent } from "../manage-course/manage-course.component";

@Component({
  selector: 'app-control-central',
  standalone: true,
  imports: [ControlCentralSidebarComponent, CommonModule, RouterOutlet, RouterModule, ManageCourseComponent],
  templateUrl: './control-central.component.html',
  styleUrl: './control-central.component.css'
})
export class ControlCentralComponent {
  showSidebar = true; 
}
