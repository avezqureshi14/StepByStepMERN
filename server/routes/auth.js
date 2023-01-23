const { request } = require('express');
const express = require('express');
router = express.Router();
const User = require('../models/userSchema')

router.get('/', (req, res) => {
    res.send("Hello world from the server to the Home")
})

// Step 8 using Promises to store inside the online database
router.post('/register', (req, res) => {
    
    //No.1 getting the data which user has filled in the form
    const {name,email,phone,work,password,cpassword} = req.body;

    //No.2 Check whether all fields are entered properly in the form
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error:"Please enter the data , properly in all fields"});
    }

    //No.3 Checking whether user is unique by matching email present in the database with the email given by the user
    User.findOne({email:email})
        .then((userExists)=>{
            //if email is duplicate then show the below error
            if (userExists) {
                return res.status(422).json({error:"Email already Exist"});
            }

            //if email dosent exists then add the user into database 
            //Step 1 : fill all the data from the model in the variable user 
            const user = new User({name, email,phone, work, password, cpassword});
            
            //Step 2 : save the variable user using save method 
            user.save().then(()=>{
                res.status(201).json({message:"User registered Successfully"});
            }).catch((err)=>{console.log(err);});
        })
})

module.exports = router