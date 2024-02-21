import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatingFormComponent } from './validating-form.component';

describe('ValidatingFormComponent', () => {
  let component: ValidatingFormComponent;
  let fixture: ComponentFixture<ValidatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
