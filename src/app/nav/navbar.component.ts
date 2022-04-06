import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size:15px }
    #searchForm { margin-right:10px }
    li > a.active { color: orange }
  `]
})

export class NavBarComponent {

}