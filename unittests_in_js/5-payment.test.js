const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('./4-payment.js')
const { expect } = require('chai')
const sinon = require('sinon')

describe('Chekcing one function with the spy', () => {
    let utilsSpy;
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
        utilsSpy = sinon.spy(Utils, 'calculateNumber');
    })

    afterEach(() => {
        consoleSpy.restore()
        utilsSpy.restore()
    })

    it("checking 100 - 20",() => {
        sendPaymentRequestToApi(100, 20)

        expect(utilsSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 120'))
    })

    it("checking 10 - 10", () => {
        sendPaymentRequestToApi(10, 10)

        expect(utilsSpy.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 20'))
    })
})