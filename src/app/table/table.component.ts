import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
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

  tableData:any = [];


  constructor(
    private router: Router,
    private userServiceservice: UserserviceService
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }

  onNavigateById(value: string, name: string, useraddress:string, userage:string){
    this.router.navigate(['/detailview'],{
      queryParams:{id:value,username: name,address: useraddress, age: userage}
    });
  }


  onbackbtn(){
    this.router.navigate(['/home'])
  }

  onclass(value:string,name: string, email: string, mobileNumber: string){
    this.router.navigate(['/home/detailview'+value],{
      queryParams: {name:name,email:email,mobileNumber:mobileNumber}
    })
  }

  delete(id:string){
    if(confirm("Are you sure you want to delete.")){
    this.userServiceservice.delete(id).subscribe(
      (respose:any) =>{
          console.log(respose);
          this.listUsers();
        },
        error =>{
          console.error(error);
        }
      )
    }
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
