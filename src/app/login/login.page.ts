import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonIcon, IonRouterLink, IonInput } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonContent, IonItem, IonIcon, CommonModule, FormsModule, IonRouterLink]
})
export class LoginPage implements OnInit {

  loginData = {
    correo: '',
    contrasena: ''
  };

  router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('Login data:', this.loginData);
    // Aquí puedes agregar la lógica para autenticar al usuario
    this.router.navigate(['/map']);
  }
}
