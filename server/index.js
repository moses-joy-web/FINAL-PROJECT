const express= require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
require ('dotenv').config()
const mongoose = require('mongoose')
const User = require('./model/userModel')
const port = process.env.PORT
const uri = process.env.URI || "mongodb+srv://mosesjoyfavour960:OfqXmdu6KLBUzLcB@cluster0.m0lnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors());
app.use(express.json())

mongoose.connect(uri)
.then(()=>{
    console.log('Connected to database');
    
}) 
.catch((err) =>{
    console.log(err);
})

app.get('/',(req,res) =>{
    res.send('Hello world')
})


app.post('/signup', async(req, res) => {
    try {
        const {name, mail, password} = req.body;
        const newUser = new User({name, mail, password});
        await newUser.save();
        res.status(200).json({ message: 'Data received successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error saving data' });
    }
});


app.post('/signin', async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await User.findOne({ mail });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        res.status(200).json({ message: 'User signed in successfully' });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  });





app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
})