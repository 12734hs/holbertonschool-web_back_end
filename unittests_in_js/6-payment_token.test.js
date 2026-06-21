let getPaymentTokenFromApi = require('./6-payment_token')
let { expect } = require('chai')

describe('getPaymentTokenFromApi', () => {
    it("check if it done or not", (done) => {
        getPaymentTokenFromApi(true)
            .then((response) => {
                expect(response.data).to.be.equal('Successful response from the API')
                done();
            })
            .catch(() => {
                done();
            })
    })
})