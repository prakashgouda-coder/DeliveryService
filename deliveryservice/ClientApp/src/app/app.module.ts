import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { OrderFormComponent } from "./order-form/order-form.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, OrderFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
