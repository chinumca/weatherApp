import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherObjectComponent } from './weather-object.component';

describe('WeatherObjectComponent', () => {
  let component: WeatherObjectComponent;
  let fixture: ComponentFixture<WeatherObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
