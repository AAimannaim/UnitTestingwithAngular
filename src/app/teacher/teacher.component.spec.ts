import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher.component';

describe('TeacherComponent', () => {
  let component: TeacherComponent;
  let fixture: ComponentFixture<TeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(TeacherComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add teacher', () => {
    const teacherName = 'Jane Smith';
    component.teacherName = teacherName;
    spyOn(console, 'log'); // Spy on console.log to check if it's called
    component.addTeacher();
    expect(console.log).toHaveBeenCalledWith('Teacher Added:', teacherName);
  });
});
