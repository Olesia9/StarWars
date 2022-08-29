import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHothComponent } from './about-hoth.component';

describe('AboutHothComponent', () => {
  let component: AboutHothComponent;
  let fixture: ComponentFixture<AboutHothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
