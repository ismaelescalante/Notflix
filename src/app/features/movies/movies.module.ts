import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { GenreComponent } from './components/genre/genre.component';
import { DetailsComponent } from 'src/app/shared/details/details.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { SearchedComponent } from './components/searched/searched.component';
import { PopularComponent } from './components/popular/popular.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { MoviesService } from './services/movies.service';
import { FavoritesComponent } from './components/favorites/favorites.component';


@NgModule({
  declarations: [
    HomeComponent,
    GenreComponent,
    SearchedComponent,
    PopularComponent,
    TopRatedComponent,
    FavoritesComponent,
    
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    PrimengModule,
    DetailsComponent,
    SpinnerComponent,
  ]
})
export class MoviesModule { }
