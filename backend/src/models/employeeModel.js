const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const employeeSchema = new mongoose.Schema( {
    name : { type : String , required : true },
    salary : { type : Number, required : true },
    warehouseID : { type : ObjectID, ref : "Warehouse", required : true}
} );

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;