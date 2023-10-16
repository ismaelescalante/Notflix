import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable, Subject, map, switchMap } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsComponent } from 'src/app/shared/details/details.component';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
  providers: [DialogService],
})
export class GenreComponent {
  private _activatedRoute = inject(ActivatedRoute);
  private _moviesService = inject(MoviesService);
  private _dialogService = inject(DialogService);

  public movies$: Observable<Movie[]>;

  constructor() {
    this.movies$ = this._activatedRoute.params.pipe(
      switchMap(({ id }) =>
        this._moviesService.getMoviesByGenre(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`
        )
      ),
      map((movies) => movies.results)
    );
  }

  openDialog(id: number) {
    this._dialogService.open(DetailsComponent, { data: id });
  }
}
