import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAVORATESComponent } from './favorates.component';

describe('FAVORATESComponent', () => {
  let component: FAVORATESComponent;
  let fixture: ComponentFixture<FAVORATESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAVORATESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAVORATESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
