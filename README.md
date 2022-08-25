# gstav-dotnet
A webpage with Vue 2 in the frontend, .NET 6.0 running in the backend, and a MongoDB database. 

## Installation instructions
Install npm, docker and docker-compose for your distribution. Then run:
```
npm install
```

## Run application
```
npm start
```

## Stop application
```
npm stop
```

## Restart application
```
npm restart
```

## Optional steps
If you wish to use the contact form and the flickr API, then create a file named .environment in the same dir as docker-compose.yml, with the following contents, replacing the capitalized strings with your own:
- mailgun_domain = "YOUR_MAILGUN_DOMAIN"
- mailgun_api_key = "YOUR_MAILGUN_API_KEY"
- mailgun_from = "YOUR_MAILGUN_FROM_ADDRESS"
- flickr_api_key = "YOUR_FLICKR_API_KEY"
