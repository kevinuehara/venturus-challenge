const mongoose = require('mongoose')

mongoose.connect(`mongodb://${process.env.USERNAME_MLAB}:${process.env.PASSWORD_MLAB}@ds163010.mlab.com:63010/venturus-challenge`, {
    useNewUrlParser: true
})

mongoose.Promise = global.Promise

module.exports = mongoose