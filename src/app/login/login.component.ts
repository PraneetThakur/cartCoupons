import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
   
  ) { }
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Trouser: [0, Validators.required],
      Ties: [0, Validators.required],
      Shoes: [0, Validators.required],
      Shirt: [0, Validators.required],
      Discount: [0, Validators.required]

    });
    this.loginForm.controls.Discount.valueChanges.subscribe(value=>{
      this.calculateDiscount(value)
    })
  }
  calculateDiscount(value)
  {
    
    this.totalAmount=this.grandTotal
    switch (value) {
      case 10:
       this.totalAmount=this.totalAmount - ( this.totalAmount*10/100 );
        break;
        case 3:
        var freeTrouser=Math.ceil((this.loginForm.value.Trouser)/3*2)*450;
        var freeTies=Math.ceil((this.loginForm.value.Ties)/3*2)*125;
        var freeShoes=Math.ceil((this.loginForm.value.Shoes)/3*2)*700;
        var freeShirt=Math.ceil((this.loginForm.value.Shirt)/3*2)*350;
        var totalDiscountedAmountOf15=freeTrouser+freeTies+freeShoes+freeShirt
        this.totalAmount=totalDiscountedAmountOf15
        

          break;
          case 15:
        
            break;
        
      default:
        break;
    }
  }
  get f() { return this.loginForm.controls; }
  totalAmount=0
  submitted=false
  grandTotal=0
  calculateTotal()
  {
    this.totalAmount=0
    this.totalAmount=(this.loginForm.value.Trouser*450)
    +(this.loginForm.value.Ties*125)+
    (this.loginForm.value.Shoes*700)+
    (this.loginForm.value.Shirt*350)
    this.grandTotal=this.totalAmount
    // alert(this.totalAmount)
  // alert('test')
  this.calculateDiscount(this.loginForm.controls.Discount.value)


  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
    this.submitted = false;

      return;
    }
    const postData = {
      userName: this.f.username.value,
      password: this.f.password.value
  };
  //  this.router.navigate(['/document-list'])
  }
register()
{
  this.router.navigate(['/registration']);

}
  
}
