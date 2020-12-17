import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMockupComponent } from './create-mockup.component';

describe('CreateMockupComponent', () => {
  let component: CreateMockupComponent;
  let fixture: ComponentFixture<CreateMockupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMockupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
