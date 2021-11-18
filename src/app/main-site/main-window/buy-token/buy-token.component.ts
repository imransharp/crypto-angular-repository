import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginApiService } from '../login-api.service'

@Component({
  selector: 'app-buy-token',
  templateUrl: './buy-token.component.html',
  styles: [`
      .dropdown {
        height: 50px;
        padding: 10px;
        border: 0;
        font-size: 15px;
        width: 200px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
}
        `],
  styleUrls: ['./buy-token.component.css']
})


export class BuyTokenComponent implements OnInit {

  prices: any;
  items: any;
  tokenId: any;
  tokenAddress: string = "0x246F4b668dd7fE55888EF50aF9F4aeF6C39d4Bdc";
  records: any;

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('X-API-Key', 'lMp8i9xNPuqQ2k7A31l78dpGKwa7UyXDA1s1fv6sTfF6uLiGRbOI8C2YTLRP6PaD')
    .set('Access-Control-Allow-Origin', '*');

  priceHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');

  closeResult = '';


  constructor(private _obj: LoginApiService, private modalService: NgbModal, private http: HttpClient) { }

  ngOnInit() {
    
    // this._obj.SaveTokenData({ EmailId: 'imranb.bhatti@gmail.com',
    //  WalletAddress: '0x7bA9a42bcB796cEF1e8cA72F29642594D9274279' }).subscribe(
    //    data => {
    //   console.log(data)
    // });

  
  }


  // getPrices() {   
  //    //debugger;
  //   this.http.get('https://min-api.cryptocompare.com/data/price?fsym=BSC&tsyms=USD,JPY,EUR,PKR,GBP,ADA&API-KEY=9263f6f86f5addd034acb1c510c1c253c7096883d3817089b12f1e7c89a0e037',
  //     { 'headers': this.priceHeaders }
  //   ).subscribe(data => {
  //     this.items = data;
  //     console.log("records imran test" + this.items)
  //   });

  // }

  saveWallet() {
    //debugger;

    this.tokenId = this.tokenAddress;
    this.http.get('https://deep-index.moralis.io/api/v2/0x7bA9a42bcB796cEF1e8cA72F29642594D9274279/balance?chain=bsc',
      { 'headers': this.headers }
    ).subscribe(data => {
      //$scope.messages = JSON.parse(messages);
      this.items = JSON.stringify(data);
      //this.items = JSON.stringify(data);
      console.log("Moralis Api result of call: " + this.items)
    });

    this._obj.SaveTokenData({ EmailId: 'imranb.bhatti@gmail.com',
    WalletAddress: this.tokenAddress }).subscribe(
      data => {
     console.log(data)
   });
   
  }


  fetchWallet() {    
    // alert( 'Hello ' + '\nWelcome to C# Corner \nFunction in First Component'); 
     //debugger;
    this.tokenId = this.tokenAddress;

    //https://deep-index.moralis.io/api/v2/0x246F4b668dd7fE55888EF50aF9F4aeF6C39d4Bdc/erc20?chain=bsc%20testnet

    this.http.get('https://deep-index.moralis.io/api/v2/'+this.tokenId+'/erc20?chain=bsc%20testnet',
       { 'headers': this.headers }
    ).subscribe(data => {
      this.items = data;
        //this.items = this.records
        console.log("records"+this.items)      
      })
  
     // content.dismiss('Cross click')
  }  

  //https://deep-index.moralis.io/api/v2/0x7bA9a42bcB796cEF1e8cA72F29642594D9274279/balance?chain=bsc
  // fetchWallet() {
  //   this.tokenId = this.tokenAddress;
  //   this.http.get('https://deep-index.moralis.io/api/v2/0x7bA9a42bcB796cEF1e8cA72F29642594D9274279/balance?chain=bsc',
  //     { 'headers': this.headers }
  //   ).subscribe(data => {
  //     this.items = data;
  //     console.log("records imran test" + JSON.stringify(data))
  //   })

  // }

  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}

