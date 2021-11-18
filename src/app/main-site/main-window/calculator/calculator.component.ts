import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
  
})
export class CalculatorComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  form:any =  FormGroup
  yearGerman: any
  monthlyLoanInstallmentGerman: any
  yearlyIncomeGerman: any
  sliderValueGerman = 1
  grossMonthlyIncomeGerman: any
  monthlyRentGerman: any
  insuranceGerman: any
  divisionGerman: any
  perDisabilityGerman: any

  displayGer1 = ''
  displayGer2 = 'none'
  displayGer3 = 'none'

  displayEng1 = 'none'
  displayEng2 = 'none'
  displayEng3 = 'none'

  styleGer = [
    {
      background: 'orange',
      shadow: '0px 0px 10px'
    }
  ]
  styleEng = [
    {
      background: '',
      shadow: ''
    }
  ]

  germanFormValues = [
    {
      dayGerman: '',
      monthGerman: '',
      yearGerman: '',
      salaryGerman: '',
      monthlyRateGerman: ''

    }
  ]
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dayGerman: ['',{
        validators: [Validators.required]
      }],
      monthGerman: ['', {
        validators: [Validators.required]
      }],
      yearGerman: ['', {
        validators: [Validators.required]
      }],
      salaryGerman: ['',{
        validators: [Validators.required]
      }],
      monthlyRateGerman: ['',{
        validators: [Validators.required]
      }],
    })
  }
  enableGerman() {
    this.styleGer = [
      {
        background: 'orange',
        shadow: '0px 0px 10px'
      }
    ]

    this.styleEng = [
      {
        background: '',
        shadow: ''
      }
    ]
  }

  enableEnglish() {
    this.styleGer = [
      {
        background: '',
        shadow: ''
      }
    ]

    this.styleEng = [
      {
        background: 'orange',
        shadow: '0px 0px 10px'
      }
    ]
  }

  maxDurationVBUPension = 0
  numberOfVBUAnnualPositions = 0
  capitalAtDBU = 0
  total = 0
  paymentMethod= 0

  firstYear = 0
  secondYear = 0
  thirdYear = 0
  fourthYear = 0
  fifthYear = 0
  averageYearsGerman = 0
  average67Years = 0
  getDataGerman(value: NgForm) {


    this.germanFormValues[0].dayGerman = value.value.dayGerman
    this.germanFormValues[0].monthGerman = value.value.monthGerman
    this.germanFormValues[0].yearGerman = value.value.yearGerman
    this.germanFormValues[0].salaryGerman = value.value.salaryGerman
    this.germanFormValues[0].monthlyRateGerman = value.value.monthlyRateGerman

  
    if (this.germanFormValues[0].dayGerman != 'null' && this.germanFormValues[0].monthGerman != 'null' && this.germanFormValues[0].yearGerman != 'null' && this.germanFormValues[0].salaryGerman != '' && this.germanFormValues[0].monthlyRateGerman != '' ) {
      
      if (typeof (this.germanFormValues[0].salaryGerman) == 'number' && typeof (this.germanFormValues[0].monthlyRateGerman) == 'number')
      
      {
        this.displayGer2 = ''
      this.displayGer1 = 'none'

      // calculating year
      var today = new Date();
      let newInsurance = 0
      var yyyy = today.getFullYear();

      this.yearGerman = yyyy - parseFloat(this.germanFormValues[0].yearGerman)

      // yearly income
      this.yearlyIncomeGerman = this.germanFormValues[0].salaryGerman
      // monthlyLoanInstallment
      this.monthlyLoanInstallmentGerman = this.germanFormValues[0].monthlyRateGerman
      // gross monthly income
      this.grossMonthlyIncomeGerman = (this.yearlyIncomeGerman / 12).toString().slice(0, 8)
      this.monthlyRentGerman = 1000

      this.insuranceGerman = ((this.yearlyIncomeGerman * 10) / 100).toString().slice(0, 8)
      this.divisionGerman = 12
      this.perDisabilityGerman = (this.monthlyRentGerman * 120).toString().slice(0, 8)

      if(this.yearGerman <= 58)
      {

        this.maxDurationVBUPension = 120
      }
        else if (this.yearGerman == 59)
        {
          this.maxDurationVBUPension == 108
        }
        else if (this.yearGerman == 60)
        {
          this.maxDurationVBUPension == 96
        }
        else if (this.yearGerman >= 61)
        {
          this.maxDurationVBUPension == 84
        }

        if (this.yearGerman <= 48)
        {
          this.numberOfVBUAnnualPositions = 10
       
        }
        else if (this.yearGerman == 49)
        {
          this.numberOfVBUAnnualPositions = 9
        }
        else if (this.yearGerman == 50)
        {
          this.numberOfVBUAnnualPositions = 8
        }
        else if (this.yearGerman == 51)
        {
          this.numberOfVBUAnnualPositions = 7
        }
        else if (this.yearGerman == 52)
        {
          this.numberOfVBUAnnualPositions = 6
        }
        else if (this.yearGerman == 53)
        {
          this.numberOfVBUAnnualPositions = 5
        }
        else if (this.yearGerman == 54)
        {
          this.numberOfVBUAnnualPositions = 4
        }
        else if (this.yearGerman == 55)
        {
          this.numberOfVBUAnnualPositions = 3
        }
        else if (this.yearGerman == 56)
        {
          this.numberOfVBUAnnualPositions = 2
        }
        else if (this.yearGerman >= 57)
        {
          this.numberOfVBUAnnualPositions = 1
        }
      }
      else
      {
        this._snackBar.open('Provide Decimal Data !', "", {
          duration: 3000,
    
        });
      }

      this.capitalAtDBU = this.maxDurationVBUPension * this.numberOfVBUAnnualPositions * 100
      this.total = this.capitalAtDBU + 120000
      this.paymentMethod = 12

      if (this.yearGerman == 18)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 19)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 20)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 21)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 22)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 23)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 24)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 25)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 26)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 27)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.70
        this.fifthYear = 15.97
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 28)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.70
        this.fourthYear = 15.97
        this.fifthYear = 16.29
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 29)
      {
        this.firstYear = 15.70
        this.secondYear = 15.70
        this.thirdYear = 15.97
        this.fourthYear = 16.29
        this.fifthYear = 16.55
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 30)
      {
        this.firstYear = 15.70
        this.secondYear = 15.97
        this.thirdYear = 16.29
        this.fourthYear = 16.55
        this.fifthYear = 16.87
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 31)
      {
        this.firstYear = 15.97
        this.secondYear = 16.29
        this.thirdYear = 16.55
        this.fourthYear = 16.87
        this.fifthYear = 17.50
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 32)
      {
        this.firstYear = 16.29
        this.secondYear = 16.55
        this.thirdYear = 16.87
        this.fourthYear = 17.50
        this.fifthYear = 17.93
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 33)
      {
        this.firstYear = 16.55
        this.secondYear = 16.87
        this.thirdYear = 17.50
        this.fourthYear = 17.93
        this.fifthYear = 18.34
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 34)
      {
        this.firstYear = 16.87
        this.secondYear = 17.50
        this.thirdYear = 17.93
        this.fourthYear = 18.34
        this.fifthYear = 18.85
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 35)
      {
        this.firstYear = 17.50
        this.secondYear = 17.93
        this.thirdYear = 18.34
        this.fourthYear = 18.85
        this.fifthYear = 19.28
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 36)
      {
        this.firstYear = 17.93
        this.secondYear = 18.34
        this.thirdYear = 18.85
        this.fourthYear = 19.28
        this.fifthYear = 19.71
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 37)
      {
        this.firstYear = 18.34
        this.secondYear = 18.85
        this.thirdYear = 19.28
        this.fourthYear = 19.71
        this.fifthYear = 20.33
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 38)
      {
        this.firstYear = 18.85
        this.secondYear = 19.28
        this.thirdYear = 19.71
        this.fourthYear = 20.33
        this.fifthYear = 21.40
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 39)
      {
        this.firstYear = 19.28
        this.secondYear = 19.71
        this.thirdYear = 20.33
        this.fourthYear = 21.40
        this.fifthYear = 22.59
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 40)
      {
        this.firstYear = 19.71
        this.secondYear = 20.33
        this.thirdYear = 21.40
        this.fourthYear = 22.59
        this.fifthYear = 23.76
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 41)
      {
        this.firstYear = 20.33
        this.secondYear = 21.40
        this.thirdYear = 22.59
        this.fourthYear = 23.76
        this.fifthYear = 25.17
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 42)
      {
        this.firstYear = 21.40
        this.secondYear = 22.59
        this.thirdYear = 23.76
        this.fourthYear = 25.17
        this.fifthYear = 27.01
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 43)
      {
        this.firstYear = 22.59
        this.secondYear = 23.76
        this.thirdYear = 25.17
        this.fourthYear = 27.01
        this.fifthYear = 29.04
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 44)
      {
        this.firstYear = 23.76
        this.secondYear = 25.17
        this.thirdYear = 27.01
        this.fourthYear = 29.04
        this.fifthYear = 31.54
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 45)
      {
        this.firstYear = 25.17
        this.secondYear = 27.01
        this.thirdYear = 29.04
        this.fourthYear = 31.54
        this.fifthYear = 32.69
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 46)
      {
        this.firstYear = 27.01
        this.secondYear = 29.04
        this.thirdYear = 31.54
        this.fourthYear = 32.69
        this.fifthYear = 34.19
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 47)
      {
        this.firstYear = 29.04
        this.secondYear = 31.54
        this.thirdYear = 32.69
        this.fourthYear = 34.19
        this.fifthYear = 35.58
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 48)
      {
        this.firstYear = 31.54
        this.secondYear = 32.69
        this.thirdYear = 34.19
        this.fourthYear = 35.58
        this.fifthYear = 37.03
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 49)
      {
        this.firstYear = 32.69
        this.secondYear = 34.19
        this.thirdYear = 35.58
        this.fourthYear = 37.03
        this.fifthYear = 39.10
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 50)
      {
        this.firstYear = 34.19
        this.secondYear = 35.58
        this.thirdYear = 37.03
        this.fourthYear = 39.10
        this.fifthYear = 40.84
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 51)
      {
        this.firstYear = 35.58
        this.secondYear = 37.03
        this.thirdYear = 39.10
        this.fourthYear = 40.84
        this.fifthYear = 42.40
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 52)
      {
        this.firstYear = 37.03
        this.secondYear = 39.10
        this.thirdYear = 40.84
        this.fourthYear = 42.40
        this.fifthYear = 43.74
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 53)
      {
        this.firstYear = 39.10
        this.secondYear = 40.84
        this.thirdYear = 42.04
        this.fourthYear = 43.74
        this.fifthYear = 44.65
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 54)
      {
        this.firstYear = 40.84
        this.secondYear = 42.40
        this.thirdYear = 43.74
        this.fourthYear = 44.65
        this.fifthYear = 45.08
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 55)
      {
        this.firstYear = 42.40
        this.secondYear = 43.74
        this.thirdYear = 44.65
        this.fourthYear = 45.08
        this.fifthYear = 47.98
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 56)
      {
        this.firstYear = 43.74
        this.secondYear = 44.65
        this.thirdYear = 45.08
        this.fourthYear = 47.98
        this.fifthYear = 51.64
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 57)
      {
        this.firstYear = 44.65
        this.secondYear = 45.08
        this.thirdYear = 47.98
        this.fourthYear = 51.64
        this.fifthYear = 60.42
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 58)
      {
        this.firstYear = 45.08
        this.secondYear = 47.98
        this.thirdYear = 51.64
        this.fourthYear = 60.42
        this.fifthYear =  63.24
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 59)
      {
        this.firstYear = 47.98
        this.secondYear = 51.64
        this.thirdYear = 60.42
        this.fourthYear = 63.24
        this.fifthYear = 66.71
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman == 60)
      {
        this.firstYear = 51.64
        this.secondYear = 60.42
        this.thirdYear = 63.24
        this.fourthYear = 66.71
        this.fifthYear = 67.70
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      else if (this.yearGerman >= 61)
      {
        this.firstYear = 60.42
        this.secondYear = 63.24
        this.thirdYear = 66.71
        this.fourthYear = 67.70
        this.fifthYear = 73.34
        this.averageYearsGerman = (this.firstYear + this.secondYear + this.thirdYear + this.fourthYear + this.fourthYear)/5
      }
      
      this.average67Years = this.averageYearsGerman * 2
    }
    else
    {
      this._snackBar.open('Provide Complete Details !', "", {
        duration: 3000,
  
      });
    }
  }

  showDataGerman() {
    this.displayGer2 = 'none'
    this.displayGer1 = ''
  }

  showWelcome() {
    this.displayGer2 = 'none'
    this.displayGer1 = 'none'
    this.displayGer3 = ''
  }
  showMain() {
    this.displayGer3 = 'none'
    this.displayGer2 = ''
  }



  // getSlider(event: any) {
  //   this.sliderValueGerman = event.target.value
  //   // this.monthlyRentGerman = ((this.yearlyIncomeGerman / 100) * this.sliderValueGerman).toString().slice(0, 9)
  //   this.perDisabilityGerman = (this.monthlyRentGerman * 120).toString().slice(0, 8)
  // }

  conditionsGerman(value: any) {
    if (value == 12) {
      this.divisionGerman = 12
    }
    if (value == 4) {
      this.divisionGerman = 4
    }
    if (value == 2) {
      this.divisionGerman = 2
    }
    if (value == 1) {
      this.divisionGerman =  1
    }

  }
}
