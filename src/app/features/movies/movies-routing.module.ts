import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GenreComponent } from './components/genre/genre.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genre/:id', component: GenreComponent},
  {path: 'favorites', component: FavoritesComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
