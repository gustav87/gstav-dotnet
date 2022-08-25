using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace GuestsApi.Models;

public class Guest
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [MaxLength(30)]
    [BsonElement("name")]
    public string Name { get; set; } = null!;

    [MaxLength(30)]
    [BsonElement("email")]
    public string Email { get; set; } = null!;

    [BsonElement("dateAdded")]
    public string Date { get; set; } = null!;
    // public DateTime Date { get; set; }
}
