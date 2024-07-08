import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTodoComponent } from './mini-todo.component';

describe('MiniTodoComponent', () => {
  let component: MiniTodoComponent;
  let fixture: ComponentFixture<MiniTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
