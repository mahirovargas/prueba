import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import * as L from 'leaflet';

import { Geolocation } from '@capacitor/geolocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MapPage implements OnInit {

  mapa!: L.Map ;
  lat: number = 3.88678;
  log: number = -77.02575;

  constructor() { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  ionViewDidEnter() {
    if (!this.mapa) {
      this.mapainit();
    }
  }

  async getCurrentPosition() {
    try {
      const hasPermission = await Geolocation.checkPermissions();
      if (hasPermission.location === 'granted') {
        const coordinates = await Geolocation.getCurrentPosition();
        this.lat = coordinates.coords.latitude;
        this.log = coordinates.coords.longitude;
      } else {
        // Si no se conceden permisos, solicita permisos
        const permissionStatus = await Geolocation.requestPermissions();
        if (permissionStatus.location === 'granted') {
          const coordinates = await Geolocation.getCurrentPosition();
          this.lat = coordinates.coords.latitude;
          this.log = coordinates.coords.longitude;
        } else {
          console.error('Location permission not granted');
        }
      }
      console.log('Current position:', this.lat, this.log);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }

  mapainit(): void {
    this.mapa = L.map('map', {
      center: [ this.lat, this.log ],
      zoom: 14
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapa);

    L.circleMarker([ this.lat, this.log]).addTo(this.mapa)
    .bindPopup('Me perdi')
    setTimeout(() => {
      this.mapa.invalidateSize();
    }, 200);
  }
}
