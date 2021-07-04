import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/Product';
import { tap } from 'rxjs/operators';

const URL = 'https://.......?????'//ver donde guardo los datos!!!

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  /**
   * Consume la API y devuelve un observable de la respuesta
   */

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
              .pipe(
                tap((products: Product[]) => products.forEach(product => product.quantity = 0))
              );
  }
}
