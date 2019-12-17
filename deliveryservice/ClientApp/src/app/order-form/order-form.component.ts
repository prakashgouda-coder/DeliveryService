import { Component, OnInit } from "@angular/core";

import { Order } from "../order";
import { DeliveryServiceService } from "../delivery-service.service";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.css"]
})
export class OrderFormComponent implements OnInit {
    totalOrderPrice: any;
  constructor(private deliveryservice: DeliveryServiceService) {}

    ngOnInit() { }


  submitted = false;

  onSubmit() {
    console.log(JSON.parse(JSON.stringify(this.models)));
      this.deliveryservice.OrderDelivery(this.models).subscribe(result=>this.totalOrderPrice=result);
    this.submitted = true;
  }
    getOrder() {
        console.log(JSON.parse(JSON.stringify(this.models)));
        this.deliveryservice.OrderDelivery(this.models).subscribe(result => this.totalOrderPrice = result);
        this.submitted = true;
    }

  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];
  weekends = ["No", "Yes"];
  stairs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
  customerTypes = ["Existing", "New"];
  coupons = ["No", "Yes"];

  models = new Order(
    1,
    0,
    this.weekends[0],
    this.customerTypes[0],
    this.coupons[1]
  );

  //Return only number
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
