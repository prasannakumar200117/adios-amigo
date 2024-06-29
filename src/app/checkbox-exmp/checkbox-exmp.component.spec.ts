import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxExmpComponent } from './checkbox-exmp.component';

describe('CheckboxExmpComponent', () => {
  let component: CheckboxExmpComponent;
  let fixture: ComponentFixture<CheckboxExmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxExmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxExmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
