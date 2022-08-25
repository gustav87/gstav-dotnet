using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Text.Json;
using WebAPIClient;

namespace GithubApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GithubController : ControllerBase
{
    private static readonly HttpClient client = new HttpClient();
    
    [HttpGet]
    public String GetHello() =>
        "hello";
    
    [HttpGet("{id:length(1)}")]
    public List<String> GetList(string id) =>
        new List<string>
            { "AdditionalCardPersonAdressType", "asd", "right on", id };

    [HttpGet("repos")]
    public async Task GetGitHubRepos()
    {
        await ProcessRepositories();
    }

    private static async Task ProcessRepositories()
    {
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
        client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

        // var stringTask = client.GetStringAsync("https://api.github.com/orgs/dotnet/repos");

        var streamTask = client.GetStreamAsync("https://api.github.com/orgs/dotnet/repos");
        var repositories = await JsonSerializer.DeserializeAsync<List<Repository>>(await streamTask);

        // var msg = await stringTask;
        // Console.Write(msg);
        if (repositories is not null) {
            foreach (var repo in repositories) {
                Console.WriteLine(repo.Name);
            }
        }
    }
}
