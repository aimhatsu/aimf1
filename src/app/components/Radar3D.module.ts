import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlotlyExampleComponent } from './Radar3D.page';


import { PlotlyViaCDNModule } from 'angular-plotly.js';


PlotlyViaCDNModule.setPlotlyVersion('1.55.2'); // can be `latest` or any version number (i.e.: '1.40.0')
PlotlyViaCDNModule.setPlotlyBundle('mapbox'); // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlotlyViaCDNModule
  ],
  declarations: [PlotlyExampleComponent]
})
export class Radar3D {}
