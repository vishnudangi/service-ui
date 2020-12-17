import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseHelperComponent } from './response-helper.component';

describe('ResponseHelperComponent', () => {
  let component: ResponseHelperComponent;
  let fixture: ComponentFixture<ResponseHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
