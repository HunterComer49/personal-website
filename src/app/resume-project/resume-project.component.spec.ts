import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeProjectComponent } from './resume-project.component';

describe('ResumeProjectComponent', () => {
  let component: ResumeProjectComponent;
  let fixture: ComponentFixture<ResumeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
