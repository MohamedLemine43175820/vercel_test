const express = require('express');               // import express



const router = express.Router();                                    // declare function Router()

const Product = require('../models/product');                       // import productModel for use 




// methode post add product 

router.post('/',(req , res)=> {


    const product = new Product({

        title:req.body.title,
        desc: req.body.desc,
        color:req.body.color,
    });

    product.save().then((data)=>{

        res.status(201).json({

            "status":"true",
            "message":"Product created successfully!",
            "data":data,

        });


    });


});


// get all product with then() et catch

/*router.get("/",(req , res)=>{

    Product.find().then((data)=>{

        res.json(data)


    });


});*/



// get all product 

router.get("/", async(req , res)=>{



  try{

    const product = await  Product.find();

        res.json(product);
  }catch(error){

    console.log(error);
  }


    });


    // get product by id 


    router.get("/:productId", async(req , res)=>{



        try{
      
          const product = await  Product.findById(req.params.productId);
      
              res.json(product);
        }catch(error){
      
          console.log(error);
        }
      
      
          });




          // delete  product by id 


    router.delete("/:productId", async(req , res)=>{



        try{
      
          const product = await  Product.deleteOne({"_id":req.params.productId});
      
              res.json(product);
        }catch(error){
      
          console.log(error);
        }
      
      
          });



      // patch  product by id 


      router.patch("/:productId", async(req , res)=>{



        try{
    
          const product = await  Product.updateOne({"_id":req.params.productId},{

            "title":req.body.title,
          });
      
              res.json(product);
        }catch(error){
      
          console.log(error);
        }
      
      
          });







module.exports=router;
















/*


// creat  get 

router.get('/',(req ,res)=>{

    res.status(200).json({

        "message":"welcome"
    });


});

// post methode 

router.post('/', (req , res)=>{

    const name = req.body.name;
    const price = req.body.price;
    res.status(201).json({

        "message":"Product created successfully",
        "data":{

            "name":name,
            "price":price,
        }

    })


});


*/