import { test, it, expect } from "vitest"
import { add } from "./math"

it("Should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3]

  // Act
  const result = add(numbers)

  //Assert
  expect(result).toBe(6)
})

it("Should yield NaN if a least one invalid number is provided", () => {
  // Arrange
  const numbers = [1, "a", 3]

  // Act
  const result = add(numbers)

  //Assert
  expect(result).toBeNaN()
})

it("Should yield a correct sum if an array of numeric string values is provided", () => {
  // Arrange
  const numbers = ["1", "2"]

  // Act
  const result = add(numbers)

  //Assert
  expect(result).toBe(3)
})

it("should yield 0 if an empty array is provided", () => {
  // Arrange
  const numbers = []

  // Act
  const result = add(numbers)

  //Assert
  expect(result).toBe(0)
})

it("should throw an error if no value is passed into then function", () => {
  // Arrange

  // Act
  const resultFn = () => {
    add()
  }

  //Assert
  expect(resultFn).toThrow(/is not iterable/)
})

it("should throw an error if provided with multiple arguments instead of an array", () => {
  // Arrange
  const num1 = 1
  const num2 = 2

  // Act
  const resultFn = () => {
    add(num1, num2)
  }

  //Assert
  expect(resultFn).toThrow(/is not iterable/)
})
