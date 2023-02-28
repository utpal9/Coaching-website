const mongoose = require("mongoose");


const Course = mongoose.Schema({

   courseName:{
        type:String,
        required:true
            },
   coursePicture:{
            type:String,
            },
    courseDescription:{
        type:String,
        required:true
    }
    

},
{
    timestamps:true
});

module.exports = mongoose.model("Course",Course);