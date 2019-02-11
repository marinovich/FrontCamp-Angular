import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNewsModeComponent } from './select-news-mode.component';

describe('SelectNewsModeComponent', () => {
  let component: SelectNewsModeComponent;
  let fixture: ComponentFixture<SelectNewsModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNewsModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNewsModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
