const mongoose = require("mongoose");


const Images = mongoose.Schema({

   imageUrl:{
        type:String,
   }
    

},
{
    timestamps:true
});

module.exports = mongoose.model("Image",Images);