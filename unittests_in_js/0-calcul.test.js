let assert = require('assert')
let calculateNumber = require('./0-calcus.js')

describe("check the cases", () => {
    it("Have to return 5", () => {
        assert.strictEqual(calculateNumber(1.2, 3.9), 5)
    })
    it("Have to return 70", () => {
        assert.strictEqual(calculateNumber(66.8, 3.1), 70)
    })
    it("Have to return negative 10", () => {
        assert.strictEqual(calculateNumber(-1, -9), -10)
    })
    it("have to return 1", () => {
        assert.strictEqual(calculateNumber(0, 1), 1)
    })
})