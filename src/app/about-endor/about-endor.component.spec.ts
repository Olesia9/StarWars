import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEndorComponent } from './about-endor.component';

describe('AboutEndorComponent', () => {
  let component: AboutEndorComponent;
  let fixture: ComponentFixture<AboutEndorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEndorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEndorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
