const mongoose = require("mongoose");


const Videos = mongoose.Schema({

   videoUrl:{
        type:String,
   }
    

},
{
    timestamps:true
});

module.exports = mongoose.model("Video",Videos);