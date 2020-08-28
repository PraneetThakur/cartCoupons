import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ItemArray } from './model/item-model';
import { IItems } from './model/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
   
  ) { }

  cartForm: FormGroup;
  productItem: IItems= ItemArray;
  totalAmount=0
  submitted=false
  grandTotal=0
  lastAddedItem=''

  ngOnInit(): void {
    this.cartForm = this.formBuilder.group({
      Trouser: [0, Validators.required],
      Ties: [0, Validators.required],
      Shoes: [0, Validators.required],
      Shirt: [0, Validators.required],
      Discount: [0, Validators.required]
    });

    this.cartForm.controls.Discount.valueChanges.subscribe(value=>{
      this.calculateDiscount(value)
    })
    this.productItem=ItemArray
  }

  get f() { return this.cartForm.controls; }



  calculateDiscount(value)
  {
    this.totalAmount=this.grandTotal
    switch (value) {
      //calculate 10% dis on all items
      case 10:
       this.totalAmount=this.totalAmount - ( this.totalAmount*10/100 );
        break;
        case 3: 
        //calculate buy 3 get 1
        this.calculateTotalFreeItem()
        break;
        //calculate next item 15% dis
        case 15:
        this.checkLastAddedItem()
            break;
        
      default:
        break;
    }
  }
  calculateGetFreePerItem(totalItem,buying,cost)
  {
    return Math.ceil((totalItem)/buying*2)*cost;
  }
  calculateTotalFreeItem()
  {
    var freeTrouser=this.calculateGetFreePerItem(this.cartForm.value.Trouser,3,450)
    var freeTies=this.calculateGetFreePerItem(this.cartForm.value.Ties,3,125)
    var freeShoes=this.calculateGetFreePerItem(this.cartForm.value.Shoes,3,700)
    var freeShirt=this.calculateGetFreePerItem(this.cartForm.value.Shirt,3,350)
    var totalDiscountedAmountOf15=freeTrouser+freeTies+freeShoes+freeShirt
    this.totalAmount=totalDiscountedAmountOf15
  }

  
  calculateTotal(param)
  {
    this.lastAddedItem=''
    if(this.cartForm.value.Discount==15)
    {
      this.lastAddedItem=param
    }
    this.totalAmount=0
    this.totalAmount=(this.cartForm.value.Trouser*450)
    +(this.cartForm.value.Ties*125)+
    (this.cartForm.value.Shoes*700)+
    (this.cartForm.value.Shirt*350)
    this.grandTotal=this.totalAmount
  this.calculateDiscount(this.cartForm.controls.Discount.value)
  }
  checkLastAddedItem()
  {
    switch (this.lastAddedItem) {
      case 'Trouser':
        this.totalAmount=this.totalAmount-  ((this.cartForm.value.Trouser*450)*15/100)
        break;
        case 'Shoes':
          this.totalAmount=this.totalAmount- ((this.cartForm.value.Shoes*700)*15/100)
          break;
          case 'Shirt':
            this.totalAmount=this.totalAmount-((this.cartForm.value.Shirt*350)*15/100)
            break;
            case 'Ties':
              this.totalAmount=this.totalAmount- ((this.cartForm.value.Ties*125)*15/100)
              break;
      default:
        break;
    }
  }
 
  
}
