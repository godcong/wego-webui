import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProgramComponent } from './mini-program.component';

describe('MiniProgramComponent', () => {
  let component: MiniProgramComponent;
  let fixture: ComponentFixture<MiniProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
