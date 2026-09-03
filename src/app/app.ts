import { Component, signal, OnInit, OnDestroy, effect } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import AOS from 'aos';
import { images } from './constants/image';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('landing-page');
  
  isLoading = signal(true);
  progress = signal(0);
  
  private routerSubscription!: Subscription;
  private progressInterval: any;
  
  image = images;
  
  constructor(private router: Router) {
    effect(() => {
      console.log('Titre:', this.title());
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-out-cubic',
      offset: 100
    });

    // Démarrer la simulation de chargement PLUS LENTE
    this.startSlowLoadingSimulation();

    // Écouter les événements de navigation
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Fin du chargement après la navigation
        setTimeout(() => {
          this.completeLoading();
        }, 800); // Délai augmenté
      });

    // Sécurité : forcer la fin après 8 secondes (au lieu de 5)
    setTimeout(() => {
      if (this.isLoading()) {
        this.completeLoading();
      }
    }, 8000);
  }

  private startSlowLoadingSimulation(): void {
    this.progress.set(0);
    let currentProgress = 0;
    
    // Intervalle plus lent : toutes les 300ms au lieu de 150ms
    this.progressInterval = setInterval(() => {
      // Incrémentation plus petite : 1-4 au lieu de 2-8
      const increment = Math.floor(Math.random() * 4) + 1;
      currentProgress = Math.min(currentProgress + increment, 99);
      this.progress.set(currentProgress);
    }, 300); // Intervalle plus long
  }

  private completeLoading(): void {
    // Passer à 100% avec une transition plus douce
    this.progress.set(100);
    
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }

    // Délai plus long avant de cacher l'écran
    setTimeout(() => {
      this.isLoading.set(false);
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, 600); // Délai augmenté à 600ms
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }
}