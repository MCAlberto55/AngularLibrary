import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPresentationComponent } from './products-presentation.component';

describe('ProductsPresentationComponent', () => {
  let component: ProductsPresentationComponent;
  let fixture: ComponentFixture<ProductsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
