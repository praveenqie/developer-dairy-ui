import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseDialogComponent } from '../add-course-dialog/add-course-dialog.component';

@Component({
  selector: 'app-manage-course',
  standalone: true,
  imports: [],
  templateUrl: './manage-course.component.html',
  styleUrl: './manage-course.component.css'
})
export class ManageCourseComponent{
  router: any;
course: any;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCourseDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result if needed
    });
  }
    editCourse() {
    this.router.navigate(['/edit-course']);
  }
}
