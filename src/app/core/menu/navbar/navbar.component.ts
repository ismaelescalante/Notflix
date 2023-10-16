import { Component, inject } from '@angular/core';
import { MoviesService } from 'src/app/features/movies/services/movies.service';
import { Genre, GenreElement } from 'src/app/features/movies/interfaces/genres.interface';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MoviesService],
})
export class NavbarComponent {
  public sidebarVisible: boolean = false
  private moviesService = inject(MoviesService)
  public genres$: Observable<GenreElement[]>

  constructor(){
    this.genres$ = this.moviesService.getGenres().pipe(
      map(genres => genres.genres)
    )
  }
}
