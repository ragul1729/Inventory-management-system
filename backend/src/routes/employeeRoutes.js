const express = require("express");

const router = express.Router();

const Employee = require('../models/employeeModel');

router.get("/:id", async ( req, res ) => {
    try{
        const employee =  await Employee.findById(req.params.id);
        res.status(200).send(employee);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    } 
    
})

module.exports = router;
