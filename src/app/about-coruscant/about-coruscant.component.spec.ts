import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoruscantComponent } from './about-coruscant.component';

describe('AboutCoruscantComponent', () => {
  let component: AboutCoruscantComponent;
  let fixture: ComponentFixture<AboutCoruscantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCoruscantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCoruscantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
