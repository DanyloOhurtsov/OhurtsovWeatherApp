import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowWeatherComponent } from './now-weather.component';

describe('NowWeatherComponent', () => {
  let component: NowWeatherComponent;
  let fixture: ComponentFixture<NowWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowWeatherComponent]
    });
    fixture = TestBed.createComponent(NowWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
