import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxArchiveComponent } from './box-archive.component';

describe('BoxArchiveComponent', () => {
  let component: BoxArchiveComponent;
  let fixture: ComponentFixture<BoxArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
