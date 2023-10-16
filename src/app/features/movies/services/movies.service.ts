import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../interfaces/movie.interface';
import { Observable, distinctUntilChanged, filter, map, shareReplay } from 'rxjs';
import { Genre } from '../interfaces/genres.interface';
import { SingleMovie } from '../interfaces/single-movie.interface';
import { Video } from '../interfaces/video.interface';
import { Cast } from '../interfaces/cast.interface';

@Injectable({providedIn: 'root'})
export class MoviesService {
  public url: string = 'https://api.themoviedb.org/3/'

  constructor(private _http: HttpClient) {}

  getTrendingMovies(): Observable<Result> {
    return this._http.get<Result>(
      `${this.url}trending/movie/day?language=es`
    );
  }

  getBestMovies(): Observable<Result> {
    return this._http.get<Result>(
      `${this.url}movie/top_rated?language=es`
    )
  }

  getGenres(): Observable<Genre> {
    return this._http.get<Genre>(
      `${this.url}genre/movie/list?language=es-ES`
    );
  }

  getSingleMovie(id: number): Observable<SingleMovie> {
    return this._http.get<SingleMovie>(
      `${this.url}movie/${id}?language=es-ES`
    ) 
  }

  getVideo(id: number): Observable<Video> {
    return this._http.get<Video>(
      `${this.url}movie/${id}/videos`
    )
  }

  getCast(id: number): Observable<Cast> {
    return this._http.get<Cast>(
      `${this.url}movie/${id}/credits`
    ).pipe(distinctUntilChanged());
  }

  searchMovie(url: string): Observable<Result> {
    return this._http.get<Result>(url);
  }

  getMoviesByGenre(url: string): Observable<Result> {
    return this._http.get<Result>(url);
  }
}
