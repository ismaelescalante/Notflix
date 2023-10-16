import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie.interface';
import { Observable, Subject, map } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsComponent } from 'src/app/shared/details/details.component';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
  providers: [DialogService],
})
export class TopRatedComponent implements OnInit {
  private _moviesService = inject(MoviesService);
  private _dialogService = inject(DialogService);

  public bestMovies$!: Observable<Movie[]>;

  ngOnInit(): void {
    this.bestMovies$ = this._moviesService
      .getBestMovies()
      .pipe(map((movies) => movies.results));
  }

  openDialog(id: number) {
    this._dialogService.open(DetailsComponent, { data: id });
  }
}
