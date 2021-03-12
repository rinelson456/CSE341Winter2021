const express = require('express')
const router = express.Router()


const dummyData = require('../../data/prove10-data.json')

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData)
})

router.post('/insertName', (req, res, next) => {

    if (req.body.newName !== undefined) {
        const newName = req.body.newName
        if (
            dummyData.avengers.find(
                element => element.name === req.body.newName
            ) === undefined
        ) {
            dummyData.avengers.push({ name: newName })
            res.sendStatus(200)
        }
    } else {
        res.sendStatus(400)
    }
})

router.get('/', (req, res, next) => {
    res.render('pages/proveAssignments/prove10', {
        title: 'Prove Assignment 10',
        path: '/proveAssignments/10'
    })
})

module.exports = router