import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponseModel } from './Models/userResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  api: string = 'api/users';
  baseUrl:string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  adduser(data:any): Observable<UserResponseModel> {
    return this.http.post<UserResponseModel>(this.baseUrl.concat(this.api), data);
  }

  listusers(): Observable<UserResponseModel>{
    return this.http.get<UserResponseModel>(this.baseUrl.concat(this.api));
  }

  delete(id:any): Observable<UserResponseModel>{
    return this.http.delete<UserResponseModel>(this.baseUrl.concat(this.api)+"/"+id);
  }

  userbyid(id:any): Observable<UserResponseModel>{
    return this.http.get<UserResponseModel>(this.baseUrl.concat(this.api)+"/"+id);
  }

  updateUser(id:any,body:any):Observable<UserResponseModel>{
    const update = this.baseUrl.concat(this.api)+"/"+id;
    return this.http.put<UserResponseModel>(update,body);
  }

}
