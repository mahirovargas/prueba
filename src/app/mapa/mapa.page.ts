import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
  imports: [
    IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton
  ],
})
export class MapaPage {
  private map!: L.Map;
  private mapInitialized = false;

  constructor() {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/leaflet/images/marker-icon-2x.png',
      iconUrl: 'assets/leaflet/images/marker-icon.png',
      shadowUrl: 'assets/leaflet/images/marker-shadow.png'
    });
  }

  // 🔹 Mejor: ionViewDidEnter asegura que el div ya está renderizado y visible
  async ionViewDidEnter() {
    if (this.mapInitialized) return;

    const defaultCoords: L.LatLngExpression = [3.8801, -77.0312];

    this.map = L.map('map', { zoomControl: true }).setView(defaultCoords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Forzar recalculo de tamaño después del render
    setTimeout(() => this.map.invalidateSize(), 200);

    try {
      const position = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });
      const userCoords: L.LatLngExpression = [
        position.coords.latitude,
        position.coords.longitude
      ];

      L.marker(userCoords).addTo(this.map)
        .bindPopup('📍 Estás aquí')
        .openPopup();

      this.map.setView(userCoords, 14);
    } catch (err) {
      console.error('Error al obtener ubicación:', err);
      this.map.setView(defaultCoords, 13);
    }

    this.mapInitialized = true;
  }
}
