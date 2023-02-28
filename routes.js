const path = require('path');
const express = require('express');
const router = express.Router();
const Student = require("../model/enroll");5
const Image = require("../model/images");
const Video = require('../model/videos');
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const multer  = require('multer')
const fs = require("fs");

var name = "" ;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../upload/images'));
  },
  filename: function (req, file, cb) {
     name = Date.now()+file.originalname;
    cb(null, name)
  }
})

const upload = multer({ storage: storage })


router.post('/post-enquiry', (req, res, next)=>{
   //console.log('data: ', req.body.email);
   console.log(req.body);
  res.json(req.body);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abc@gmail.com',
      pass: '123456'
    }
  });
  
  var mailOptions = {
    from: req.body.email,
    to: 'abc@gmail.com',
    subject: `Enquiry for ${req.body.course}`,
    text: `Name : ${req.body.name}
           Email : ${req.body.email}
           Contact number : ${req.body.phonenumber}
           Course : ${req.body.course}`
      
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});

router.post('/enrollment',async(req,res,next)=>{

  console.log(req.body);

    try {

        const email = req.body.email;
        const course = req.body.course ;
        

        const userExist = await Student.findOne({email:email,course:course});

        if(userExist)
        {
          res.status(400).json({
              success:"true",
              meassage:"User already exist"
          })
        }


      const newEnrollment = new Student(req.body);
      await newEnrollment.save();
      res.status(200).send("Data saved");

    } catch (err) {

        console.log(err);
      
    }

});

router.get('/userEnroll',async(req,res) =>{

      const data = await Student.find();

      res.json({total:data.length});
});

router.get('/images',async(req,res,next)=>{

      const data = await Image.find();
      res.json({data:data});

});

router.post('/uploadImages',upload.single('image'),async(req,res,next)=>{

    let urlPath = req.file.path ;
    console.log(urlPath);
   // const path = "./backend/upload/"+req.file.originalname;
  //  const path = `backend/upload/${req.file.originalname}`;
  const path = `../../backend/upload/images/${name}`;
    //return(console.log(path))
    try {
      const saveImageUrl = new Image({imageUrl:path});
      await saveImageUrl.save();
      res.status(200).send("Data saved");
    } catch (err) {
      console.log(err);
      res.status(400).send("Server error");
      
    }

  // res.send('success');
});

router.delete('/deleteImages/:id',async(req,res,next)=>{

  const imageDetail = await Image.findOne({_id:req.params.id});
  console.log("images id",imageDetail);

  if(imageDetail._id !== null)
    await Image.deleteOne({_id:imageDetail._id});

  const imageUrl = imageDetail.imageUrl ;
  const imagePath = imageUrl.substring(3,);

  fs.unlink( imagePath, (err) => {
        if (err) {
            throw err;
        }
    
        console.log("Delete File successfully.");
        
    });

})

module.exports = router;