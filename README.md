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

## Receiving a token 

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

## Analyse the token

The received token is base64-encoded. You can analyse it on [_JWT.io_](https://jwt.io)

## Call the application

With the following requests you can get a list of all users (only allowed as admin):
```
GET http://localhost:4000/customers
```
Header:
```
Authorization: Bearer <token>
```

With the following requests you can get the details of a specific user:
```
GET http://localhost:4000/customers/<customer number>
```
Header:
```
Authorization: Bearer <token>
```

## Troubleshooting (Mac M1 processor)

The keycloak image used in some of the excercises
is not compatible with the new M1 processor of Mac.
In order to run the samples, please checkout main branch first
and follow the instructions there
