import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDagobahComponent } from './about-dagobah.component';

describe('AboutDagobahComponent', () => {
  let component: AboutDagobahComponent;
  let fixture: ComponentFixture<AboutDagobahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDagobahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDagobahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
