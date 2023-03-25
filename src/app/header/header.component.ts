import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuitems = [
    {
      id: 1,
      menuLinkText: "Teszt",
      link: 'teszt'
    },
    {
      id: 2,
      menuLinkText: "Teszt2",
      link: 'teszt2'
    },
    {
      id: 3,
      menuLinkText: "Teszt3",
      link: 'teszt3'
    },

  ]
  link = this.menuitems;
}
