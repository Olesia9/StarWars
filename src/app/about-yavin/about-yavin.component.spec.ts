import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYavinComponent } from './about-yavin.component';

describe('AboutYavinComponent', () => {
  let component: AboutYavinComponent;
  let fixture: ComponentFixture<AboutYavinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutYavinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutYavinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
