import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlanetTwoComponent } from './about-planet-two.component';

describe('AboutPlanetTwoComponent', () => {
  let component: AboutPlanetTwoComponent;
  let fixture: ComponentFixture<AboutPlanetTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPlanetTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPlanetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
