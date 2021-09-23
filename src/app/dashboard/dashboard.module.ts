import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from "../components/components.module";

import { NgCircleProgressModule } from 'ng-circle-progress';
import { PlotlyExampleComponent } from '../components/Radar3D.page';
import { Radar3D } from '../components/Radar3D.module';
import * as PlotlyJS from 'plotly.js-dist';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyViaCDNModule } from 'angular-plotly.js';


PlotlyViaCDNModule.setPlotlyVersion('1.55.2'); // can be `latest` or any version number (i.e.: '1.40.0')
PlotlyViaCDNModule.setPlotlyBundle('mapbox'); // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'

PlotlyModule.plotlyjs = PlotlyJS;


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
	PlotlyViaCDNModule,
	Radar3D,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 35,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      outerStrokeColor: "#2694A3",
      innerStrokeColor: "#2694A3",
      animationDuration: 300,
    })
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
