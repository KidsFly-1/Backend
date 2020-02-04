#MANNY'S  Backend
GETS
GET all TRAVELER(s) - requires Authorization Header token from login
/api/users

Returns an array of objects

Example:

[
  {
    "id": 1,
    "email": "test@test.com",
    "password": "password"
  },
  {
    "id": 2,
    "email": "backup@test.com",
    "password": "password"
  }
]


GET all TRIPS - requires Authorization Header token from login
/api/trips

Returns an array of objects

Example:

[
  {
    "id": 1,
    "name": "Bens updated trip"
  },
  {
    "id": 3,
    "name": "Cape Town South Africa"
  }
]
GET all User_Trips - requires Authorization Header token from login
/api/user_trips

Returns an array of objects

Example:

[
  {
    "id": 1,
    "email": "test@test.com",
    "password": "password"
  },
  {
    "id": 2,
    "email": "backup@test.com",
    "password": "password"
  },
  {
    "id": 3,
    "email": "tester@test.com",
    "password": "password"
  },
  {
    "id": 4,
    "email": "test123456",
    "password": "$2a$08$vHH2HJWe0jz3V3JTIWu4ieyWdQ0fApALA/vYuM0Xkbog1H1oTQgke"
  }
]
GET all ADMIN (stretch)
/api/auth/admin

Returns an array of objects

Example:

[
  {
    "id": 1,
    "airport": "SFO",
    "departureTime": "12:00PM",
    "children": 2
  },
  {
    "id": 2,
    "airport": "LAX",
    "departureTime": "12:00AM",
    "children": 1
  }
]
POSTS
Register a new Traveler
/api/auth/register

Requirements: email, password, fullName, address, phone, localAirport ID's: are auto-increment (create on their own)

Example of required data:

{
	"email": "example",
	"password":	"example",
	"fullName": "example",
	"address": "example",	
	"phone": "123-456-7890",	
	"localAirport": "example"
}
Login as a Traveler
/api/auth/login

Requirements: valid email, password

Example or login data:

{
	"email": "email",
	"password":	"password",
}
Create a new User_Trip
/api/user_trips/add

Requires: airport, airline, flightNumber, departureTime, carryOnBags (integer), checkedBags (integer), children (integer), arrived (boolean), en_route (boolean)

ID is auto-increment
Example of required data:

   {
    "airport": "JFKs",
    "airline": "Alaskan",
    "flightNumber": "KF202",
    "departureTime": "12:02PM",
    "carryOnBags": 0,
    "checkedBags": 1,
    "children": 3,
    "arrived": 0,
    "en_route": 0
  }
Create a new Trip
/api/trips/add

Requirements: name only

ID = auto-increment

Example of required info:

 {
	"name": "Test Doc Tripss"
  }
PUTS / UPDATES
Update a User_Trip by id
/api/user_trips/:id

Requires: airport, airline, flightNumber, departureTime, carryOnBags (integer), checkedBags (integer), children (integer), arrived (boolean), en_route (boolean)

Example of required data:

{
  "airport": "UPDATE",
  "airline": "UPDATE",
  "flightNumber": "UPDATE",
  "departureTime": "UPDATE",
  "carryOnBags": 5,
  "checkedBags": 7,
  "children": 5,
  "arrived": 1,
  "en_route": 1
}
Update a Trip
/api/trips/:id

Requires: name only

Example of required data:

{
	"name": "Lets update the trip name"
}
DELETES
Delete a User_Trip by ID
/api/user_trips/:id

Delete a Trip by ID
/api/trips/:id