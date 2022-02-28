import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  api: string = 'api/users';
  baseUrl:string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  adduser(data:any): Observable<any> {
    return this.http.post<any>(this.baseUrl.concat(this.api), data);
  }

  listusers(): Observable<any>{
    return this.http.get<any>(this.baseUrl.concat(this.api));
  }

  delete(id:any): Observable<any>{
    return this.http.delete<any>(this.baseUrl.concat(this.api)+"/"+id);
  }

  userbyid(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl.concat(this.api)+"/"+id);
  }

  put(id:any,body:any):Observable<any>{
    const update = this.baseUrl.concat(this.api)+"/"+id;
    return this.http.put<any>(update,body);
  }

}
