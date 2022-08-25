using GuestsApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace GuestsApi.Services;

public class GuestsService
{
    private readonly IMongoCollection<Guest> _guestsCollection;

    public GuestsService(
        IOptions<GuestsDatabaseSettings> guestsDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            guestsDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            guestsDatabaseSettings.Value.DatabaseName);

        _guestsCollection = mongoDatabase.GetCollection<Guest>(
            guestsDatabaseSettings.Value.GuestsCollectionName);
    }

    public async Task<List<Guest>> GetAsync() =>
        await _guestsCollection.Find(_ => true).ToListAsync();

    public async Task<List<Guest>> GetAsync(string name) =>
        await _guestsCollection.Find(x => x.Name == name).ToListAsync();

    public async Task CreateAsync(Guest newGuest) =>
        await _guestsCollection.InsertOneAsync(newGuest);
}

