const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require ("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//const PORT = process.env.PORT || 8050;

app.use(cors());
app.use(bodyParser.json());


const URL = 'mongodb+srv://JananiNS:Nawoda123@cluster1.zxook.mongodb.net/Payment_db?retryWrites=true&w=majority'
const PORT = 8000;


//const URL = process.env.MONGODB_URL;

mongoose.connect (URL,{
    //useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
   // useFindAndModify: false
})
.then(() =>{
    console.log('DB connected');
 })
.catch((err) => console.log('DB connection error',err));
 
const BillRouter = require("./routes/bill.js");
//http://localhost:8000/bill
app.use("/bill",BillRouter);

const PaymentRouter = require("./routes/payment.js");
app.use("/payment",PaymentRouter);

//const connection = mongoose.connection
//connection.once("open",()=>{
   // console.log("Mongodb Connection success!");
//});

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`);
});