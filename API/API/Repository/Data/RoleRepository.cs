using API.Context;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository.Data
{
    public class RoleRepository : GeneralRepository<MyContext, Account, string>
    {
        public RoleRepository(MyContext myContext) : base(myContext)
        {

        }
    }

}
