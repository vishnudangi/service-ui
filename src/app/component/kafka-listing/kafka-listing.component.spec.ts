import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaListingComponent } from './kafka-listing.component';

describe('KafkaListingComponent', () => {
  let component: KafkaListingComponent;
  let fixture: ComponentFixture<KafkaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafkaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafkaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
