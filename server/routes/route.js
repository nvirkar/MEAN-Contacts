const express = require('express')
const router = express.Router()

const Contact = require('../models/contact')

// get
router.get('/contact', (req, res, next) => {
    Contact.find((err, contact) => {
        res.json(contact)
    })
})

// add
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
    })
    newContact.save((err, succ) => {
        if (err) {
            res.send({ msg: 'Failed to add Contact' })
        }
        else {
            res.send({ msg: 'Successfully added Contact' })
        }
    })
})

// delete
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.send({ msg: 'failed to delete' })
        }
        else {
            res.send({ msg: 'Sucessfully deleted' })
        }
    })

})

module.exports = router