import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  qty: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', qty: 100 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', qty: 10 },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', qty: 30 },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', qty: 40 },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', qty: 60 },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', qty: 20 },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', qty: 10 },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', qty: 40 },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', qty: 30 },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', qty: 10 },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'symbol',
    'weight',
    'qty',
    'action',
  ];
  dataSource = ELEMENT_DATA;
}
