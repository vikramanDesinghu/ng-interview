import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBoardsComponent } from './mat-boards.component';

describe('MatBoardsComponent', () => {
  let component: MatBoardsComponent;
  let fixture: ComponentFixture<MatBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
