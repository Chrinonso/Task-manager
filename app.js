// const connectDB = require('./DB/connect')
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler') 


//middleware
app.use(express.static('./public'))
app.use(express.json());



//routes
app.use('/api/v1/tasks', tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT|| 5000;


const start =  async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true,}, { useNewUrlParser: true,}, {useFindAndModify:true})
        app.listen(PORT, console.log(`listening on port ${PORT}`))

    } catch (error) {
        console.log(error)
    }
};

start();

