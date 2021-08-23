const Student = require('./studentSchema');

exports.getAllStudents = function() {
    return new Promise((resolve, reject) => {
        Student.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

exports.getStudent = function(id) {
    return new Promise((resolve, reject) => {
        Student.findById(id, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

exports.addStudent = function(obj) {
    return new Promise((resolve, reject) => {
        let student = new Student({
            name: obj.name,
            faculty: obj.faculty,
            grades: obj.grades
        })
        student.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve("created")
            }
        })
    })
}

exports.updateStudent = function(id,obj) {
    return new Promise((resolve, reject) => {
        Student.findByIdAndUpdate(id, {
            name: obj.name,
            faculty: obj.faculty,
            grades: obj.grades
        }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("updated")
            }
        })

    })
}

exports.deleteStudent = function(id) {
    return new Promise((resolve, reject) => {
        Student.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("deleted")
            }
        })
    })
}