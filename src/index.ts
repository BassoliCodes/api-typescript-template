import express from 'express'
import routes from './router'

const PORT = process.env.APP_PORT || 3333

// Instantiate the express

const app = express()

// Make the express understand json

app.use(express.json())

// Use API routes

app.use(routes)

// Run the entire api on the desired port and show a log on startup without errors

app.listen(PORT, () => {
    console.log('API successfully instantiated!')
})