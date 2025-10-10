import { inject, Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private cartService = inject(CartService);

  init() {
    const cardId = localStorage.getItem('cart_id');
    const cart$ = cardId ? this.cartService.getCard(cardId) : of(null);

    return cart$;
  }
}
