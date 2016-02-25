using AutoMapper;
using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebApplication3.Models;
using WebApplication3.ViewModels;

namespace WebApplication3.Controllers.Api
{
    public class TripController : Controller
    {
        private ITheWorldRepository _repository;

        public TripController(ITheWorldRepository repository)
        {
            _repository = repository;
        }
        [HttpGet("api/trips")]
        public JsonResult Get()
        {
            var results = _repository.GetAllTripsWithStops();
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
                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json(true);
                }
                else
                {
                    Response.StatusCode = (int)HttpStatusCode.BadRequest;
                    return Json(ModelState);
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
