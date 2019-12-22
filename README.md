
# RocketLaunch

Two Api details: 

Insturction for using API.
Hit both the APIs from postman

1) fetches all the launches of SpaceX

use "GET API" to hit on given request : localhost:3000/api/spacex

2) Make an endpoint that fetches the details of a particular launch and within the same controller, makes a request to fetch the details of the launchpad of this launch
 

use "POST API" to hit on the given request: localhost:3000/api/spacexSingle

 and request the query for the particular Flight.

use this Example: 

{
	"flight_number":76
	
}


