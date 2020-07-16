import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerMenuItemComponent } from './drawer-menu-item.component';

describe('DrawerMenuItemComponent', () => {
  let component: DrawerMenuItemComponent;
  let fixture: ComponentFixture<DrawerMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
