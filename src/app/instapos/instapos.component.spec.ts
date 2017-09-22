import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaposComponent } from './instapos.component';

describe('InstaposComponent', () => {
  let component: InstaposComponent;
  let fixture: ComponentFixture<InstaposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
