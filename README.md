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

# Exercise Domain Object Security

You can access the keycloak authentication server via http://localhost:9191/auth/admin/

## Available users

The following users with their passwords and roles are available:

* admin / admin123 (role admin)
* erika / erika123 (role user)
* max / max123 (role user)
* james / james123 (role user)

## Login as erika

Use the following request to receive a token:
```
POST http://localhost:9191/auth/realms/master/protocol/openid-connect/token
```
Header:
```
Content-Type: application/x-www-form-urlencoded
```
Body:
```
grant_type:password
client_id:onlineshop
username:erika
password:erika123
```

## Fetch erikas details

With the following requests you can fetch the details:
```
GET http://localhost:4000/customers/0816
```
Header:
```
Authorization: Bearer <token>
```

## Fetch max's details

With the following requests you can fetch the details of Max:
```
GET http://localhost:4000/customers/0815
```
Header:
```
Authorization: Bearer <token>
```

The request will return status code 403 - FORBIDDEN.

## Troubleshooting (Mac M1 processor)

The keycloak image used in some of the excercises
is not compatible with the new M1 processor of Mac.
In order to run the samples, please checkout main branch first
and follow the instructions there
