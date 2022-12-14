import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TealComponent } from './teal.component';

describe('TealComponent', () => {
  let component: TealComponent;
  let fixture: ComponentFixture<TealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
