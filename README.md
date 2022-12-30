# gstav-dotnet
A webpage with Vue 2 in the frontend, .NET 6.0 running in the backend, and a MongoDB database.

## Development workflow
# Installation
For the frontend you need `node` and `npm` installed. For the backend you need the `dotnet` 6 SDK. For the db you need `docker`.
Run the following to install all frontend dependencies.

```
cd app
yarn install
```

# Run the frontend
In the `app` directory, run `yarn serve` to start the frontend listening on port 8080.

# Run the backend
Open the `backend` directory in Visual Studio or VS Code and run the app to start the backend API listening on HTTP port 5000.

## Run the database
Run the following to start up a container running mongod listening on port 27017 on localhost.

```
docker run --name gstav-db -p 27017:27017 mongo`
```

## Optional steps
If you wish to use the contact form and the flickr API, then start the backend with the following environment variables, replacing the capitalized strings with your own:
- mailgun_domain = "YOUR_MAILGUN_DOMAIN"
- mailgun_api_key = "YOUR_MAILGUN_API_KEY"
- mailgun_from = "YOUR_MAILGUN_FROM_ADDRESS"
- flickr_api_key = "YOUR_FLICKR_API_KEY"

