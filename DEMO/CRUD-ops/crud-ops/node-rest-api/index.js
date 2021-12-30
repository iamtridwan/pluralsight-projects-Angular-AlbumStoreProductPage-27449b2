let express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoDb = require('./database/db')

mongoose.Promise = global.Promise
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=> {
    console.log('Database successfully connected')
}, error => {
    console.log('Database error:' + error)
})


const bookRoute = require('./routes/book.routes')

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// Static directory path

app.use(express.static(path.join(__dirname, 'dist/crud-ops/')))


// api root
app.use('/api', bookRoute)

// PORT
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})

// 404 Handler
app.use((req, res, next) => {
    next(createError(404))
})

// Base Route 
app.get('/', (req, res) => {
    res.send('invalid endpoint')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/crud-ops/index.html'))
})

// error Handler

app.use((err, req, res, next) => {
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500
    re.status(err.statusCode).send(err.message)
})