import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKaminoComponent } from './about-kamino.component';

describe('AboutKaminoComponent', () => {
  let component: AboutKaminoComponent;
  let fixture: ComponentFixture<AboutKaminoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutKaminoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutKaminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
