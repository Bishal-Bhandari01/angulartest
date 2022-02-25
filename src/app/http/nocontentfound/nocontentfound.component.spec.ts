import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocontentfoundComponent } from './nocontentfound.component';

describe('NocontentfoundComponent', () => {
  let component: NocontentfoundComponent;
  let fixture: ComponentFixture<NocontentfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocontentfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NocontentfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
