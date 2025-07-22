import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicesprovided } from './servicesprovided';

describe('Servicesprovided', () => {
  let component: Servicesprovided;
  let fixture: ComponentFixture<Servicesprovided>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicesprovided]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicesprovided);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
