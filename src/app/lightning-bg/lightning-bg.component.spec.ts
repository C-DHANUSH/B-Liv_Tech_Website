import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningBgComponent } from './lightning-bg.component';

describe('LightningBgComponent', () => {
  let component: LightningBgComponent;
  let fixture: ComponentFixture<LightningBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightningBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightningBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
