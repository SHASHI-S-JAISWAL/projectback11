const express = require ('express');
const app = express() ;
const dotenv  = require('dotenv');
const mongoose = require('mongoose');
import cors from 'cors';

//importing routes
const authRoute = require('./routes/auth');
const todo = require('./routes/todo');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true  }, (err) =>{console.log('Connected...')  });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
//middleware
app.use (express.json()) ;
app.use(cors());

//route middleware
app.use ('/api/user',authRoute);
app.use ('/api/saved',todo);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server is listening')); 