import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaDetailComponent } from './cha-detail.component';

describe('ChaDetailComponent', () => {
  let component: ChaDetailComponent;
  let fixture: ComponentFixture<ChaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
