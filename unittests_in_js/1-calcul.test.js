let assert = require('assert')
let calculateNumber = require('./1-calcul.js')

describe("calculateNumber", () => {
    it('sum', () => {
        assert.strictEqual(calculateNumber("SUM", 1.2, 1.9), 3)
    });
    it('subtrack', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 3.2, 1.9), 1)
    });
    it('subtrack by 0', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 0.2, 5.7), -6)
    });
    it('divide', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 7.9, 1.7), 4)
    });
    it('divide by zero', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 7.9, 0.2), "Error")
    });
});