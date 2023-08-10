import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListarIdeiasComponent } from './componentes/ideias/listar-ideias/listar-ideias.component';
import { IdeiaComponent } from './componentes/ideias/ideia/ideia.component';
import { AppRoutingModule } from './app-routing.module';
import { CriarIdeiaComponent } from './componentes/ideias/criar-ideia/criar-ideia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListarIdeiasComponent,
    IdeiaComponent,
    CriarIdeiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
