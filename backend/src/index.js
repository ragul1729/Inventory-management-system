const express = require("express");
const connectDB = require("./config/mongoose");
const cors = require("cors");

const productRoutes = require('./routes/productRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use('/products', productRoutes);
app.use('/warehouses', warehouseRoutes);
app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;


