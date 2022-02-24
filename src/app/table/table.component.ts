import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrash, faEye } from '@fortawesome/.free-solid-svg-icons-QihXpG5Y';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [UserserviceService]
})
export class TableComponent implements OnInit {

  fapen = faPen;
  fatrash=faTrash;
  faeye=faEye;

  users:{
    id: string,
    name: string,
    address: string,
    class: string,
    age: string
  }[]=[];

  tableData=[{
    id: '001',
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
  },
  {
    id:"004",
    name: 'Narayan',
    address: 'france',
    class:'016',
    age: '23'
  }]

  constructor(
    private router: Router,
    // private userServiceservice: UserserviceService
  ) { }

  ngOnInit(): void {
    // this.users = this.userServiceservice.users;
  }

  onNavigateById(value: string, name: string, useraddress:string, userage:string){
    this.router.navigate(['/detailview'],{
      queryParams:{id:value,username: name,address: useraddress, age: userage}
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

  delete(data:any){
    this.tableData.splice(data,1);
  }

  edit(){
    this.router.navigate(['/edituser'])
  }

}
