const request = require('supertest')
const { expect } = require('chai')

const app = require('./api')

describe('CHecking the backend system', () => {
    describe('GET /health', () => {
        it('Check is the server alive or not', async() => {
            const res = await request(app).get('/health')

            expect(res.text).to.be.equal('server is alive!!!')
        })
    })
    
    describe('GET /', () => {
        it('check the status code', async () => {
            const res = await request(app).get('/')

            expect(res.statusCode).to.equal(200);
        });
        it('check the correst result', async () => {
            const res = await request(app).get('/')

            expect(res.text).to.be.equal('Welcome to the payment system');
        })
    })
})