import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {revisionPedidosPage } from '../pages/revisionPedidos/revisionPedidos';
import { asignacionPersonalPage } from '../pages/agisnacionPersonal/asignacionPersonal';
import { visualizarAgendaPage} from '../pages/visualizarAgenda/visualizarAgenda';
import { reasignarAgendaPage } from '../pages/reasignarAgenda/reasignarAgenda'; 
import { historicoPage } from '../pages/historico/historico';
import { crearVentaPage } from '../pages/crearVenta/crearVenta';
import { crearPersonalPage } from '../pages/crearPersonal/crearPersonal';
import { listadoPersonalPage } from '../pages/listadoPersonal/listadoPersonal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Revision Pedidos', component: revisionPedidosPage},
      { title: 'Asignacion de Personal', component: asignacionPersonalPage},
      { title: 'Visualizar agenda', component: visualizarAgendaPage},
      { title: 'Reasignar agenda', component: reasignarAgendaPage},
      { title: 'Historico', component: historicoPage},
      { title: 'Crear Venta', component: crearVentaPage},
      { title: 'Crear Personal', component: crearPersonalPage},
      { title: 'Listado de Personal', component: listadoPersonalPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot( this.pages[page].component);
  }
}
