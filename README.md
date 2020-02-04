#MANNY'S  Backend
server is  = https://kids-fly-bw.herokuapp.com
GET REQUESTS

GET all TRAVELER(s) - requires Authorization Header token from login
https://kids-fly-bw.herokuapp.com/api/users

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
https://kids-fly-bw.herokuapp.com/api/trips

Returns an array of objects

Example:

[
  {
    "id": 1,
    "name": Manny's trip"
  },
  {
    "id": 3,
    "name": "Cameroon in Africa"
  }
]
GET all User_Trips - requires Authorization Header token from login
https://kids-fly-bw.herokuapp.com/api/user_trips

Returns an array of objects

Example:

[
  {
    "id": 1,
    "email": "testes@test.com",
    "password": "password"
  },
  {
    "id": 2,
    "email": "backup@test.com",
    "password": "password"
  },
  {
    "id": 3,
    "email": "test@test.com",
    "password": "password"
  }
]
GET all ADMIN (stretch)
https://kids-fly-bw.herokuapp.com/api/auth/admin

Returns an array of objects

Example:

[
  {
    "id": 1,
    "airport": "SFO",
    "departureTime": "12:20PM",
    "children": 4
  },
  {
    "id": 2,
    "airport": "LAX",
    "departureTime": "12:20AM",
    "children": 6
  },
  {
    "id": 3,
    "airport": "JFK",
    "departureTime": "12:02PM",
    "children": 12
  },
]
POSTS
Register a new Traveler
https://kids-fly-bw.herokuapp.com/api/auth/register

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
https://kids-fly-bw.herokuapp.com/api/auth/login

Requirements: valid email, password

Example for login data:

{
	"email": "email",
	"password":	"password",
}


Create a new User_Trip
https://kids-fly-bw.herokuapp.com/api/user_trips/add

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
https://kids-fly-bw.herokuapp.com/api/trips/add

Requirements: name only

ID = auto-increment

Example of required info:

 {
	"name": "Test Doc Tripss"
  }
  
  
PUTS / UPDATES
Update a User_Trip by id
https://kids-fly-bw.herokuapp.com/api/user_trips/:id

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
https://kids-fly-bw.herokuapp.com/api/trips/:id

Requires: name only

Example of required data:

{
	"name": "Lets update the trip name"
}


DELETES
Delete a User_Trip by ID
https://kids-fly-bw.herokuapp.com/api/user_trips/:id

Delete a Trip by ID
https://kids-fly-bw.herokuapp.com/api/trips/:id
