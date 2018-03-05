import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionAjaxComponent } from './peticion-ajax.component';

describe('PeticionAjaxComponent', () => {
  let component: PeticionAjaxComponent;
  let fixture: ComponentFixture<PeticionAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
