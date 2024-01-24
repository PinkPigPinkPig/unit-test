import { expect, it } from "vitest"
import { generateToken, generateTokenPromise } from "./async-example"

it("should generate a token value", async (done) => {
  const testUserEmail = "test@test.com"

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined()
      //   expect(token).toBe(2)
      done()
    } catch (error) {
      done(error)
    }
  })
})

it("should generate a token value", async () => {
  const testUserEmail = "test@test.com"
  const token = await generateTokenPromise(testUserEmail)

  expect(token).toBeDefined()
})
