using Microsoft.AspNetCore.Mvc;
using RestSharp;
using RestSharp.Authenticators;

namespace Contact.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private static readonly HttpClient client = new HttpClient();

    [HttpGet]
    public string SendContactMail()
    // public static RestResponse SendContactMail()
    {
        string name = HttpContext.Request.Query["name"];
        string email = HttpContext.Request.Query["email"];
        string topic = HttpContext.Request.Query["topic"];
        string message = HttpContext.Request.Query["message"];
        string mailgun_domain = Environment.GetEnvironmentVariable("mailgun_domain") ?? "NONE";
        string mailgun_api_key = Environment.GetEnvironmentVariable("mailgun_api_key") ?? "NONE";
        string mailgun_from = Environment.GetEnvironmentVariable("mailgun_from") ?? "NONE";

        RestClient client = new RestClient("https://api.mailgun.net/v3");
        client.Authenticator = new HttpBasicAuthenticator("api", mailgun_api_key);
        
        RestRequest request = new RestRequest();
        request.AddParameter("domain", mailgun_domain, ParameterType.UrlSegment);
        request.Resource = "{domain}/messages";
        request.AddParameter("from", mailgun_from);
        request.AddParameter("to", "Gustav Andersson <gustav87and@gmail.com>");
        request.AddParameter("subject", topic);
        request.AddParameter("text", $"Name: {name} \nEmail: {email} \nTopic: {topic} \nMessage: {message}");

        var response = client.Post(request);
        var content = response.Content;
        return content;
    }
}
