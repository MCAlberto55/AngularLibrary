import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCotrollerComponent } from './cart-cotroller.component';

describe('CartCotrollerComponent', () => {
  let component: CartCotrollerComponent;
  let fixture: ComponentFixture<CartCotrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCotrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCotrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
