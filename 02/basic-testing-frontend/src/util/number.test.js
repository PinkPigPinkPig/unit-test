import { it, expect, describe } from "vitest"
import { cleanNumbers, transformToNumber } from "./numbers"

describe("transformToNumber", () => {
  it("should transform a string number to a number of type number", () => {
    // Arrange
    const input = "1"
    // Act
    const result = transformToNumber(input)

    //Assert
    expect(result).toBeTypeOf("number")
    expect(result).toBe(+input)
  })

  it("should transport a string number to correct number", () => {
    // Arrange
    const input = "1"
    // Act
    const result = transformToNumber(input)

    //Assert
    expect(result).toBe(+input)
  })

  it("should yield NaN for non-transformable values", () => {
    // Arrange
    const input = "invalid"
    const input2 = {}

    // Act
    const result = transformToNumber(input)
    const result2 = transformToNumber(input2)

    //Assert
    expect(result).toBeNaN()
    expect(result2).toBeNaN()
  })
})

describe("cleanNumbers", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"]

    const cleanedNumbers = cleanNumbers(numberValues)

    expect(cleanedNumbers[0]).toBeTypeOf("number")
  })

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1]
    const cleanFn = () => cleanNumbers(numberValues)
    expect(cleanFn).toThrow()
  })
})
