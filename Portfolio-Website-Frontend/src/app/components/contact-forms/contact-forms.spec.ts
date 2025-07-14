import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactForms } from './contact-forms';

describe('ContactForms', () => {
  let component: ContactForms;
  let fixture: ComponentFixture<ContactForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
