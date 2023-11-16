import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentName: string = '';

  addStudent() {
    console.log('Student Added:', this.studentName);
    // You can perform additional logic here, e.g., send data to a service.
  }
  triggerStudentAdd() {
    throw new Error('Method not implemented.');
  }
}
