import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-course-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,CommonModule
  ],
  templateUrl: './add-course-dialog.component.html',
  styleUrl: './add-course-dialog.component.css'
})
export class AddCourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCourseDialogComponent>
  ) {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      courseImage: [null, Validators.required],
      courseDescription: ['', Validators.required]
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.courseForm.patchValue({
        courseImage: file
      });
    }
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
      // Handle form submission
      this.dialogRef.close(this.courseForm.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
