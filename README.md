# Time Stamp Microservice API
###User stories:
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

##Example Usage:
####URL query for natural language:`localhost:3000/November%2010,%202016`
####URL query for Unix time stamp: `localhost:3000/1450137600` 

##Example Output:
`{ unix: 1478736000, natural: "November 10, 2016" }`
