import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutPlanetTwoComponent } from './about-planet-two/about-planet-two.component';
import { AboutYavinComponent } from './about-yavin/about-yavin.component';
import { AboutHothComponent } from './about-hoth/about-hoth.component';
import { AboutDagobahComponent } from './about-dagobah/about-dagobah.component';
import { AboutBespinComponent } from './about-bespin/about-bespin.component';
import { AboutEndorComponent } from './about-endor/about-endor.component';
import { AboutCoruscantComponent } from './about-coruscant/about-coruscant.component';
import { AboutKaminoComponent } from './about-kamino/about-kamino.component';
import { AboutNabooComponent } from './about-naboo/about-naboo.component'

const appRoutes: Routes = [
  {path: '', component: PlanetsComponent},
  {path: '', component: HomeComponent},
  {path: 'about_two', component: AboutPlanetTwoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about_yavin', component: AboutYavinComponent},
  {path: 'about_hoth', component: AboutHothComponent},
  {path: 'about_dagobah', component: AboutDagobahComponent},
  {path: 'about_bespin', component: AboutBespinComponent},
  {path: 'about_endor', component: AboutEndorComponent},
  {path: 'about_coruscant', component: AboutCoruscantComponent},
  {path: 'about_kamino', component: AboutKaminoComponent},
  {path: 'about_naboo', component: AboutNabooComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    HomeComponent,
    AboutComponent,
    AboutPlanetTwoComponent,
    AboutYavinComponent,
    AboutHothComponent,
    AboutDagobahComponent,
    AboutBespinComponent,
    AboutEndorComponent,
    AboutCoruscantComponent,
    AboutKaminoComponent,
    AboutNabooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
