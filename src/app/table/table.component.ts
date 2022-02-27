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

  // users:{
  //   id: string,
  //   name: string,
  //   address: string,
  //   class: string,
  //   age: string
  // }[]=[];

  // tableData:[{
  //   name: string,
  //   email: string,

  // }]

  tableData:any = [];


  constructor(
    private router: Router,
    private userServiceservice: UserserviceService
  ) { }

  ngOnInit(): void {
    // this.users = this.userServiceservice.users;
    this.listUsers();
    // this.tableData = this.listUsers();
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

  delete(id:string){
    this.userServiceservice.delete(id).subscribe(
      (respose:any) =>{
        console.log(respose);
        // this.tableData.splice(value,1);
      },
      error =>{
        console.error(error);
      }
    )
  }

  edit(value:string){
    this.router.navigate(['/home/edituser',value])
  }

  listUsers(){
    this.userServiceservice.listusers().subscribe(
      (response:any) =>{
        console.log(response);
        this.tableData = response.users;
      },
      (error:any)=>{console.error(error);}
    );
  }

}
