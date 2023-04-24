import { Component } from '@angular/core';
import { Order } from 'src/models/order.models';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  order: Order = new Order("", 0, new Date(), "");
  constructor(){

  }

  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
  }
}
