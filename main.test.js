import { expect, test } from "vitest";
import { cities } from "./db.js";
import { findCityByName } from "./helper.js";
import { convertTime } from "./main.js";

test("1: Valid Time Conversion Between Two Cities", () => {
  // Arrange
  const city1 = "New York";
  const city2 = "London";
  const time = "12:30";
  const expected = "17:30";

  // Act
  const actual = convertTime(city1, city2, time);

  // Assert
  expect(actual).toBe(expected);
});

test("2: Different Time Zones (East vs West)", () => {
  // Arrange
  const city1 = "Los Angeles";
  const city2 = "Tokyo";
  const time = "08:00";
  const expected = "01:00"; // (next day)

  // Act
  const actual = convertTime(city1, city2, time);

  // Assert
  expect(actual).toBe(expected);
});

test("3: Timezone Overflow (Wrap Around 24-Hour Format)", () => {
  // Arrange
  const city1 = "New York";
  const city2 = "Paris";
  const time = "23:00";
  const expected = "05:00"; // (next day)

  // Act
  const actual = convertTime(city1, city2, time);

  // Assert
  expect(actual).toBe(expected);
});

test("4: Timezone Underflow (Negative Time Wrap Around)", () => {
  // Arrange
  const city1 = "Sydney";
  const city2 = "San Francisco";
  const time = "12:00";
  const expected = "18:00"; // (previous day)

  // Act
  const actual = convertTime(city1, city2, time);

  // Assert
  expect(actual).toBe(expected);
});

test("5: Same Time Zone", () => {
  // Arrange
  const city1 = "Berlin";
  const city2 = "Rome";
  const time = "14:00";
  const expected = "14:00";

  // Act
  const actual = convertTime(city1, city2, time);

  // Assert
  expect(actual).toBe(expected);
});

test("6: Invalid Time Format (Error Handling)", () => {
  // Arrange
  const city1 = "New York";
  const city2 = "London";
  const time = "12:60"; // (Invalid minutes)

  // Act + Assert
  expect(() => convertTime(city1, city2, time)).toThrowError();
});

test("7: City Not Found (Error Handling)", () => {
  // Arrange
  const city1 = "Atlantis"; // (A city that doesn't exist in the `findCityByName` function)
  const city2 = "London";
  const time = "12:30";

  // Act + Assert
  expect(() => convertTime(city1, city2, time)).toThrowError();
});

test("8: Time Conversion with Leading Zero (Minutes < 10)", () => {
  // Arrange
  const city1 = "New York";
  const city2 = "London";
  const time = "05:09"; // Check for leading zero in minutes
  const expected = "10:09";

  // Act
  const actual = convertTime(city1, city2, time);

  // Assert
  expect(actual).toBe(expected);
});

test("8: Time Conversion with Leading Zero (Hours < 10)", () => {
  // Arrange
  const city1 = "New York";
  const city2 = "London";
  const time = "04:30"; // Check for leading zero in hours
  const expected = "09:30";

  // Act
  const actual = convertTime(city1, city2, time);

  // Assert
  expect(actual).toBe(expected);
});

test("9: Time Conversion With Different Date Changes", () => {
  // Arrange
  const city1 = "Baker Island";
  const city2 = "Kiritimati";
  const time = "23:30";
  const expected = "01:30"; // (2 days after)

  // Act
  const actual = convertTime(city1, city2, time);

  // Assert
  expect(actual).toBe(expected);
});
