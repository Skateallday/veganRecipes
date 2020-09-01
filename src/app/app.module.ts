import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SkatersComponent } from './skaters/skaters.component';
import {NotFoundComponent } from './not-found/not-found.component';
import { VeganComponent } from './vegan/vegan.component';
import { BreakfastComponent } from './vegan/breakfast/breakfast.component';
import { LunchComponent } from './vegan/lunch/lunch.component';
import { DinnerComponent } from './vegan/dinner/dinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SkatersComponent,
    NotFoundComponent,
    VeganComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'skaters', component: SkatersComponent},
      {path: 'vegan', component: VeganComponent},
      {path: '404', component: NotFoundComponent},
      {path: 'breakfast', component: BreakfastComponent},
      {path: 'lunch', component: LunchComponent},
      {path: 'dinner', component: DinnerComponent},
      {path: '**', redirectTo: '/404'}   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
