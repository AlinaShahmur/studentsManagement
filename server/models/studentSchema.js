const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    profession: String,
    score: Number
})

const StudentSchema = new mongoose.Schema({
    name: String,
    faculty: String,
    grades: [GradeSchema]
})


module.exports = mongoose.model('students', StudentSchema)