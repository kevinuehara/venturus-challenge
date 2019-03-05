/**
 * Arquivo: userController.js
 * Autor: Kevin Uehara
 * Descrição: Arquivo responsável pelo roteamento com o mLab
 * Data: 27/02/2019
 */

const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.post('/user', async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.send({
            user
        })
    } catch (err) {
        return res.status(400).send({
            error: 'Failed to save User'
        })
    }
})

router.get('/user/:page/user/:user', async (req, res) => {
    try {
        let page = req.params.page
        let limit = 10
        let skip = limit * (page - 1)

        var filter = [{ name: new RegExp(req.params.user, 'i') },
        { username: new RegExp(req.params.user, 'i') }]

        User.find({ $or: filter }, (error, users) => {
            if (error)
                throw error

            res.json(users)
        }).skip(skip).limit(limit)

    } catch (err) {
        return res.status(400).send({
            error: 'Failed searching user'
        })
    }
})

router.get('/user/:user', async (req, res) => {
    try {
        var filter = [{ name: new RegExp(req.params.user, 'i') },
        { username: new RegExp(req.params.user, 'i') }]

        User.find({ $or: filter }, (error, users) => {
            if (error)
                throw error

            res.json(users)
        })

    } catch (err) {
        return res.status(400).send({
            error: 'Failed searching user'
        })
    }
})


router.get('/user/:page/user/', async (req, res) => {
    try {
        let page = req.params.page
        let limit = 10
        let skip = limit * (page - 1)

        await User.find((error, users) => {
            if (error)
                throw error
            res.json(users)
        }).skip(skip).limit(limit)

    } catch (err) {
        return res.status(400).send({
            error: 'Failed searching user'
        })
    }
})

router.delete('/user/:id', async (req, res) => {
    try {
        let id = req.params.id
        await User.deleteOne({ "_id": id }, err => {
            if (err)
                throw err

            res.status(200).send({ success: true })
        })
    } catch (error) {
        return res.status(400).send({
            error: 'Failed deleting user'
        })
    }
})

router.put('/user/:id', async (req, res) => {
    try {
        let id = req.params.id
        await User.findByIdAndUpdate(id, req.body, {new: true}, err => {
            if (err)
                throw err

            res.status(200).send({ success: true })
        })
    } catch (error) {
        return res.status(400).send({
            error: 'Failed deleting user'
        })
    }
})

module.exports = app => app.use('/api', router)