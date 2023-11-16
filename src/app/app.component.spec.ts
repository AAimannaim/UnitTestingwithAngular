import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SchoolComponent } from './school/school.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StudentComponent,
        TeacherComponent,
        SchoolComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the student, teacher, and school components', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-student')).toBeTruthy();
    expect(compiled.querySelector('app-teacher')).toBeTruthy();
    expect(compiled.querySelector('app-school')).toBeTruthy();
  });
  it('should throw an error when triggerStudentAdd is called', () => {
    expect(() => component.triggerStudentAdd()).toThrowError('Method not implemented.');
  })
});
