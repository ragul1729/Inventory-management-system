const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ObjectID = mongoose.Types.ObjectId;

const Warehouse = require('../models/warehouseModel');
const Employee = require('../models/employeeModel');
const Productswarehouse = require('../models/productswarehouseModel');

router.get("/", async (req,res) => {
    try{
        const warehouses = await Warehouse.find();
        res.status(200).send(warehouses);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    } 
})

router.post("/", async (req,res) => {
    try{
        const { location, capacity } = req.body;
        const newWarehouse = new Warehouse( { location, capacity } );
        await newWarehouse.save();
        res.status(201).json(newWarehouse);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    } 
})

router.get("/:id", async (req,res) => {
    try{
        const warehouses = await Warehouse.findById(req.params.id);
        console.log(req.params.id);
        res.status(200).send(warehouses);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
} )

router.get("/:id/employees", async (req,res) => {
    try{
        const employees = await Employee.find({ 'warehouseID' : req.params.id });
        res.status(200).send(employees);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
} )

router.post("/:id/employees", async (req,res) => {
    try{
        const { name , salary } = req.body;
        const warehouse_id = req.params.id ;
        const warehouse = await Warehouse.findById(warehouse_id);
        console.log(warehouse_id);
        console.log(typeof(warehouse_id));
        const newEmployee = new Employee({ name : name, salary : salary, warehouseID : warehouse._id });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
} )


router.get("/:id/products", async (req,res) => {
    try{
        const { products }= await Warehouse.findById(req.params.id).populate({ path : "products.productID"});
        console.log(products);
        res.status(200).send(products);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
} )

module.exports = router;