const mongoose = require("mongoose");

const EnrollCourse = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    

},
{
    timestamps:true
});

module.exports = mongoose.model("Enrollment",EnrollCourse);

