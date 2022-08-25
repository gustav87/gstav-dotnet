using GuestsApi.Models;
using GuestsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace GuestsApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GuestsController : ControllerBase
{
    private readonly GuestsService _guestsService;

    public GuestsController(GuestsService guestsService) =>
        _guestsService = guestsService;

    [HttpGet]
    public async Task<List<Guest>> Get()
    {
        var cheese = Environment.GetEnvironmentVariable("windir") ?? "asd";
        Console.WriteLine(cheese);
        var filter = HttpContext.Request.Query["filter"].ToString() ?? "";
        if (filter == "") {
            return await _guestsService.GetAsync();
        } else {
            return await _guestsService.GetAsync(filter);
        }
    }

    [HttpPost("insertRow")]
    public async Task<IActionResult> Post(Guest newGuest)
    {
        await _guestsService.CreateAsync(newGuest);

        return CreatedAtAction(nameof(Get), new { id = newGuest.Id }, newGuest);
    }

    // [HttpPost("insertRow")]
    // public string InsertRow()
    // {
    //     return "Record inserted into database.";
    // }

    // [HttpGet]
    // public async Task<List<Guest>> Get() =>
    //     await _guestsService.GetAsync();
}
