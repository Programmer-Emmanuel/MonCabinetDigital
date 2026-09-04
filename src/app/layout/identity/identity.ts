import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { Footer } from "../../components/footer/footer";
import { images } from '../../constants/image';
import { Mission } from '../../components/identity components/mission/mission';

@Component({
  selector: 'app-identity',
  imports: [NavBar, Footer, Mission],
  templateUrl: './identity.html',
  styleUrl: './identity.css',
})
export class Identity {
  image = images
}
