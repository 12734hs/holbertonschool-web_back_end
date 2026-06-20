let { expect } = require('chai')
let calculateNumber = require('./1-calcul.js')

describe("calculateNumber", () => {
    it('sum', () => {
        expect(calculateNumber("SUM", 1.2, 1.9)).to.equal(3)
    });
    it('subtrack', () => {
        expect(calculateNumber("SUBTRACT", 3.2, 1.9)).to.equal(1)
    });
    it('subtrack by 0', () => {
        expect(calculateNumber("SUBTRACT", 0.2, 5.7)).to.equal(-6)
    });
    it('divide', () => {
        expect(calculateNumber("DIVIDE", 7.9, 1.7)).to.equal(4)
    });
    it('divide by zero', () => {
        expect(calculateNumber("DIVIDE", 7.9, 0.2)).to.be.a("string").and.equal("Error")
    });
});