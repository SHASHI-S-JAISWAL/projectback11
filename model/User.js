const mongoose  = require('mongoose');

const userSchema    = new mongoose.Schema({
    name :{
        type : String ,
        min : 6,
        required :true
    },
    email :{
        type :String,
        required :true ,
        max : 255
    },
    password :{
        type :String,
        required :true ,
        max : 255
    },
    date :{
        type : Date ,
        default : Date.now 
    }
}
)

module.exports = mongoose.model('User',userSchema);