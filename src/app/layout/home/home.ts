import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { images } from '../../constants/image';
import { Apropos } from '../../components/home components/apropos/apropos';
import { Cabinet } from '../../components/home components/cabinet/cabinet';
import { Solution } from '../../components/home components/solution/solution';
import { Actualite } from '../../components/home components/actualite/actualite';
import { Contact } from '../../components/home components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [NavBar, Apropos, Cabinet, Solution, Actualite, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  image = images
}
