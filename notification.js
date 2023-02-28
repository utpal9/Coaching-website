const mongoose = require("mongoose");


const Notification = mongoose.Schema({

   notification:{
        type:String,
   }
    

},
{
    timestamps:true
});

module.exports = mongoose.model("Notification",Notification);