import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator} from '@angular/material/paginator';

 export interface PeriodicElement {
  position: number;
  orderId: string;
  date: string;
  items: string;
  price: string;
  status: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    orderId: 'ORD001',
    date: '2020/02/05' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 2,
    orderId: 'ORD002',
    date: '2020/02/04' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 3,
    orderId: 'ORD003',
    date: '2020/02/05' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 4,
    orderId: 'ORD004',
    date: '2020/02/05' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 5,
    orderId: 'ORD005',
    date: '2020/02/05' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 6,
    orderId: 'ORD006',
    date: '2020/02/05' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 7,
    orderId: 'ORD007',
    date: '2020/02/05' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 8,
    orderId: 'ORD008',
    date: '2020/02/05' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 9,
    orderId: 'ORD009',
    date: '2020/02/05' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  }, {
    position: 10,
    orderId: 'ORD0010',
    date: '2020/02/15' ,
    items: 'Book 01',
    price: 'Rs1500',
    status: 'paid'
  },
];

@Component({
  selector: 'app-sellar-payments',
  templateUrl: './sellar-payments.component.html',
  styleUrls: ['./sellar-payments.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class SellarPaymentsComponent implements AfterViewInit {

  constructor() { }

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['position', 'orderId', 'date', 'items', 'price', 'status'];
  expandedElement: PeriodicElement | null;
 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

