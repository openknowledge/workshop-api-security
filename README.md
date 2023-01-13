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

# Exercises

You find the exercises in the corresponding branches

* [Exercise JWT](https://github.com/openknowledge/workshop-api-security/tree/jwt)
* [Exercise Client Credential Flow](https://github.com/openknowledge/workshop-api-security/tree/client-credential)
* [Exercise Excessive Data Exposure](https://github.com/openknowledge/workshop-api-security/tree/excessive-data-exposure)
* [Exercise Rate Limiting](https://github.com/openknowledge/workshop-api-security/tree/rate-limiting)
* [Exercise Domain Object Security](https://github.com/openknowledge/workshop-api-security/tree/domain-object-security)

## Troubleshooting (Mac M1 processor)

The keycloak image used in some of the excercises
is not compatible with the new M1 processor of Mac.
In order to run the samples, you have to build the container from scratch:

```
git clone https://github.com/keycloak/keycloak-containers.git keycloak/containers
docker build -t jboss/keycloak:14.0.0 ./keycloak
```
