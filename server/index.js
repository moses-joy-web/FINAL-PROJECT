const express= require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
require ('dotenv').config()
const mongoose = require('mongoose')
const User = require('./model/userModel')
const port = process.env.PORT
const uri = process.env.URI

app.use(bodyParser.urlencoded({ extended: true }));



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


app.post('/signup', async(req,res) =>{
    try {
        const {name, email, password} = req.body
        const newUser = new User({name, email, password})
       await newUser.save()
        res.status(201).json({ message: "User created successfully" });
        console.log("User created successfully");
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
        console.log(error);
    }
})


app.post('/signin', async(req,res) =>{
     try {
    const {email, password} = req.body
    const user = await User.findOne({email, password})
    if(user){
        res.status(200).json({
            message: 'Login successful',
        })
    } else{
        res.status(401).json({
            message: 'Invalid credentials',
        })
    }
  } catch (error) {
        console.log({message: "Error signing in"});
        res.status(500).json({ message: "Error signing in" });
        
  }

})





app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
})