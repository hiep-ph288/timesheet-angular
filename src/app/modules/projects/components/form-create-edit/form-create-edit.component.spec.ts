import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateEditComponent } from './form-create-edit.component';

describe('FormCreateEditComponent', () => {
  let component: FormCreateEditComponent;
  let fixture: ComponentFixture<FormCreateEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateEditComponent]
    });
    fixture = TestBed.createComponent(FormCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
