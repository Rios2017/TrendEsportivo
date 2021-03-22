import { Component, OnInit, ElementRef } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  team: string;
  spots: string;
  datetime: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: "Não funciona" , spots: "", datetime: "", team:"",},
  {id: 1, name: "Não funciona" , spots: "", datetime: "", team:"",},
  {id: 1, name: "Não funciona" , spots: "", datetime: "", team:"",},
  {id: 1, name: "Não funciona" , spots: "", datetime: "", team:"",},
];

@Component({
  selector: 'app-table-team',
  templateUrl: './table-team.component.html',
  styleUrls: ['./table-team.component.css']
})

export class ProductReadComponent implements OnInit {

  displayedColumns = ['id', 'name', 'spots','team', 'datetime', 'action']
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
