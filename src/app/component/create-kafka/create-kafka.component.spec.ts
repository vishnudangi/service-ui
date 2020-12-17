import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKafkaComponent } from './create-kafka.component';

describe('CreateKafkaComponent', () => {
  let component: CreateKafkaComponent;
  let fixture: ComponentFixture<CreateKafkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKafkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKafkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
