const mongoose = require('mongoose')

mongoose.connect(`mongodb://${process.env.USERNAME_MLAB}:${process.env.PASSWORD_MLAB}@ds117846.mlab.com:17846/venturus-challenge`, {
    useNewUrlParser: true
})

mongoose.Promise = global.Promise

module.exports = mongoose