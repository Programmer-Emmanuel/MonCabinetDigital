import { Component } from '@angular/core';
import { images } from '../../constants/image';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  image = images
}
