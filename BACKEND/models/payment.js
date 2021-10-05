const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    bill_no:{
        type: String,
        required:true
    },
    receipt_no:{
        type: String,
        required:true
    },
    p_date:{
        type: String,
        required:true
    },
    p_mode:{
        type: String,
        required:true
    },
    p_type:{
        type: String,
        required:true
    },
    p_amount:{
        type: Number,
        required:true
    },
    total_amount:{
        type: Number,
        required:true
    },
    balance:{
        type: Number,
        required:true
    }
})

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;

