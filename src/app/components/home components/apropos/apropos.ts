import { Component } from '@angular/core';
import { images } from '../../../constants/image';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-apropos',
  imports: [RouterModule],
  templateUrl: './apropos.html',
  styleUrl: './apropos.css',
})
export class Apropos {
  image = images
}
