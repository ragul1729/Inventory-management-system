const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema( {
    location : { type : String, required : true },
    capacity : { type : Number, required : true }
} );

const Warehouse = mongoose.model("Warehouse", warehouseSchema);
module.exports = Warehouse;