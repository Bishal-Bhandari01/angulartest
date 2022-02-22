import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData=[{
    id:'001',
    name: 'Bishal',
    address: 'NPJ',
    class:'010',
    age: '21'
  },
  {
    id:'002',
    name: 'James',
    address: 'KTM',
    class:'005',
    age: '21'
  },
  {
    id:"003",
    name: 'John',
    address: 'USA',
    class:'002',
    age: '21'
  }]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onNavigateById(value: string, name: string, useraddress:string, userage:string){
    this.router.navigate(['/detailview',value],{
      queryParams:{username: name,address: useraddress, age: userage}
    });
  }

  onbackbtn(){
    this.router.navigate(['/home'])
  }

  onclass(value: string, name: string, useraddress: string,uage: string){
    this.router.navigate(['/detailview',value,'class',value],{
      queryParams: {name:name,useraddress:useraddress,age:uage}
    })
  }

}
