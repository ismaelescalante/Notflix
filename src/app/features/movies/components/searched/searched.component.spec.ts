import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedComponent } from './searched.component';

describe('SearchedComponent', () => {
  let component: SearchedComponent;
  let fixture: ComponentFixture<SearchedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedComponent]
    });
    fixture = TestBed.createComponent(SearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
