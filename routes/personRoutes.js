const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');
//Post Route to add a Person
router.post('/', async (req,res)=>{
    try{
        const data = req.body //assuming the request body contains the person data
    
        //Create a new Person document using the Mongoose model
        const newPerson = new Person(data);
       
        //save the new Person
       const response = await newPerson.save();
       console.log('data saved');
       res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
    }) 

    // Get method to get the person
router.get('/', async(req,res)=>{
    try{
   const data =  await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
      console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
      }
  )

  router.get('/:workType',async (req,res)=>{
    try{
      const workType = req.params.workType; // // Extract the work type from the URL parameter
      if(workType == 'cheif'  || workType == 'manager' || workType == 'waiter'){
          const response = await Person.find({work : workType});
          console.log('response fetched');
          res.status(200).json(response);
      } else{
          res.status(404).json({error : 'Invalid work type'});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })
  //in all person common hai so delete kar diye
 
  //updated 
   router.put('/:id', async (req , res)=>{
    try{
       const personId = req.params.id;// Return the updated document
       const updatedPersonData = req.body;// Updated data for the person
       const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new : true , 
        runValidators:true,
       }) 
       if(!response){
        return res.status(404).json({error: 'Person not found'});
       }
       console.log('data updated');
       res.status(200).json(response);
    }catch(err){
     console.log(err);
     res.status(500).json({error:'Internal Server Error'});
    }
   })

   //deleted 
   router.delete("/:id", async(req , res)=>{
    try{
      const personId = req.params.id ;//Extract the person's Id from the URL parameter
      //Asumming you have a person model
      const response = await Person.findByIdAndDelete(personId);
      if(!response){
        return res.status(404).json({error: 'Person not found'});
      }

    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
   })
  module.exports = router ;