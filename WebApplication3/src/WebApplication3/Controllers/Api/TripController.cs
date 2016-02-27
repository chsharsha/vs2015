using AutoMapper;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebApplication3.Models;
using WebApplication3.ViewModels;

namespace WebApplication3.Controllers.Api
{
    [Authorize]
    public class TripController : Controller
    {
        private ILogger<TripController> _logger;
        private ITheWorldRepository _repository;
        

        public TripController(ITheWorldRepository repository,ILogger<TripController> logger)
        {
            _repository = repository;
            _logger = logger;
        }
        [HttpGet("api/trips")]
        public JsonResult Get()
        {
            var results = Mapper.Map<IEnumerable<TripViewModel>>(_repository.GetUserTripsWithStops(User.Identity.Name));
            return Json(results);
        }


        [HttpPost("api/trips")]
        public JsonResult Post([FromBody]TripViewModel tvm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var tripObj = Mapper.Map<Trip>(tvm);
                    tripObj.UserName = User.Identity.Name;
                    _repository.AddTrip(tripObj);

                    if (_repository.SaveAll())
                    {
                        Response.StatusCode = (int)HttpStatusCode.Created;
                        return Json(Mapper.Map<TripViewModel>(tripObj));
                    }
                    else
                    {
                        throw new Exception("Error while saving the database");
                    }
                    
                }
                else
                {
                    throw new Exception("Model state is not valid");
                }
                
            }
            catch(Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { Message = ex.Message });
            }
        }
    }
}
