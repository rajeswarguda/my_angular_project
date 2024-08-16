import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserparentComponent } from './userparent.component';

describe('UserparentComponent', () => {
  let component: UserparentComponent;
  let fixture: ComponentFixture<UserparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
