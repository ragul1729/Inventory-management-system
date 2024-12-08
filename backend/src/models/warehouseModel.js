const mongoose = require("mongoose");
const Product = require("./productModel");

const productCountSchema = new mongoose.Schema({
    productID : { type : mongoose.Schema.Types.ObjectId, ref : "Product", required : true},
    count : { type : Number, required : true}
});

const warehouseSchema = new mongoose.Schema( {
    location : { type : String, required : true },
    capacity : { type : Number, required : true },
    products : [productCountSchema]
} );

const Warehouse = mongoose.model("Warehouse", warehouseSchema);
module.exports = Warehouse;