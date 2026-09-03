import { Component } from '@angular/core';
import { images } from '../../constants/image';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  // Declaration de l’objet image
  image = images
  menuOpen = false;
}
