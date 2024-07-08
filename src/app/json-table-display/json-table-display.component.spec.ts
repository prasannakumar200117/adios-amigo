import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTableDisplayComponent } from './json-table-display.component';

describe('JsonTableDisplayComponent', () => {
  let component: JsonTableDisplayComponent;
  let fixture: ComponentFixture<JsonTableDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonTableDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonTableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
