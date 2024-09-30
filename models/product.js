const mongoose = require('mongoose');


const productModel = mongoose.Schema({

    title:String,
    desc: String,
    color:String
});

// Create the product model 

module.exports=mongoose.model("product",productModel);