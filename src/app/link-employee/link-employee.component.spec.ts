import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEmployeeComponent } from './link-employee.component';

describe('LinkEmployeeComponent', () => {
  let component: LinkEmployeeComponent;
  let fixture: ComponentFixture<LinkEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
