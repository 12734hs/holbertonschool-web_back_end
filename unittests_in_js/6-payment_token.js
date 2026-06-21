function getPaymentTokenFromApi(success) {
    return new Promise((resolve, reject) => {
        if(success) {
            resolve({data: 'Successful response from the API' })
        }
        else {
            reject({data: 'The connection was failed'})
        }
    })
}

module.exports = getPaymentTokenFromApi