export class Order {
  constructor(
    public distance: number,
    public stair: number,
    public weekend: string,
    public custtype: string,
    public coupon?: string
  ) {}
}

export class OrderDelivery {
    
    public distance: number;
    public stair: number;
    public weekend: string;
    public custtype: string;
    public coupon?: string;
    
}

