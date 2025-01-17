import { cities } from "./db.js";
import { findCityByName, isValidTimeFormat } from "./helper.js";

/**
 * Hello challenger! You are tasked with writing a function that converts a given time in one city to the corresponding time in another city, taking into account the time zone differences.
 *
 * Both cities are provided with their respective timezone offsets (the difference in hours from UTC). You need to write a function that takes the time in one city (given as a string in the format "HH:mm") and converts it to the corresponding time in another city.
 *
 * What are time zone offsets?
 * Time zones are expressed as offsets from UTC (Coordinated Universal Time), with values like +5, -3, or 0. For example:
 * New York is UTC -5 hours (Eastern Standard Time).
 * London is UTC +0 hours (Greenwich Mean Time).
 * Tokyo is UTC +9 hours (Japan Standard Time).
 *
 * Your implementation should handle invalid city names (not present in the database) and invalid time formats. To do this feel free to use the two helper functions we have already written for you!
 *
 * Your function will have the following parameters:
 * city1: An object representing the first city, which includes:
 * name (string): The name of the city (e.g., "New York").
 * timezoneOffset (number): The timezone offset in hours from UTC (e.g., -5 for New York).
 *
 * city2: An object representing the second city, similar to city1.
 *
 * time: A string representing the time in city1, in the format "HH:MM" (24-hour format).
 *
 * Example Scenario
 * Let’s say we have the following:
 *
 * The time in New York is 12:30.
 * We need to convert it to London's time.
 * Here’s the breakdown:
 *
 * New York is in UTC -5.
 * London is in UTC +0.
 * The difference in their time zones is 5 hours.
 * Thus, 12:30 in New York is 17:30 in London.
 **/

export function convertTime(city1, city2, time) {
  // Good luck!
}
