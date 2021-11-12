﻿using API.Context;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository.Data
{
    public class AccountRoleRepository : GeneralRepository<MyContext, Account, string>
    {
        public AccountRoleRepository(MyContext myContext) : base(myContext)
        {

        }
    }

}
