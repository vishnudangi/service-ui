import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupListingComponent } from './mockup-listing.component';

describe('MockupListingComponent', () => {
  let component: MockupListingComponent;
  let fixture: ComponentFixture<MockupListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockupListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
