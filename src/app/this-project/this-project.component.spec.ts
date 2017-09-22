import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisProjectComponent } from './this-project.component';

describe('ThisProjectComponent', () => {
  let component: ThisProjectComponent;
  let fixture: ComponentFixture<ThisProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
