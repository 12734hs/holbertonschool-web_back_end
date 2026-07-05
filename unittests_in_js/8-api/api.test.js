const request = require('request')
const { expect } = require('chai')

const app = require('./api')

describe('CHecking the backend system', () => {
    describe('GET /health', () => {
        it('Check is the server alive or not', (done) => {
            request('http://localhost:7865/health', (err, res, body) => {
                expect(body).to.equal('server is alive!!!')
                done();
            })
        })
    })
    
    describe('GET /', () => {
        it('check the status code', (done) => {
            request('http://localhost:7865', (err, res, bodu) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
        });
        it('check the correst result', (done) => {
            request('http://localhost:7865', (err,res,body) => {
                expect(body).to.equal('Welcome to the payment system')
                done();
            })
        })
    })
})