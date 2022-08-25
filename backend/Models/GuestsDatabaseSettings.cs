namespace GuestsApi.Models;

public class GuestsDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string GuestsCollectionName { get; set; } = null!;
}

