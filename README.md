# 📱 Proyecto Ionic - Navegación, Interfaces y Dark Mode

Este proyecto fue desarrollado en **Ionic + Angular** como práctica para implementar un sistema de navegación completo, interfaces modulares, diseño adaptable y soporte para **modo oscuro**.  

---

## ⚙️ Tecnologías utilizadas
- [Ionic Framework](https://ionicframework.com/)  
- Angular  
- TypeScript  
- SCSS  

---

## 🚀 Configuración de la Navegación

### 🔹 Tabs Navigation
Se implementaron **tabs** en la parte inferior de la aplicación para acceder rápidamente a las secciones principales.  
Para esto se configuró un módulo de rutas con `ion-tabs` y los botones correspondientes.

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home">
      <ion-icon name="home-outline"></ion-icon>
      <ion-label>Inicio</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="profile">
      <ion-icon name="person-outline"></ion-icon>
      <ion-label>Perfil</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
