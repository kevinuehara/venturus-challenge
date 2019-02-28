/**
 * Arquivo: User.js
 * Autor: Kevin Uehara
 * Descrição: Arquivo responsável para tratar o modelo da class 'User' para o mLab
 * Data: 27/02/2019
 */
var mongoose = require('../database/User')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: String,
    username: String,
    email: String,
    city: String,
    rideInGroup: {
        type: Map,
        of: Boolean
    },
    dayOfWeek: [String],
    post: Number,
    album: Number,
    photo: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)