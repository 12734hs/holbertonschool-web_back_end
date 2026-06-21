const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('./4-payment.js')
const { expect } = require('chai')
const sinon = require('sinon')

describe('Chekcing one function with the spy', () => {
    it('check', () => {
        const utilsStub = sinon.stub(Utils, 'calculateNumber').returns(110)
        const consoleSpy = sinon.spy(console, 'log')

        sendPaymentRequestToApi(40, 70)

        expect(utilsStub.calledOnce).to.be.true;
        expect(utilsStub.calledWith('SUM', 40, 70)).to.be.true;

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 110')).to.be.true;

        utilsStub.restore()
        consoleSpy.restore()})
})