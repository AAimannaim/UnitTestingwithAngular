import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  triggerStudentAdd() {
    throw new Error('Method not implemented.');
  }
  title = 'Testing';
  studentName: string | undefined;
}
