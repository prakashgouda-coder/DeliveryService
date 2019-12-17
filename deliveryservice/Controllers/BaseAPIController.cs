using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
namespace deliveryservice.Controllers
{
    [ApiController]
    public class BaseAPIController 
    {

        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response =new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
    }
}