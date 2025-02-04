import { Component, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'clients-app';

  ngAfterViewInit() {
    (function($) {
      "use strict";

      // Adiciona o estado ativo aos links da barra lateral
      var path = window.location.href;
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        let link = this as HTMLAnchorElement; // Corrige o tipo do this
        if (link.href === path) {
          $(link).addClass("active");
        }
      });

      // Alterna a navegação lateral
      $("#sidebarToggle").on("click", function(e: JQuery.ClickEvent) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });

    })(jQuery);
  }
}
