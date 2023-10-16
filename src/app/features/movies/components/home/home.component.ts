import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie.interface';
import {
  Observable,
  Subject,
  debounceTime,
  map,
  switchMap,
} from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsComponent } from 'src/app/shared/details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DialogService],
})
export class HomeComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();
  private _moviesService = inject(MoviesService);
  private _dialogService = inject(DialogService);

  public searchedMovie$!: Observable<Movie[]>;
  public url: string = 'https://api.themoviedb.org/3/search/movie';

  ngOnInit(): void {
    this.setupSearch();
  }

  setupSearch() {
    this.searchedMovie$ = this.debouncer.pipe(
      debounceTime(300),
      switchMap((query: string) => {
        return this._moviesService.searchMovie(
          `${this.url}?query=${query}&language=es`
        );
      }),
      map((movies) => movies.results)
    );
  }

  openDialog(id: number) {
    this._dialogService.open(DetailsComponent, { data: id });
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
