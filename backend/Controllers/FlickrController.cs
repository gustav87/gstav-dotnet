using Microsoft.AspNetCore.Mvc;
using FlickrDogs;

namespace FlickrApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FlickrController : ControllerBase
{
    private static readonly HttpClient client = new HttpClient();
    private readonly string flickr_api = "https://api.flickr.com/services/rest";
    private readonly string json_format = "format=json&nojsoncallback=1";
    private readonly string api_key = Environment.GetEnvironmentVariable("flickr_api_key") ?? "NONE";

    [HttpGet("getDogs")]
    public async Task<string> GetDogs()
    {
        string method = "flickr.galleries.getPhotos";
        string gallery_id = "66911286-72157685568512954";

        string url = $"{flickr_api}?method={method}&api_key={api_key}&gallery_id={gallery_id}&{json_format}";

        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

        var stringTask = client.GetStringAsync(url);

        var msg = await stringTask;
        return msg;
    }

    [HttpGet("getTaggedImages")]
    public async Task<string> GetTaggedImages()
    {
        string tag = HttpContext.Request.Query["tag"] == "" ? "" : $"tags={HttpContext.Request.Query["tag"]}&";
        string method = "flickr.photos.search";
        string amount = "20";

        var now = ConvertToUnixTimestamp(DateTime.Now);
        var oneWeekAgo = now - 604800;

        string url = $"{flickr_api}?method={method}&api_key={api_key}&{tag}per_page={amount}&max_taken_date={now}&min_taken_date={oneWeekAgo}&{json_format}";

        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

        var stringTask = client.GetStringAsync(url);

        var msg = await stringTask;
        return msg;
    }

    public static double ConvertToUnixTimestamp(DateTime date)
    {
        DateTime origin = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
        TimeSpan diff = date.ToUniversalTime() - origin;
        return Math.Floor(diff.TotalSeconds);
    }
}
