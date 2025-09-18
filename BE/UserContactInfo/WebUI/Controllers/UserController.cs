using Microsoft.AspNetCore.Mvc;
using UserContactInfo.BusinessLogic;

namespace UserContactInfo.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserIdManager _userIdManager;

        public UserController()
        {
            // Direct instantiation, since we are not using DI
            _userIdManager = new UserIdManager();
        }

        [HttpGet("next-id")]
        public ActionResult<int> GetNextUserId()
        {
            var id = _userIdManager.GetNextUserId();
            return Ok(id);
        }
    }
}
