import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  teacherName: string = '';

  addTeacher() {
    console.log('Teacher Added:', this.teacherName);
    // You can perform additional logic here, e.g., send data to a service.
  }
}
