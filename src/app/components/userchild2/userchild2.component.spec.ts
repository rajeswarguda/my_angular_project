import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userchild2Component } from './userchild2.component';

describe('Userchild2Component', () => {
  let component: Userchild2Component;
  let fixture: ComponentFixture<Userchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userchild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
