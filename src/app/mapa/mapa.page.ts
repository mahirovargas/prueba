import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import { IonicModule } from '@ionic/angular';
import * as L from 'leaflet';

// Íconos locales en assets
const DefaultIcon = L.icon({
  iconRetinaUrl: 'assets/leaflet/images/marker-icon-2x.png',
  iconUrl: 'assets/leaflet/images/marker-icon.png',
  shadowUrl: 'assets/leaflet/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class MapaPage {
  private map?: L.Map;

  constructor() {}

  async ionViewDidEnter() {
    // Coordenadas fallback (Buenaventura)
    const fallback: [number, number] = [3.8801, -77.0311];

    // Si el mapa ya existe, no lo vuelvas a crear
    if (this.map) {
      return;
    }

    // Inicializar mapa
    this.map = L.map('map').setView(fallback, 14);

    // Tiles de OpenStreetMap (gratis)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    try {
      // Ubicación actual con precisión
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true
      });

      const userLocation: [number, number] = [
        position.coords.latitude,
        position.coords.longitude
      ];

      // Marcador
      const marker = L.marker(userLocation).addTo(this.map);
      marker.bindPopup(
        `📍 Tu ubicación<br>Lat: ${userLocation[0].toFixed(5)}<br>Lng: ${userLocation[1].toFixed(5)}`
      ).openPopup();

      // Precisión (círculo)
      const accuracy = position.coords.accuracy;
      if (accuracy) {
        L.circle(userLocation, {
          radius: accuracy,
          color: 'blue',
          fillColor: '#3f51b5',
          fillOpacity: 0.2
        }).addTo(this.map);
      }

      // Centrar mapa
      this.map.setView(userLocation, 16);

    } catch (error) {
      console.error('Error obteniendo ubicación:', error);
      L.marker(fallback).addTo(this.map).bindPopup('Buenaventura');
    }

    // Redibuja mapa después de un corto delay
    setTimeout(() => {
      this.map?.invalidateSize();
    }, 200);
  }

  ionViewWillLeave() {
    if (this.map) {
      this.map.remove(); // destruye todo
      const container = L.DomUtil.get('map');
      if (container) {
        (container as any)._leaflet_id = null; // limpia referencia interna
      }
      this.map = undefined;
    }
  }
}
