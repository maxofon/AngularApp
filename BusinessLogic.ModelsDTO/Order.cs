using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessLogic.ModelsDTO
{
    public class Order
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime OrderTime { get; set; }
        public decimal Amount { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public List<OrderLine> OrderLines { get; set; } = new List<OrderLine>();
    }
}
