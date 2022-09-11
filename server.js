const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv');

const User = require("./models/user")


dotenv.config()

const app = express()

mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopology:true
},
    err =>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Connected to the database")
        }
    }
)

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// require apis
const productRoutes = require('./routes/product');
app.use('/api', productRoutes)


app.listen(3000, ()=>{
    console.log('your application is running correctly')
})

//VrHW2KBBZby1y0aq

