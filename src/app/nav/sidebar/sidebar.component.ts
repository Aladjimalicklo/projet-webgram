import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  status!: boolean;
  folders: any[] = [
    {
      name: 'Liste des Stagaires',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Liste des Cours ',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Liste des Projets',
      updated: new Date('1/28/16'),
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  sidebar(){
    this.status=!this.status
  }

}
