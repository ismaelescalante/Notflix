import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from './spinner.service';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  private _spinnerService = inject(SpinnerService);

  public isLoading$ = this._spinnerService.isLoading$;
}
