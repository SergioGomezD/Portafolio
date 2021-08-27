import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudebrrComponent } from './menudebrr.component';

describe('MenudebrrComponent', () => {
  let component: MenudebrrComponent;
  let fixture: ComponentFixture<MenudebrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudebrrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudebrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
