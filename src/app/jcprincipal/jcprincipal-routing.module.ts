import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JCprincipalPage } from './jcprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: JCprincipalPage,
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JCprincipalPageRoutingModule {}
