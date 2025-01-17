import { cities } from "./db.js";

// Function to find a city by name from the cities array
export function findCityByName(cityName) {
  return cities.find(
    (city) => city.name.toLowerCase() === cityName.toLowerCase()
  );
}

// Function to validate time format (HH:mm)
export function isValidTimeFormat(time) {
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
  return timeRegex.test(time);
}
/*Here's how the regex works:
^ and $ are anchors that ensure the match occurs from the start to the end of the string (i.e., the whole string must match the pattern).
([01]?[0-9]|2[0-3]) matches the hour part:
[01]?[0-9] matches any number from 00 to 19 (the optional [01]? means the first digit could be 0 or 1, and the second digit is any number from 0 to 9).
2[0-3] matches hours from 20 to 23.
: is a literal character that separates the hour and minute.
([0-5][0-9]) matches the minute part:
[0-5] ensures the first digit of the minute is between 0 and 5 (i.e., valid tens for the minute).
[0-9] ensures the second digit is between 0 and 9 (i.e., valid ones for the minute).
The function returns a boolean value (true or false) depending on whether the input time matches the specified format.*/
