import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIupComponent } from './sign-iup.component';

describe('SignIupComponent', () => {
  let component: SignIupComponent;
  let fixture: ComponentFixture<SignIupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignIupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignIupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
