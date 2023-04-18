import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { DeliveryOrder } from '../models';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
//ONInit is use to intialise the component and create an object.
export class DeliveryComponent implements OnInit {

  form!: FormGroup

  ngOnInit(): void {
    //this metod is called when the component is created
    // for initialization
    this.form = this.createForm()
  }

  //Create a form builder service
  constructor(private fb: FormBuilder) {}

  processDelivery() {
    const delivery = this.form.value as DeliveryOrder
    console.info('>>>> delivery: ', delivery)
    this.form.reset
  }

  private createForm(): FormGroup {
    return this.fb.group ({
      name: this.fb.control<string>(''),
      address: this.fb.control<string>(''),
      email: this.fb.control<string>(''),
      session: this.fb.control<string>(''),
      insurance: this.fb.control<boolean>(false),
      priority: this.fb.control<boolean>(false),
      deliveryDate: this.fb.control<string>(''),
      comments: this.fb.control<string>('')
      
    })
  }

}
