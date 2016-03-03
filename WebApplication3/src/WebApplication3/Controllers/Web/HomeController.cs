using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using WebApplication3.Models;
using WebApplication3.Services;
using WebApplication3.ViewModels;
using Microsoft.Extensions.Logging;
using Microsoft.AspNet.Authorization;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication3.Controllers.Web
{
    public class HomeController : Controller
    {

        private ITheWorldRepository _repository;
        private IMailService _mailservice;
        private ILogger<HomeController> _logger;

        public HomeController(ITheWorldRepository repository,IMailService mailer,ILogger<HomeController> logger)
        {
            _repository = repository;
            _mailservice = mailer;
            _logger = logger;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {

            return View();
        }
        //}

        [Authorize]    
        public IActionResult Trips()
        {

           
            return View();
        }


        public IActionResult About()
        {
            return View();
        }


        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(ContactViewModel cvm)
        {
            _mailservice.SendEmail("", "", "", "");
            return View();
        }
    }
}
