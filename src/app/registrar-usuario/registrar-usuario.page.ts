import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
  imports: [ IonicModule]
})
export class RegistrarUsuarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    goHome() {
    this.router.navigate(['/home']);
  }

}
