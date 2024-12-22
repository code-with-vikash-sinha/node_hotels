const express = require('express')
const app = express();
const db = require("./db");
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");

app.get('/',function(req,res){
    res.send('Welcome to my hotel.. How can i help you')
})
/*app.get('/chicken',function(req,res){
    res.send('Sure sir, i would love to serve chicken')
})
app.get('/idli',function(req,res){
    var customized_idli = {
        name:'rava idli',
        size:'10cm diameter',
        is_sambhar : true ,
        is_chutney :false
    }
    res.send(customized_idli)
})*/


/*
//Post Route to add a Person
app.post('/person', async (req,res)=>{
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


*/
/*
// Get method to get the person
app.get('/person', async(req,res)=>{
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
*/ 

/*
//Post Route to add a MenuItem
app.post('/item', async (req,res)=>{
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
app.get('/item', async(req,res)=>{
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
*/

//Query params
/*
app.get('/person/:workType',async (req,res)=>{
  try{
    const workType = req.params.workType; // // Extract the work type from the URL parameter
    if(workType == 'chef'  || workType == 'manager' || workType == 'waiter'){
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

*/

// Import the router files
const personRoutes = require('./routes/personRoutes');

const menuRoutes = require('./routes/menuRoutes');
 // Use the routers
 app.use('/person', personRoutes);
 app.use('/item', menuRoutes);
app.listen(PORT,()=>{
    console.log('listening on port 3000')
})