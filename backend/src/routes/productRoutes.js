const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");

router.get("/", async (req,res) => {
    try{
        console.log("Inside try block");
        const products = await Product.find();
        console.log(products);
        res.status(200).json(products);
    }
    catch(error){
        console.log("Inside catch block");
        res.status(500).json({ message: error.message });
    }
})

router.post("/", async (req,res) => {
    try{
        const {  name , description , price, manufacturer } = req.body;
        console.log(name , description , price, manufacturer);
        const newProduct = new Product( {  name , description , price, manufacturer } );
        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
})


router.get("/:id", async (req,res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;