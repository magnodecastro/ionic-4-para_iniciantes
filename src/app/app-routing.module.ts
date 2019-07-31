import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //{ path: ''     , loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: ''     , loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'tabs' , loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs/tab1' , loadChildren: './tab1/tab1.module#tab1PageModule' },
  { path: 'tabs/feed' , loadChildren: './feed/feed.module#FeedPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
