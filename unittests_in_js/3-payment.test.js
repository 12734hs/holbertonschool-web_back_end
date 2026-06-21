const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('./3-payment.js')
const { expect } = require('chai')
const sinon = require('sinon')

describe('Chekcing one function with the spy', () => {
    it('check', () => {

    
        const utilsSpy = sinon.spy(Utils, 'calculateNumber')
        const consoleSpy = sinon.spy(console, 'log')

        sendPaymentRequestToApi(40, 70)

        expect(utilsSpy.calledOnce).to.be.true;
        expect(utilsSpy.calledWith('SUM', 40, 70)).to.be.true;

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 110')).to.be.true;

        utilsSpy.restore()
        consoleSpy.restore()})
})