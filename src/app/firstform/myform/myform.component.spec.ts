import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformComponent } from './myform.component';

describe('MyformComponent', () => {
  let component: MyformComponent;
  let fixture: ComponentFixture<MyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
