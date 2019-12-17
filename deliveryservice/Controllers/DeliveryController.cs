using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using deliveryservice.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace deliveryservice.Controllers
{
    [Route("api/[controller]")]
     
    public class DeliveryController :BaseAPIController
    {
        [HttpGet]
        public IEnumerable<string> Get([FromBody] Order order)
        {
            return new string[] { "value1", "value2" };
        }
        [HttpGet("{searchCriteria}")]
        public string Get(string searchCriteria)
        {
            Order order = JsonConvert.DeserializeObject<Order>(searchCriteria);



            System.Console.WriteLine(searchCriteria);
            return "value";
        }
        

        // POST: api/Delivery
        [HttpPost]
        public HttpResponseMessage GerOrderCost([FromBody] Order value)
        {
            var str = new string[] { "value1", "value2" };
            return ToJson(str.AsEnumerable());
        }

        // PUT: api/Delivery/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
