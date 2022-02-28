require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const AuthRoute = require('./routes/auth');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);
app.use('/api', AuthRoute)

module.exports = app;