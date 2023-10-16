import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie.interface';
import { Observable, Subject, map } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsComponent } from 'src/app/shared/details/details.component';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
  providers: [DialogService],
})
export class PopularComponent implements OnInit {
  private _moviesService = inject(MoviesService);
  private _dialogService = inject(DialogService);

  public movies$!: Observable<Movie[]>;

  ngOnInit(): void {
    this.movies$ = this._moviesService
      .getTrendingMovies()
      .pipe(map((movies) => movies.results));
  }

  openDialog(id: number) {
    this._dialogService.open(DetailsComponent, { data: id });
  }
}
