import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ViewChild } from '@angular/core';

import swal from 'sweetalert2';


import { Observable } from 'rxjs';
import {LoginApiService} from '../login-api.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@ViewChild('close_modal') close_modal:any


  
showSidebar2 = 'none'
showMoreFeaturesAdmin:any = 'none'
// showMoreFeaturesAdmin:any = sessionStorage.getItem('_showMoreFeaturesAdmin')

  
    Login_Data:any;
    
    user_password:any;
    
    flag=true;
    
    loc:any;
    login_access:any=false;
    login_admin_access:any=false;
  
  constructor(private _obj:LoginApiService , private router:Router , private Location:Location) {
    
  //   console.log('...............',sessionStorage.getItem('_showMoreFeatures'))
  //   if (sessionStorage.getItem('_showMoreFeatures')  == null )
  //  {
  //  console.log('i am in')
 
     
  //   sessionStorage.setItem('_showMoreFeatures','none')
  //   sessionStorage.setItem('_hideLogin','')
  //  }
  //  else{
  //    this.showMoreFeatures = sessionStorage.getItem('_showMoreFeatures');
  //    this.hideLogin = sessionStorage.getItem('_hideLogin')

  console.log(this.Location.path())
  this.loc=this.Location.path();

 
  //  }
    
   }
   ngOnInit(): void {
    this._obj.getLoginData().subscribe(data =>{
      console.log(data)
     this.Login_Data=data;
     console.log(this.Login_Data.length)
     
    

   })

   if(sessionStorage.getItem('_showMoreFeaturesAdmin')==null)
   {
    sessionStorage.setItem('_showMoreFeaturesAdmin','none')
    this.showMoreFeaturesAdmin =sessionStorage.getItem('_showMoreFeaturesAdmin')
    sessionStorage.setItem('_hideLogin','')
    this. hideLogin =sessionStorage.getItem('_hideLogin')
    sessionStorage.setItem('_username','')
   sessionStorage.setItem('_email','')
   sessionStorage.setItem('_tokenid','')
   sessionStorage.setItem('_login_admin_access',this.login_admin_access)
   

   }
   this.showMoreFeaturesAdmin =sessionStorage.getItem('_showMoreFeaturesAdmin')
   this._obj.GetValueForLoginAccessAdmin(sessionStorage.getItem('_login_admin_access'));
   
   

   if(sessionStorage.getItem('_showMoreFeatures')==null){
   sessionStorage.setItem('_showMoreFeatures','none')
   sessionStorage.setItem('_hideLogin','')
   sessionStorage.setItem('_username','')
   sessionStorage.setItem('_email','')
   sessionStorage.setItem('_tokenid','')
   sessionStorage.setItem('_login_access',this.login_access)
   this.showMoreFeatures =sessionStorage.getItem('_showMoreFeatures')
   this. hideLogin =sessionStorage.getItem('_hideLogin')
  
   }
  //  if(sessionStorage.getItem('showMoreFeaturesAdmin')==null)
  //  {
  //   sessionStorage.setItem('_login_access','')
  //   sessionStorage.setItem('showMoreFeaturesAdmin','none')
  //   this.showMoreFeaturesAdmin = sessionStorage.getItem('showMoreFeaturesAdmin')
  //   this. hideLogin =sessionStorage.getItem('_hideLogin')
  //  }
   this._obj.GetValueForLoginAccess(sessionStorage.getItem('_login_access'));
 
  }
  user_token_id:any=sessionStorage.getItem('_tokenid')
  user_name:any=sessionStorage.getItem('_username');
  user_email:any=sessionStorage.getItem('_email');
  showMoreFeatures:any=sessionStorage.getItem('_showMoreFeatures')
  hideLogin:any=sessionStorage.getItem('_hideLogin')
   
   
   LogOut(){
     sessionStorage.clear()
     window.location.href="";
   }
   
   adminPanel = 'none'

   GetLoginValues(v:any){
     
     console.log(this.Login_Data)
     for(let i=0 ; i<this.Login_Data.length;i++ )
     {
     this.user_email=this.Login_Data[i]['vEmailID'];
     this.user_password=this.Login_Data[i]['vPassword'];
     this.user_name=this.Login_Data[i]['vUserName'];
     this.user_token_id=this.Login_Data[i]['vTokenID']
      if(this.user_email==v['Email'] && this.user_password==v['Password']){
        
        if(this.user_email=='abc@axtract.co.uk' && this.user_password=='p@ssword')
        {
          this.close_modal.nativeElement.click()
          sessionStorage.setItem('_showMoreFeaturesAdmin','')
          this.showMoreFeaturesAdmin =sessionStorage.getItem('_showMoreFeaturesAdmin')
          sessionStorage.setItem('_hideLogin','none')
          this.hideLogin = sessionStorage.getItem('_hideLogin');
          sessionStorage.setItem('_username',this.user_name)
          sessionStorage.setItem('_email',this.user_email)
          sessionStorage.setItem('_tokenid',this.user_token_id)
          this.login_admin_access=true
          sessionStorage.setItem('_login_admin_access',this.login_admin_access)
          this._obj.GetValueForLoginAccessAdmin(sessionStorage.getItem('_login_admin_access'));
          // sessionStorage.setItem('_hideLogin','none')
          // sessionStorage.setItem('showMoreFeaturesAdmin','')
          // this.showMoreFeaturesAdmin = sessionStorage.getItem("showMoreFeaturesAdmin")
          // this.hideLogin= sessionStorage.getItem('_hideLogin')
          this.flag = false
          this.router.navigate(['admin/dashboard']);
          break;
        }
        else
        {

          this.close_modal.nativeElement.click()
          this.login_access=true
          sessionStorage.setItem('_login_access',this.login_access)
          this._obj.GetValueForLoginAccess(sessionStorage.getItem('_login_access'));
          sessionStorage.setItem('_showMoreFeatures','')
          sessionStorage.setItem('_hideLogin','none')
          sessionStorage.setItem('_username',this.user_name)
          sessionStorage.setItem('_email',this.user_email)
          sessionStorage.setItem('_tokenid',this.user_token_id)
          this.showMoreFeatures = sessionStorage.getItem('_showMoreFeatures');
          this.hideLogin = sessionStorage.getItem('_hideLogin');
          
  
          
          this.router.navigate(['/dashboard']);
          // header will show ......
          this.flag=false;
          break;
        }
      }
     }
     if(this.flag==true){
      swal.fire('Hey user!', 'Incorrect Credentials', 'error');
     }
    
   }

   GetSignUpValues(val:any){
     
      console.log(val);
     let check=true;
      
    for(let i=0 ; i<this.Login_Data.length;i++ )
    {
       if(val['vEmail']==this.Login_Data[i]['vEmailID'])
       {
          
          check=false;
          swal.fire('Hey user!', 'Email Already Exist', 'error')
          .then(()=>
          {

            // window.location.href="";
            
          })
          break;
        }

    }
    if(check==true)
    {
     if(val['vRepeatPasswod']==val['vPassword']){
     this._obj.SaveUserData(val).subscribe((result:any)=>{
      swal.fire('Hey user!', result, 'success')
      .then(()=>
      {

        window.location.href="";
        
      })

     })
    }
    if(val['vRepeatPasswod']!=val['vPassword']){
      swal.fire('Hey user!', 'Password Mismatch', 'error',);
    }
  }
     
   }
   
  
 
 

  reloadSite()
  {
    window.location.href =''
  }


  showSidebar = 'none'

  handleSidebar()
  {
    if (this.showSidebar == 'none')
    {
      this.showSidebar = ''
    }
    else{
      this.showSidebar = 'none'
    }
  }


  
  showAccount = 'none'
  handleAccount()
  {
    if(this.showAccount=='none')
    {
      this.showAccount = ''
    }
    else{
      this.showAccount = 'none'
    }

  }

  handleSidebar2(){
    if(this.showSidebar2 == 'none')
    {
      this.showSidebar2 = ''
    }
    else{
      this.showSidebar2 = 'none'
    }
  }
}
