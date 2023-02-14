using Microsoft.AspNetCore.Mvc;

namespace CvApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CvController : ControllerBase
{
    [HttpGet()]
    public IActionResult DownloadFile()
    {
    var path = "CV.pdf";
    var fs = new FileStream(path, FileMode.Open);
    return File(fs, "application/octet-stream");
    }
}
