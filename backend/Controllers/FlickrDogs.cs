using System.Text.Json.Serialization;

namespace FlickrDogs
{
    public class FlickrDogsRepository
    {
        [JsonPropertyName("title")]
        public string? Title { get; set; }

        [JsonPropertyName("farm")]
        public string? Farm { get; set; }

        [JsonPropertyName("server")]
        public string? Server { get; set; }

        [JsonPropertyName("id")]
        public string? Id { get; set; }

        [JsonPropertyName("secret")]
        public string? Secret { get; set; }
    }
}
