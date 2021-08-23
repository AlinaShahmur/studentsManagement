const express = require('express');
const StudentBL = require('../models/studentBL')
const router = express.Router()

router.route('/')
.get((req,res) => {
    StudentBL.getAllStudents().then(data => res.json(data))
})

router.route('/:id')
.get((req,res) => {
    let id = req.params.id
    StudentBL.getStudent(id).then(data => res.json(data))
})

router.route('/')
.post((req,res) => {
    let obj = req.body
    StudentBL.addStudent(obj).then(data => res.json(data))
})

router.route('/:id')
.put((req,res) => {
    let id = req.params.id
    let obj = req.body
    StudentBL.updateStudent(id, obj).then(data => res.json(data))
})

router.route('/:id')
.delete((req,res) => {
    let id = req.params.id
    StudentBL.deleteStudent(id).then(data => res.json(data))
})

module.exports = router