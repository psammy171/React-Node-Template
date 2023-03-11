const express = require('express')
const routes = express.Router()

const users = []

const validateUser = (email, password) => {
    for(let i = 0; i < users.length; ++i){
        if(users[i].email === email && users[i].password === password)
            return {isUserValid:true,user:users[i]}
    }
    return {isUserValid:false}
}

routes.post('/signup',((req,res) => {
    console.log("User ",req.body.email, " signed up")
    users.push(req.body)
    res.send({name:req.body.name, signedUp:true})
}))

routes.post('/login', (req,res) => {
    const {password, email} = req.body
    const authenticate = validateUser(email, password)
    if(authenticate.isUserValid){
        const {isUserValid,user:{name}} = authenticate
        console.log("User ",email," logged in")
        res.send({isUserValid,user:{name,email}})
    }else{
        console.log("Failed to login user ",email)
        res.send(authenticate)
    }
})

module.exports = routes;