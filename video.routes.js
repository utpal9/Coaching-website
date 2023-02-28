const mongoose = require("mongoose");
const multer  = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();
const Video = require('../model/videos');
const fs = require('fs');
const { json } = require("express");

var name=""
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../upload/videos'));
    },
    filename: function (req, file, cb) {
       name = Date.now()+file.originalname;
      cb(null, name)
    }
  });
  const upload = multer({ storage: storage })



  router.post('/uploadVideos',upload.single('video'),async(req,res) => {

    //let urlPath = req.file.path ;
    //console.log(urlPath);
   // console.log(req.params);
    const path = `../../backend/upload/videos/${name}`;
    //return(console.log(path));
    //console.log(path);
  
    try {
        
      const saveVideoUrl = new Video({videoUrl:path});
      await saveVideoUrl.save();
      res.status(200).json({
        message:"Data saved"
      })
    } catch (err) {
      console.log(err);
      res.status(400).send("Server error");
      
    }
  
  });

router.post('/uploadytVideos',async(req,res) => {

  console.log(req.body);

  try {
        
    const saveVideoUrl = new Video({videoUrl:req.body.videoUrl});
    await saveVideoUrl.save();
    res.status(200).json({
      message:"Data saved"
    })
  } catch (err) {
    console.log(err);
    res.status(400).send("Server error");
    
  }

})

router.get('/videos',async(req,res,next)=>{

    const data = await Video.find();
    res.json({data:data});

});

router.delete('/deleteVideos/:id',async(req,res,next)=>{

  const videoDetail = await Video.findOne({_id:req.params.id});
  console.log("video id",videoDetail);

  if(videoDetail._id !== null)
    await Video.deleteOne({_id:videoDetail._id});

  const videoUrl = videoDetail.videoUrl ;
  const videoPath = videoUrl.substring(3,);

  console.log(videoPath);

  fs.unlink( videoPath, (err) => {
        if (err) {
           console.log(err);
        }
    
        console.log("Delete File successfully.");
        
    });

    res.status(200).json({
      "message":"success deletion"
    })

});


  module.exports = router;