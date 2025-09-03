import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-jcprincipal',
  templateUrl: './jcprincipal.page.html',
  styleUrls: ['./jcprincipal.page.scss'],
  standalone : true,
  imports: [IonicModule,FormsModule]
})
export class JCprincipalPage implements OnInit {

  paletteToggle = false;

  constructor(private router: Router) {

    this.JuanCarlosMode();
  }

  ngOnInit() {
  }

JuanCarlosMode(){
   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
}

  initializeDarkPalette(isDark: any) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(event: CustomEvent) {
    this.toggleDarkPalette(event.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  clicktabs(){
    this.router.navigate(['/tabs']);
  }

}
