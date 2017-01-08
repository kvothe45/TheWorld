using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace TheWorld
{
    public class Program
    {
        //starting point for all code
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()//allows us to specify things about the web host that are important to us
                .UseKestrel()//name of the web server you will probably be using under ASPNET.Core
                .UseContentRoot(Directory.GetCurrentDirectory())//current directory for content
                .UseIISIntegration()//adds some support for IIS mostly to support specialized headers and windows authentication
                .UseStartup<Startup>()//use a class called Startup to start my web server and instantiates it
                .Build();//builds the web host

            host.Run();//starts the web host and starts to lisen for requests and creates a new instance of the startup class
        }
    }
}
