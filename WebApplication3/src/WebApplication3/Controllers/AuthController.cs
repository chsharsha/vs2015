using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.Models;
using WebApplication3.ViewModels;

namespace WebApplication3.Controllers
{
    public class AuthController : Controller
    {
        private SignInManager<TheWorldUser> _signInManager;

        public AuthController(SignInManager<TheWorldUser> signInManager)
        {
            _signInManager = signInManager;
        }

        public IActionResult Login()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Home");
            }

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel lvm,string returnURL)
        {
            if (ModelState.IsValid)
            {
                var signInResult = await _signInManager.PasswordSignInAsync(lvm.UserName, lvm.Password, true, false);
                if(signInResult.Succeeded)
                {
                    if(!String.IsNullOrEmpty(returnURL))
                    {
                        return Redirect(returnURL);
                    }
                    else
                    { 
                    return RedirectToAction("Trips", "Home");
                    }
                }
                else
                {
                    ModelState.AddModelError("", "Failed to signin ");
                }
            }

            return View();
        }

        public async Task<IActionResult> Logout()
        {
            if(User.Identity.IsAuthenticated)
            {
                await _signInManager.SignOutAsync();
            }

            return RedirectToAction("Index", "Home");
        }
    }
}
