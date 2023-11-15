import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SchoolComponent } from './school.component';

describe('SchoolComponent', () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(SchoolComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add school', () => {
    const schoolName = 'Angular School';
    component.schoolName = schoolName;
    spyOn(console, 'log'); // Spy on console.log to check if it's called
    component.addSchool();
    expect(console.log).toHaveBeenCalledWith('School Added:', schoolName);
  });
});
