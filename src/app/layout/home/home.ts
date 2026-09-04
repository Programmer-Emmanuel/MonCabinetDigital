import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { images } from '../../constants/image';
import { Apropos } from '../../components/home components/apropos/apropos';
import { Cabinet } from '../../components/home components/cabinet/cabinet';
import { Solution } from '../../components/home components/solution/solution';
import { Actualite } from '../../components/home components/actualite/actualite';
import { Contact } from '../../components/home components/contact/contact';
import { RouterModule } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [RouterModule, NavBar, Apropos, Cabinet, Solution, Actualite, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  image = images
}
