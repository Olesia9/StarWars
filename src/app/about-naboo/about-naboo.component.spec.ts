import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNabooComponent } from './about-naboo.component';

describe('AboutNabooComponent', () => {
  let component: AboutNabooComponent;
  let fixture: ComponentFixture<AboutNabooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNabooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNabooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
