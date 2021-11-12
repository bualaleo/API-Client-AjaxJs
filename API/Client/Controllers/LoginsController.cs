using API.Models;
using API.ViewModel;
using Client.Base;
using Client.Repository.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Client.Controllers
{
    public class LoginsController : BaseController<LoginVM, LoginRepository, string>
    {

        private readonly LoginRepository repository;
        public LoginsController(LoginRepository repository) : base(repository)
        {
            this.repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ErrorEmail()
        {
            return View();
        }

        public IActionResult ErrorPass()
        {
            return View();
        }

        public IActionResult Error401()
        {
            return View();
        }
        public IActionResult ErrorNotfound()
        {
            return View();
        }


        public async Task<IActionResult> Auth(LoginVM login)
        {
            var jwtToken = await repository.Auth(login);
            var token = jwtToken.Token;
            var pesan = jwtToken.Messages;

            if (token == "")
            {
                if (pesan == "0")
                {
                    return RedirectToAction("ErrorEmail", "Logins");
                }
                else
                {
                    return RedirectToAction("ErrorPass", "Logins");
                }
            }

            HttpContext.Session.SetString("JWToken", token);
            
            return RedirectToAction("DataEmployee", "Home");
        }

        [Authorize]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("index", "Logins");
        }
    }
}
