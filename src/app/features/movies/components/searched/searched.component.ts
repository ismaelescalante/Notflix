import { Component, Input, inject } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailsComponent } from 'src/app/shared/details/details.component';

@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.scss'],
  providers: [DialogService]
})
export class SearchedComponent {
  private _dialogService = inject(DialogService)
  
@Input() public searchedMovie: Movie[] = []

  openDialog(id: number) {
    this._dialogService.open(DetailsComponent, {data: id})
  }
}
