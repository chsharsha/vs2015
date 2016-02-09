using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TagLib;
namespace TagLibTry
{
    class Program
    {
        static void Main(string[] args)
        {
            TagLib.File f = TagLib.File.Create(@"F:\Downloads\04 - Chalaaki Chilipi - [www.MaaMp3.com].mp3");
            f.Tag.Album = "Lets Try";
            f.Save();
        }
    }
}
