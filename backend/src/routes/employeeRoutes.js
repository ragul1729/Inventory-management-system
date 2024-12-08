const express = require("express");

const router = express.Router();

const Employee = require('../models/employeeModel');

router.post("/", async ( req, res ) => {
    try{
        const { name, salary } = req.body;
        const newEmployee = new Employee({ name, salary } );
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
    
})


router.get("/:id", async ( req, res ) => {
    try{
        console.log("Inside get employees");
        const employees =  await Employee.findById(req.params.id);
        console.log(employees);
        res.status(200).send(employees);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    } 
    
})

module.exports = router;
