import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subject, forkJoin, takeUntil } from 'rxjs';

import { DetailsComponent } from 'src/app/shared/details/details.component';
import { DialogService } from 'primeng/dynamicdialog';
import { FavoritesService } from './favorites.service';
import { MoviesService } from '../../services/movies.service';
import { SingleMovie } from '../../interfaces/single-movie.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [DialogService],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  private _moviesService = inject(MoviesService);
  private _dialogService = inject(DialogService);
  private _favoritesService = inject(FavoritesService);

  public favorites$!: Observable<SingleMovie[]>;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.getFavorites();

    this._favoritesService
      .favoritesChanged$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getFavorites();
      });
  } 

  getFavorites() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites !== null) {
      const favoritesArray = JSON.parse(savedFavorites);

      if (Array.isArray(favoritesArray) && favoritesArray.length > 0) {
        const requests: Observable<SingleMovie>[] = favoritesArray.map(
          (movie) => this._moviesService.getSingleMovie(movie)
        );
        this.favorites$ = forkJoin(requests);
      }
    }
  }

  openDialog(id: number) {
    this._dialogService.open(DetailsComponent, { data: id });
  }

  trackByFn(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
