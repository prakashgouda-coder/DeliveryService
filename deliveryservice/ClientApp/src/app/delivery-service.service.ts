import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
 
import { Observable } from "rxjs";
import {  map} from "rxjs/operators";
import { Order } from "./order";

@Injectable({
  providedIn: "root"
})
export class DeliveryServiceService {
    apiurl: string;
    BASE_ENDPOINT = 'api/delivery/';
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.apiurl = baseUrl;
  }

    public OrderDelivery(order: Order): Observable<any> {
        let body =  JSON.stringify(order);
         
        return this.http.get(this.apiurl + this.BASE_ENDPOINT+body);
            // .do(data => console.log("All: " + JSON.stringify(data)))
            
  }
    public getOrderDelivery(order: Order): Observable<any> {
        let body = (JSON.stringify(order));
        const httpOptions = {
            headers: { "Content-Type": "application/json" },
            params: { ...order }
        };
        return this.http.post(this.apiurl + this.BASE_ENDPOINT, httpOptions);
    }
    //post(url: string, model: any): Observable<any> {
    //    let body = JSON.stringify(model);
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    let options = new RequestOptions({ headers: headers });
    //    return this._http.post(url, body, options)
    //        .map((response: Response) => <any>response.json())
    //        .catch(this.handleError);
    //}
}
