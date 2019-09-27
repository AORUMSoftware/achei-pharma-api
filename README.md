# Collector Office API info API

This project uses:

- NodeJS `8.10.0`
- Express `4.16.2`
- Docker

For development: 

- Eslint `5.5.0`
- Nodemon `1.18.4`
- Babel `6.26.0`
- Docker Compose

## Runnign the project 

First we need to install [https://nodejs.org/](NodeJS) if we intend to run the project outside docker.
Then we need to run the following command inside the project folder:

```cmd
npm install
```

If we uses we will need to install [https://www.docker.com/](Docker) and [https://docs.docker.com/compose/](Docker Compose)

### Development

In development mode this command will run the Lint then it will listen in port *3000*.
For debugging the exposed port for attachment is *9200*.

**There is a hot reloding module that will update the browser when a file is edit.**

```cmd
npm start
```

If using Docker the command is

```cmd
docker-compose up -d
```

And to follow the logs

```cmd
docker-compose logs -f
```

### Production

This project is configured to Wercker, Oracle solutions for CI (Continuous Integration), when pushed I will update the respect image in OCR (Oracle Container Registry) to be used in each environment.

> The server will listen to port 3000 
