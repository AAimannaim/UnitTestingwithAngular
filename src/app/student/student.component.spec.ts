import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add student', () => {
    const studentName = 'John Doe';
    component.studentName = studentName;
    spyOn(console, 'log'); // Spy on console.log to check if it's called
    component.addStudent();
    expect(console.log).toHaveBeenCalledWith('Student Added:', studentName);
  });
});
