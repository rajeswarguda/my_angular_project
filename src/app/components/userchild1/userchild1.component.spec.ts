import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userchild1Component } from './userchild1.component';

describe('Userchild1Component', () => {
  let component: Userchild1Component;
  let fixture: ComponentFixture<Userchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userchild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
