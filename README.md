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

# Exercise Client Credentials

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

## Validate an address

You can validate an address via the following endpoint:

```
POST http://localhost:4003/valid-addresses
```

Headers:
```
Content-Type: application/json
Authorization: Bearer <token>
```
Body:
```
{
    "recipient": "Erika Mustermann",
    "street": {
        "name": "Poststraße",
        "number": "1"
    },
    "city": "26122 Oldenburg"
}
```

This request will fail, since erika is not allowed to validate addresses anymore.

## Receiving client credential token

Validation of addresses is only allowed for machine-to-machine calls.
Receive a valid token via the following request:

```
POST http://localhost:9191/auth/realms/master/protocol/openid-connect/token
```
Header:
```
Content-Type: application/x-www-form-urlencoded
```
Body:
```
grant_type:client_credentials
client_id:address-validation
client_secret:e7bea4b5-7c65-4d78-9404-0646cd198150
```

Try the address validation with this token and see, that it now works.

## Troubleshooting (Mac M1 processor)

The keycloak image used in some of the excercises
is not compatible with the new M1 processor of Mac.
In order to run the samples, please checkout main branch first
and follow the instructions there
