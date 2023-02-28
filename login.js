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
const AdminDetail = require("../model/adminlogin");
const { json } = require('express');


router.post('/loginUser',async(req,res,next)=>{

    console.log(req.body);

    try 
        {

        let emailExist = await AdminDetail.findOne({email:req.body.email,password:req.body.password}) ;
        if(emailExist)
        {

            res.status(200).json({
              message:true
            })
        }
        else
        {
            res.status(400).json({
                message:"false"
            })
        }
        
        }
    catch (err)
       {

            console.log(err);
        
       }

   


})

module.exports = router ;