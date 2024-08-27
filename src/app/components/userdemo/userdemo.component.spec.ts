import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdemoComponent } from './userdemo.component';

describe('UserdemoComponent', () => {
  let component: UserdemoComponent;
  let fixture: ComponentFixture<UserdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
