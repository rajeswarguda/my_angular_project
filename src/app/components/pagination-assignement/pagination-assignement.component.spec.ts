import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAssignementComponent } from './pagination-assignement.component';

describe('PaginationAssignementComponent', () => {
  let component: PaginationAssignementComponent;
  let fixture: ComponentFixture<PaginationAssignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationAssignementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationAssignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
