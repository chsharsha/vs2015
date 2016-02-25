using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class TestoSeeder
    {
        private TheWorldContext _context;

        public TestoSeeder(TheWorldContext context)
        {
            _context = context;
        }

        public void EnsureTestoSeed()
        {
            if(!_context.Testos.Any())
            {
                Testo t = new Testo();
                t.Spells = "Avada Kedavra";
                _context.Testos.Add(t);
                _context.SaveChanges();
            }
        }
    }
}
