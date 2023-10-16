import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastElement } from 'src/app/features/movies/interfaces/cast.interface';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() cast: CastElement[] = []
  
}
