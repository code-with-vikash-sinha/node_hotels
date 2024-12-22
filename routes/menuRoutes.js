const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
//Post Route to add a MenuItem
router.post('/', async (req,res)=>{
    try{
        const data = req.body //assuming the request body contains the Menu data
    
        //Create a new Menu document using the Mongoose model
        const newMenuItem = new MenuItem(data);
       
        //save the new Menu
       const response = await newMenuItem.save();
       console.log('data saved');
       res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
    }) 
    
    // Get method to get the MenuItem
    router.get('/', async(req,res)=>{
        try{
       const data =  await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
        }catch(err){
          console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
          }
      ) 

      module.exports = router;