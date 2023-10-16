import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { CastElement } from 'src/app/features/movies/interfaces/cast.interface';
import { MoviesService } from 'src/app/features/movies/services/movies.service';
import { Observable, map, shareReplay, startWith, tap } from 'rxjs';
import { SingleMovie } from 'src/app/features/movies/interfaces/single-movie.interface';
import { SpinnerComponent } from '../spinner/spinner.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CarouselComponent } from '../carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FavoritesService } from 'src/app/features/movies/components/favorites/favorites.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    PrimengModule,
    SpinnerComponent,
    CarouselComponent,
    FormsModule,
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [MessageService],
})
export class DetailsComponent implements OnInit {
  private _sanitizer = inject(DomSanitizer);
  private _moviesService = inject(MoviesService);
  private _dynamicDialogConfig = inject(DynamicDialogConfig);
  private _messageService = inject(MessageService);
  private _favoritesService = inject(FavoritesService);

  public visible: boolean = false;
  public movie$!: Observable<SingleMovie>;
  public video$!: Observable<string>;
  public cast$!: Observable<CastElement[]>;
  public id: number = this._dynamicDialogConfig.data;
  public checked: boolean = false;

  ngOnInit(): void {
    this.visible = true;
    this.loadDetails();
    this.checked = this.getFavorites().includes(this.id);
  }

  private loadDetails() {
    this.movie$ = this._moviesService.getSingleMovie(this.id),
    this.video$ = this._moviesService.getVideo(this.id).pipe(map((videoResponse) =>
       videoResponse.results.find((video) => video.type === 'Trailer')!.key)),
       startWith('')
    this.cast$ = this._moviesService.getCast(this.id)
      .pipe(map((cast) => cast.cast.slice(0, 16)));
  }

  getTrailer(key: string): SafeResourceUrl {
    const videoUrl = `https://www.youtube-nocookie.com/embed/${key}`;
    return this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  getFavorites(): number[] {
    const storedFavorites = localStorage.getItem('favorites');

    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  toggleFavorite(id: number) {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(id);

    index !== -1 ? 
    (favorites.splice(index, 1),
    this._messageService.add({
      severity: 'info',
      summary: 'Actualización',
      detail: 'Eliminada de favoritos',
    })) : 
    
    (favorites.push(id),
    this._messageService.add({
      severity: 'success',
      summary: 'Actualización',
      detail: 'Añadida a favoritos',
    }));

    localStorage.setItem('favorites', JSON.stringify(favorites));
    this._favoritesService.updateFavorites(favorites);
  }
}
