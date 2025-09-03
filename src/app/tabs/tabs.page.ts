import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';




@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [ IonicModule, FormsModule ],
})
export class TabsPage implements OnInit {



  constructor(private router: Router) {

   }

  ngOnInit() {
  }


  clickvolver(){
    this.router.navigate(['/jcprincipal']);
  }




}
