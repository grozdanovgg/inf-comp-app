import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedOutGuard } from 'src/app/core/logged-out.guard';
import { LoggedInGuard } from './core/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [LoggedInGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./start/start.module').then(m => m.StartModule),
    canActivate: [LoggedOutGuard]
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
