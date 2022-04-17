import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPlaygroundComponent } from './subject-playground.component';

describe('SubjectPlaygroundComponent', () => {
  let component: SubjectPlaygroundComponent;
  let fixture: ComponentFixture<SubjectPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
