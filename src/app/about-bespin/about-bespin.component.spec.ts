import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBespinComponent } from './about-bespin.component';

describe('AboutBespinComponent', () => {
  let component: AboutBespinComponent;
  let fixture: ComponentFixture<AboutBespinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBespinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBespinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
