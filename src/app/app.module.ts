import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalcularBlocosComponent } from './components/calcular-blocos/calcular-blocos.component';
import { CalcularPisosComponent } from './components/calcular-pisos/calcular-pisos.component';
import { CalcularTelhasComponent } from './components/calcular-telhas/calcular-telhas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalcularBlocosComponent,
    CalcularPisosComponent,
    CalcularTelhasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
