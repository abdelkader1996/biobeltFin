import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'instalpieges',
    loadChildren: () => import('./instalpieges/instalpieges.module').then( m => m.InstalpiegesPageModule)
  },
  {
    path: 'bottles',
    loadChildren: () => import('./bottles/bottles.module').then( m => m.BottlesPageModule)
  },
  {
    path: 'bottlemodal',
    loadChildren: () => import('./modal/bottlemodal/bottlemodal.module').then( m => m.BottlemodalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'canvas',
    loadChildren: () => import('./canvas/canvas.module').then( m => m.CanvasPageModule)
  },
  {
    path: 'removebottle',
    loadChildren: () => import('./removebottle/removebottle.module').then( m => m.RemovebottlePageModule)
  },
  {
    path: 'optionbottle',
    loadChildren: () => import('./optionbottle/optionbottle.module').then( m => m.OptionbottlePageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'addbottlemodal',
    loadChildren: () => import('./addbottlemodal/addbottlemodal.module').then( m => m.AddbottlemodalPageModule)
  },
  {
    path: 'addbottleceint',
    loadChildren: () => import('./addbottleceint/addbottleceint.module').then( m => m.AddbottleceintPageModule)
  },
  {
    path: 'rackcontent',
    loadChildren: () => import('./rackcontent/rackcontent.module').then( m => m.RackcontentPageModule)
  },
  {
    path: 'choosestock',
    loadChildren: () => import('./choosestock/choosestock.module').then( m => m.ChoosestockPageModule)
  },
  {
    path: 'adjustment',
    loadChildren: () => import('./adjustment/adjustment.module').then( m => m.AdjustmentPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'controldiff',
    loadChildren: () => import('./controldiff/controldiff.module').then( m => m.ControldiffPageModule)
  },
  {
    path: 'synchro',
    loadChildren: () => import('./synchro/synchro.module').then( m => m.SynchroPageModule)
  },
  {
    path: 'cdiff',
    loadChildren: () => import('./cdiff/cdiff.module').then( m => m.CdiffPageModule)
  },
  {
    path: 'connection',
    loadChildren: () => import('./connection/connection.module').then( m => m.ConnectionPageModule)
  },
  {
    path: 'interventionceinture',
    loadChildren: () => import('./interventionceinture/interventionceinture.module').then( m => m.InterventionceinturePageModule)
  },
  {
    path: 'interventionceinture2',
    loadChildren: () => import('./interventionceinture2/interventionceinture2.module').then( m => m.Interventionceinture2PageModule)
  },
  {
    path: 'retfournmodal',
    loadChildren: () => import('./retfournmodal/retfournmodal.module').then( m => m.RetfournmodalPageModule)
  },
  {
    path: 'namepiege',
    loadChildren: () => import('./namepiege/namepiege.module').then( m => m.NamepiegePageModule)
  },
  {
    path: 'comunicationparam',
    loadChildren: () => import('./comunicationparam/comunicationparam.module').then( m => m.ComunicationparamPageModule)
  },
  {
    path: 'alarmparam',
    loadChildren: () => import('./alarmparam/alarmparam.module').then( m => m.AlarmparamPageModule)
  },
  {
    path: 'initechangeboitierupc',
    loadChildren: () => import('./initechangeboitierupc/initechangeboitierupc.module').then( m => m.InitechangeboitierupcPageModule)
  },
  {
    path: 'commentaires',
    loadChildren: () => import('./commentaires/commentaires.module').then( m => m.CommentairesPageModule)
  },
  {
    path: 'rapportvisite',
    loadChildren: () => import('./rapportvisite/rapportvisite.module').then( m => m.RapportvisitePageModule)
  },
  {
    path: 'modifnbpieges',
    loadChildren: () => import('./modifnbpieges/modifnbpieges.module').then( m => m.ModifnbpiegesPageModule)
  },
  {
    path: 'verifpiegesindividuels',
    loadChildren: () => import('./verifpiegesindividuels/verifpiegesindividuels.module').then( m => m.VerifpiegesindividuelsPageModule)
  },
  {
    path: 'testmode',
    loadChildren: () => import('./testmode/testmode.module').then( m => m.TestmodePageModule)
  },
  {
    path: 'finintervention',
    loadChildren: () => import('./finintervention/finintervention.module').then( m => m.FininterventionPageModule)
  },  {
    path: 'debug',
    loadChildren: () => import('./debug/debug.module').then( m => m.DebugPageModule)
  },
  {
    path: 'bottle-types-modal',
    loadChildren: () => import('./bottle-types-modal/bottle-types-modal.module').then( m => m.BottleTypesModalPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
