const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000
const studentsRouter = require('./routers/studentsRouter')
require('./configs/database')

app.use(cors())
app.use(express.json())
app.use('/api/students', studentsRouter)
app.listen(port, () => console.log(`listening on ${port}`))
