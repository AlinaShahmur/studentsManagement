const mongoose = require('mongoose');
const studentsDB = 'mongodb://localhost:27017/studentsDb'


mongoose.connect(studentsDB, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
})