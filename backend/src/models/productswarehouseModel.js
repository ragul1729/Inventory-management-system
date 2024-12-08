const mongoose = require("mongoose");

const productwarehouseSchema = new mongoose.Schema({
    warehouseID : { type : mongoose.Schema.Types.ObjectId, ref : "Product", required : true},
    count : { type : Number, required : true },
} );

const Productwarehouse = mongoose.model("Productwarehouse", productwarehouseSchema);
module.exports = Productwarehouse;