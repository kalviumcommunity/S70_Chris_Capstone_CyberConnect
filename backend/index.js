const express = require('express') 
const app = express()
const PORT = 8000
const connectDB = require('./config/db')


app.get('/',(req,res) => {
    res.status(200).json({message:'Welcome to CyberConnect'})
})

app.listen(PORT,() =>{
    console.log(`Server is running on ${PORT}`)
    connectDB()
} )