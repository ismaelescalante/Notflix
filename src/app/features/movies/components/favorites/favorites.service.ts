import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  public favoritesChanged = new Subject<void>();
  public favorites: number[] = [];

  updateFavorites(favorites: number[]) {
    this.favorites = favorites;
    this.favoritesChanged.next();
  }

  favoritesChanged$() {
    return this.favoritesChanged.asObservable();
  }
}
