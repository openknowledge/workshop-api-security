## Workshop API Security

This repository contains samples for the workshop API Security.

# Running the samples of the workshop

The samples run with Docker Compose.
So please ensure you have docker installed in a recent version.

Start the examples by typing

```
docker compose up --build
```

from within the folder you cloned the repository.

# Exercise Rate Limiting

## Fetch all customers via the api gateway

Perform the following request to fetch all customers:

```
GET http://localhost:8000/customers
```

Hit the SEND button very quickly multiple times to see the status code 503 - Service temporarily unavailable.

## Troubleshooting (Mac M1 processor)

The keycloak image used in some of the excercises
is not compatible with the new M1 processor of Mac.
In order to run the samples, you have to build the container from scratch:

```
git clone git clone https://github.com/keycloak/keycloak-containers.git keycloak/containers
docker build -t jboss/keycloak:14.0.0 ./keycloak
```
