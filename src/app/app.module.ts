import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login'; 
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { revisionPedidosPage } from '../pages/revisionPedidos/revisionPedidos';
import { asignacionPersonalPage } from '../pages/agisnacionPersonal/asignacionPersonal';
import { visualizarAgendaPage } from '../pages/visualizarAgenda/visualizarAgenda';
import { reasignarAgendaPage } from '../pages/reasignarAgenda/reasignarAgenda';
import { historicoPage } from '../pages/historico/historico';
import { crearVentaPage } from '../pages/crearVenta/crearVenta';
import { crearPersonalPage } from '../pages/crearPersonal/crearPersonal';
import { listadoPersonalPage } from '../pages/listadoPersonal/listadoPersonal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesProvider } from '../providers/services/services';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    revisionPedidosPage,
    asignacionPersonalPage,
    visualizarAgendaPage,
    reasignarAgendaPage,
    historicoPage,
    crearVentaPage,
    crearPersonalPage,
    listadoPersonalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    revisionPedidosPage,
    asignacionPersonalPage,
    visualizarAgendaPage,
    reasignarAgendaPage,
    historicoPage,
    crearVentaPage,
    crearPersonalPage,
    listadoPersonalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider
  ]
})
export class AppModule {}
