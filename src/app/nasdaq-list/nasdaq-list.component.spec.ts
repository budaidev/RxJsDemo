import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasdaqListComponent } from './nasdaq-list.component';

describe('NasdaqListComponent', () => {
  let component: NasdaqListComponent;
  let fixture: ComponentFixture<NasdaqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasdaqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasdaqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
