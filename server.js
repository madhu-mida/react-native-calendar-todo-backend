// Dependencies

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/connection');
const logger = require('morgan');
const cors = require('cors');

const Event = require("./models/event");



// Middleware

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes

const eventRouter = require('./routes/eventRouter')
app.use('/event', eventRouter)

app.get('/', (req, res) => {
    res.status(200).json({ message: "Root Directory" })
})

app.get("/getEventByDate/:selectedDate", async (req, res) => {
    try {
        res.status(200).json(await Event.find({})
            .where('dateString').equals(req.params.selectedDate))
    } catch (error) {
        res.status(400).json(error)
    }
})


// Server Listener

const start = async () => {
    try {
        connectDB();
        app.listen(PORT, () => {
            console.log(`Server is live on port: ${PORT}`)
        })
    } catch (error) {
        console.log(`Catch error: ${error}`)
    }
}

start();