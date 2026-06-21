let getPaymentTokenFromApi = require('./6-payment_token')
let { expect } = require('chai')

describe('getPaymentTokenFromApi', () => {
    it("check the good situation", (done) => {
        getPaymentTokenFromApi(true)
            .then((response) => {
                expect(response.data).to.be.equal('Successful response from the API')
                done();
            })
            .catch((response) => {
                expect(response.data).to.be.equal('The connection was failed')
                done();
            })})

    it("check the bad situation", (done) => {
        getPaymentTokenFromApi(false)
            .then((response) => {
                expect(response.data).to.be.equal('Successful response from the API')
                done();
            })
            .catch((error) => {
                expect(error.data).to.be.equal('The connection was failed')
                done();
            })
    })
    })