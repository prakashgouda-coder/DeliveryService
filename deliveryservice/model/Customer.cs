using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace deliveryservice.model
{
    public abstract class Customer
    {
        public int Distance {get;set;}
        public int Stair {get;set;}
          public bool Weekend { get; set; }
        

        public Customer() { }
        public Customer(int distance,int stair) {
            this.Distance = distance;
            this.Stair = stair;
        }
        public abstract decimal OrderCost();
    }

    public class RegularCustomer : Customer
    {
        public override decimal OrderCost()
        {
            throw new NotImplementedException();
        }
    }
    public class ExistingGoldCustomer : Customer
    {
        public override decimal OrderCost()
        {
            return 899.1M;
        }
    }

    public class NewCustomer : Customer
    {
        public override decimal OrderCost()
        {
            return 849.15M;
        }
    }
    public class WeekendCustomer : Customer
    {
        public override decimal OrderCost()
        {
            return 1498.5M;
        }
    }
    public class CouponCustomer : Customer
    {
        public override decimal OrderCost()
        {
            return 1498.5M;
        }
    }
}
