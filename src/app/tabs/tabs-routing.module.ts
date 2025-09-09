import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapaPage } from '../mapa/mapa.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'mapa',
    component: MapaPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
