const express = require ('express');
const app = express() ;
const dotenv  = require('dotenv');
const mongoose = require('mongoose');
//importing routes
const authRoute = require('./routes/auth');
const todo = require('./routes/todo');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true  }, (err) =>{console.log('Connected...')  });

//middleware
app.use (express.json()) ;

//route middleware
app.use ('/api/user',authRoute);
app.use ('/api/saved',todo);

app.listen((5000), () => console.log('server is listening')); 