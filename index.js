// create server with express 

const express = require('express');                        // import express  

const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const cors = require('cors');

//const myRouter = require('./routes/product');                     // import product router 


const app = express();                                        // app is variable  contains function from express



// body parser moddle ware 

app.use(bodyParser.json());


// Allow access middle ware

app.use(cors());




async function connectDB() {
  try {
    // Connexion avec des options recommandées pour éviter les warnings
    await mongoose.connect('mongodb://localhost:27017/test', {
      
    });

    app.listen(process.env.port ||8080 ,()=>{

      console.log("server is running on port 8080");
  })


    console.log('Connected to MongoDB Successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);  // Affiche le message d'erreur seulement
  }
}

connectDB();










// routes middle ware 

app.use('/product', require('./routes/product')); 


















// app : now comme  server 

// start server :













// // Un middleware simple qui journalise l'URL et le type de requête


// creat middle ware 

/*app.use('/product',(req , res , next)=>{                            //  '/' pour dans any request

  console.log("middle ware was called");
  next(); // Passe au middleware suivant ou à la route suivante
});*/