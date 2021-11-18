import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  url='https://odiswap.io/WebApi/api/Registration';
  //url='https://odiswap.co.uk/WebApi/api/users'
  urlToken='https://localhost:44303/api/Tokens'

  login_access:any;
  login_admin_access:any;

  constructor(private http:HttpClient) { }

  getLoginData(){
    return this.http.get(this.url);
  }

  SaveUserData(data:any){
    return this.http.post(this.url,data)
  }


  GetValueForLoginAccess(val:any){
    val=JSON.parse(val);
    this.login_access=val;    
  }

  GetValueForLoginAccessAdmin(val:any){
    val=JSON.parse(val);
    this.login_admin_access=val;    
  }

  isUserRights():boolean{
    return this.login_access;
  }

  isAdminRights():boolean{
    return this.login_admin_access;
  }

  
  getTokenData() {
    return this.http.get(this.urlToken);
  }
  
  SaveTokenData(data:any){
    return this.http.post(this.urlToken,data)
  }  


}
