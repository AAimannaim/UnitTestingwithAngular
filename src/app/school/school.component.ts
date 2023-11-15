import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
  schoolName: string = '';

  addSchool() {
    console.log('School Added:', this.schoolName);
    // You can perform additional logic here, e.g., send data to a service.
  }
}
