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
    /*[Authorize]*/
    public class EmployeesController : BaseController<Employee, EmployeeRepository, string>
    {
        private readonly EmployeeRepository repository;
        public EmployeesController(EmployeeRepository repository) : base(repository)
        {
            this.repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        /*[HttpGet("GetEmployees/{NIK}")]*/
        public async Task<JsonResult> GetEmployees()
        {
            var result = await repository.GetEmployees();
            return Json(result);
        }

        public async Task<JsonResult> GetEmployeesByNik(string id)
        {
            var result = await repository.GetEmployeesByNik(id);
            return Json(result);
        }

        public JsonResult Registers(RegisterVM entity)
        {
            var result = repository.Post(entity);
            return Json(result);
        }
    }
}
