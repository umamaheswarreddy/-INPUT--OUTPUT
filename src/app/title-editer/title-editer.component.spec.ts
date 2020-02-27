import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleEditerComponent } from './title-editer.component';

describe('TitleEditerComponent', () => {
  let component: TitleEditerComponent;
  let fixture: ComponentFixture<TitleEditerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleEditerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
