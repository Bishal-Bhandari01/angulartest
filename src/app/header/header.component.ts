import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tableData = [
    {
      id: '001',
      name:'bishal',
      address:'ktm',
      age:21
    },
    {
      id: '002',
      name:'james',
      address:'npj',
      age:21
    },
    {
      id:'003',
      name:'ram',
      address:'ktm',
      age:22
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
