import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintourComponent } from './admintour.component';

describe('AdmintourComponent', () => {
  let component: AdmintourComponent;
  let fixture: ComponentFixture<AdmintourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
