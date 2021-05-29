using LevenshteinDistance.CustomAuthentication;
using LevenshteinDistance.Models;
using LevenshteinDistance.Services;
using Microsoft.AspNetCore.Mvc;

namespace LevenshteinDistance.Controllers
{
    [Route("api/levenshteindistance")]
    public class LevenshteinDistanceController : Controller
    {
        private readonly ILevenshteinDistanceService _service;

        public LevenshteinDistanceController(ILevenshteinDistanceService service)
        {
            _service = service;
        }

        [HttpPost]
        [CustomAuthorization]
        [Route("getlevenshteindistance")]
        public IActionResult GetLevenshteinDistance([FromBody] LevenshteinDistanceRequestModel model)
        {
            if (string.IsNullOrEmpty(model.String1) || string.IsNullOrEmpty(model.String2))
                return NoContent();

            var response = _service.GetLevenshteinDistance(model.String1, model.String2);

            var result = new
            {
                string1 = "**" + model.String1,
                string2 = "**" + model.String2,
                matrix = response.Item1,
                result = response.Item2,
            };
            return Ok(result);
        }
    }
}
