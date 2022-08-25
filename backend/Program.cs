using BookStoreApi.Models;
using BookStoreApi.Services;
using GuestsApi.Models;
using GuestsApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Add BookStoreDatabase
builder.Services.Configure<BookStoreDatabaseSettings>(
    builder.Configuration.GetSection("BookStoreDatabase"));

builder.Services.AddSingleton<BooksService>();

// Add GuestDatabase
builder.Services.Configure<GuestsDatabaseSettings>(
    builder.Configuration.GetSection("GuestDatabase"));

builder.Services.AddSingleton<GuestsService>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable CORS
app.UseCors(builder =>
    builder
        .AllowAnyHeader()
        .AllowAnyMethod()
        .SetIsOriginAllowed(_ => true)
        .AllowCredentials());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
